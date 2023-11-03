exports.buildRoadGraph = function (edges) {
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
