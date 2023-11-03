// building a mail delivery robot for a smal town to drop off parcels, the village is represented
// by the array roads below. This array is know as a grpah, which is a collection of points with lines
// between them, this will allow the robot to move between them:

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

 // The array of strings isn't particularly useful/easy to work with. So to make it more useful
 // convert it to a data structure which has all the places that can be reached from any given location

 function buildGraph(edges) {
    let graph = Object.create(null); // Create a new empty object;
    function addEdge(from,to){
        if(graph[from] == null){ // Checks to see if property already exists
            graph[from] = [to];  // If it doesn't it creates new property with first value
        } else{
            graph[from].push(to); // If property exists it adds the new item to the property
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))){ // splits the edges into an array of from and to
        addEdge(from, to); // adds the node connection to the from side property
        addEdge(to, from); // adds the node connection to the to side property
    }
    return graph; // Should return a object with properties representing each location. with all the possible places
    // you can reach directly from it
 }

 const roadGraph = buildGraph(roads);

 console.log(roadGraph);

 // Building a class to represent the village state which consists of info regarding robots current location
 // undelivered parcels location, and destinations.

 class VillageState {
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)){
            return this;
        } else {
            let parcels = this.parcels.map( p => {
                if (p.place != this.place) return p;
                return{place: destination, address: p.address};
                }).filter(p => p.place != p.address);
                return new VillageState(destination, parcels);
        }
    }
 }

 let first = new VillageState( // Initial state location is post office and there is one parcel there for Alices house
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
    );

let next = first.move("Alice's House"); // If the next location is moved to you can see that the new VillageState is created (old one is not overwritten);

console.log(next.place);// "Alice's House"
console.log(next.parcels); // "[]" You can see that the parcels have been delivered as the address matched location
console.log(first.place); // You can see that the first villageState still exists

// Simulation building the robot as a function which considers villageState and also stores its memory
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }

  // Modified function for returning given number of steps taken by the robot.
  function runRobotCount(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) return turn;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
  }

// To set up the most primative version of the robot. Set it up with a random generator to decide 
// which location to visit next

function randomPick(array){ // function to pick a random item from array
    let choice = Math.floor(Math.random()*array.length);
    return array[choice];
}

// Random robot with no memory
function randomRobot(state){ // random robot uses the random generator to pick a random place
    return {direction: randomPick(roadGraph[state.place])};
}

// as the robot is working in a random way you can ignore the second argument (memory)

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

animation.runRobotAnimation(VillageState.random(), randomRobot);

//---------- Improving the route choice decision making
// Using the mail trucks route method - find a route that goes past all addresses and complete it twice.

//Here is such a route:

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];

  // Robot that follows the mail route

  function routeRobot(state, memory){
    if(memory.length == 0){
        memory = mailRoute; // Sets intial memory to the full route
        }
        return {direction: memory[0], memory: memory.slice(1)}; // goes through each item of the route assigning the index 0 to current direction then removing it
  }

//runRobot(VillageState.random(), routeRobot, []); // [] is the intial empty memory

//----------- Making the robot more intelligent. Implementing decision making based on needs

//Pathfinding function

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for(let i = 0; i < work.length; i++){
        let {at , route} = work[i];
        for (let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)})
            }
        }
    }
}

function goalOrientedRobot ({place, parcels}, route){
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address)
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

//runRobot(VillageState.random(), goalOrientedRobot, []);


function compareRobots(robot1, memory1, robot2, memory2){
    let turnCount1 = [];
    let turnCount2 =[];
    let tasks = 100;
    for( let i = 0; i <= tasks; i++ ){
        let villageState = VillageState.random();
        turnCount1.push(runRobotCount(villageState, robot1, memory1));
        turnCount2.push(runRobotCount(villageState, robot2, memory2));
    }
    let avg1 = Math.round((turnCount1.reduce((a,b) => a +b)/turnCount1.length)*100)/100;
    let avg2 = Math.round((turnCount2.reduce((a,b) => a +b)/turnCount2.length)*100)/100;

    return (`Robot 1 average: ${avg1}, Robot 2 average: ${avg2}`)
}

//console.log(compareRobots(routeRobot, [], goalOrientedRobot, []));

function shortRouteOrientedRobot ({place, parcels}, route){
    if (route.length == 0) {
        // Describe a route for every parcel
        let routes = parcels.map(parcel => {
          if (parcel.place != place) {
            return {route: findRoute(roadGraph, place, parcel.place),
                    pickUp: true};
          } else {
            return {route: findRoute(roadGraph, place, parcel.address),
                    pickUp: false};
          }
        });
    
        // This determines the precedence a route gets when choosing.
        // Route length counts negatively, routes that pick up a package
        // get a small bonus.
        function score({route, pickUp}) {
          return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
      }
    
      return {direction: route[0], memory: route.slice(1)};
    }

    
runRobot(VillageState.random(), shortRouteOrientedRobot, []);