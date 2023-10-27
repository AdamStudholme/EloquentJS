/*//-------- The WereSquirrel ---------------
//Journal of daily activities for 3 months and if you turned into a squirrel

let journal = JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];
  ;
*/
/*
// function for adding an entry to the journal
function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

*/
/*
// Function for calculating correlation between two events, if its 1 then the two are perfectly related, 
//0 would be no correlation, and -1 indicates that they are opposites.
function phi(table){
    return(table[3]* table[0] - table[2]*table[1])/
        Math.sqrt((table[2]+table[3])*
                (table[0]+table[1])*
                (table[1]+table[3])*
                (table[0]+table[2]));
}

// Function to generate a 2x2 table needed for phi calculation
function tableFor(event, journal){
    let table =[0,0,0,0];
    for( let i = 0; i < journal.length; i++){
        let entry = journal[i], index= 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index +=2;
        table[index] += 1;
    }
    return table;
}
console.log(phi([76,9,4,1]));

// Function to build list of unique events
function journalEvents(journal) {
    let events =[];

    for (let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}
*/
/*
// Combines above functions to provide the correlation for all the events
for( let event of journalEvents(journal)){
    console.log(event + ': ' + phi(tableFor(event,journal)));
}
*/
/*
//Add filtering to above to only highlight values that have a strong positive or negative effect (closer to 1 or -1)
for( let event of journalEvents(journal)){
    let correlation = phi(tableFor(event,journal));
    if(correlation > 0.1 || correlation < -0.1){
        console.log(event + ": ", correlation);
    }
}

//Results show that theres a strong postive correlation with eating Peanuts
// and a strong negative one with brushing teeth.

// If a a marker "peanut teeth" to all journal entries that have eating peanuts and  miss teeth brushing

for (let entry of journal){
    if(entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")){
            entry.events.push("peanut teeth");
        }
}

//Outcome is a correlation of 1
console.log("peanut teeth: ", phi(tableFor("peanut teeth", journal)));
*/

/*
//--------- Array methods --------------
function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
  }
  console.log(remove(["a", "b", "c", "d", "e"], 2));
  // → ["a", "b", "d", "e"]

  let x = [1];
  let y = 8;

  console.log(x.concat(y))
*/

/*
//---------------- Exercises ------------------

//--------- The Sum Of A Range----------

function range (x,y,z = 1){
    let array = [];
    for(let i = x ; i <= y ; i += z){
        array.push(i);
    }
    return array;
}

//console.log(range(-8,10))

function sum(array){
    let sum = 0;
    for(let number of array){
        sum = sum + number;
    }
    return sum;
}



//-------------Reversing an Array ---------
let array = range(0,10);

reverseArray = (array) =>{
    let reverse = [];
    for (let i = 0; i < array.length; i++){
        reverse.unshift(array[i]);
    }
    return reverse;
}
console.log(array);
array = reverseArray(array);
console.log(array);
*/

//----------- A List ---------------
/*
let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

//console.log(list);

list = {value: 0, rest: list};
list = {value: -1, rest: list};
//console.log(list);

//Converts an array to a List of nested objects
arrayToList = (array) => {
    let list = {};
    for(let i = array.length -1; i>=0 ; i--){
        list = {value: array[i],
                rest: list}
    }
    return list;
}

//console.log(arrayToList([1,2,3]))

let newList = arrayToList([1,2,3]);

// Converts a nested list object into an array of its values.
listToArray = (list) => {
    let array = [];
    for( let node = list; node; node = node.rest){
        if(node.value !== undefined) array.push(node.value); 
    }
    return array;
}

// Adds an element to the start of a nested list
prepend = (element, list) => {
    list = { value : element,
            rest : list}
    return list;
}

// Finds the value of a specific object within the list.
nth = (list, n) => {
    if(!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n-1)
}

console.log(prepend(6,arrayToList([1,2,3])));
*/

//--------------- Deep Comparasion ---------------
// This exercise is to build a function that compares the properties of two objects to see if they match.

let obj = {here: {is: "an"}, object: 2}


deepEqual =(a, b) => {
    if(a === b) return true; //If they are pointing to the exactly the same space in memory return true.
    if(a == null || typeof a != 'object' || b == null || typeof b != 'object') return false; //If either of them is not an object return false

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if(keysA.length != keysB.length) return false; // If the number of keys are not the same return false

    for(let key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false; // goes through each key to see if its contained in second object, and then if it does the value it holds matches.
    }
    return true;
}

console.log(deepEqual(obj))