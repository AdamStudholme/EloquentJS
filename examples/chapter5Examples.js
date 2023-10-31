//------ CHAPTER 5 -----------

const SCRIPTS = require("./scripts.js"); // Scripts file contains an object with the UNICODE languages info

//---- Abstracting repeatition
//instead of writing
for (let i = 0; i < 10; i++) {
    //console.log(i);
  }

//Abstract concept to a function. You can even abstract the action. So now the function repeat
//takes the number of repeations and the action you want to repeat

function repeat(n , action){
    for (let i = 0; i < n; i++) {
        action(i);
      }
}

//You can write the function straight into the function
let labels = [];

repeat(5, i => labels.push(`Unit ${i + 1}`))

//console.log(labels)


//---- Higher Order Functions

//Function that returns a new function
function greaterThan(n) {
    return  m => m > n;
  }

let greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11)); // True
//console.log(greaterThan(10)); // m => m > n


//------ Function that changes other functions
function noisy(f) {
    return (...args) => { // returns a function with the arguements (3,2,1 in example) of the inputted function (Math.Min in example)
      //console.log("calling with", args);
      let result = f(...args); // runs the function with the argurments
      //console.log("called with", args, ", returned", result);
      return result;
    };
  }
  noisy(Math.min)(3, 2, 1);
  // → calling with [3, 2, 1]
  // → called with [3, 2, 1] , returned 1


//------ Functions for control flow

// Function below will run the section function if the test returns false.
function unless(test, then){
    if(!test) then();
}

// In use with the repeat function
repeat(3, n => {
    unless(n % 2 == 1, ()=>{
        //console.log(n, " is even");
    });
})
// → 0 is even
// → 2 is even


//console.log(SCRIPTS[0]) 

//---------- Filtering Arrays

function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

//console.log(filter(SCRIPTS, script => script.living)); // The test function takes each element 'script' from scripts and checks if script.living is true)

//filter is actually a standard array method so you do not need the above function instead you can just write
let filteredScript = SCRIPTS.filter(s => s.direction =='ttb');

//console.log(filteredScript);

//-------- Transforming with Map

// This function will allow you to map a transformed array of the same length as original
function map (array, transform){
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

// To build array with just the names of the languages rtl language names

let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl'); // gets rtl languages
 
//console.log(map(rtlScripts, s => s.name)); // this transforms the filtered array to a new array just containing the names

// Map is also a standard array method
//console.log(SCRIPTS.map(s => s.living));

//------------------ Finding what language a charater codes is from

function charaterScript(code){
    for (let script of SCRIPTS){
        if(script.ranges.some(([from,to])=>{ // some method returns true if condition is met. In this case if code is within range of script
            return code >= from && code < to;
        })){
            return script; // If script contains input code script is returned.
        }
    }
    return null; // Otherwise one for loop is completed null value is returned.
}

//console.log(charaterScript(121)); // Returns latin

//--------- Getting charater codes from a string
/*
let horseShoe = "🐴👟";
/*console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
/*

let charaters = (string) =>{
    let charArray =[];
    for(let i = 0; i < string.length; i++){
        charArray.push(string[i]);
    };
    return charArray;
}

console.log(charaters(horseShoe)); // Highlights issue around string charater length.
//Even through the horse and shoe are only two charaters they use two code units each, therefore the stirng
//length is four and it cannot identify the four charaters as they are only half charaters. 

*/

//---------- Recognizing text

function countBy(items , groupName) {
    let counts =[];
    for (let item of items){
        let name = groupName(item); // Using data from line console.log example. groupname is assigned based on the item in the array
        let known = counts.findIndex(c => c.name == name); // If therefindIndex returns -1 then no instance of this name currently exists in array
        if (known == -1){
            counts.push({name, count : 1}); // Therefore a new item is added with name and count of 1
        } else {
            counts[known].count++; // If the name already exists in the counts array then one is added to it
        }
    }
    return counts;
}
/*
console.log(countBy([1,2,3,4], n => n > 2)); // → [{name: false, count: 2}, {name: true, count: 3}]

// This countBy can be used to work out the scripts used in a piece of text.

function textScripts (text) {
    let scripts = countBy (text, char => {
        let script = charaterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count , 0);
    if(total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic


//_________________________________________________

//--------------- EXERCISES ------------------


//---- Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, element) => flat.concat(element), []));

/*
//------- Your Own Loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration,
 it first runs the test function on the current loop value and stops if that returns false. 
 Then it calls the body function, giving it the current value. Finally, it calls the update 
 function to create a new value and starts from the beginning.


function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);      
    }
  }
  
// function loop (start, test, update, action){
//     let n = start;
//     while(test(n)){
//          action(n);
//          update(n);
//        }     
// }

loop(3, n => n > 0, n => n - 1, console.log);
*/

//------------ Everything Function

function every(array, func){
    for(let element = 0; element < array.length; element++){
        if(!func(array[element])){
            return false;
        }
    }
    return true;
}

//console.log(every([1, 3, 5], n => n < 10));
// → true
//console.log(every([2, 4, 16], n => n < 10));
// → false
//console.log(every([], n => n < 10));
// → true

//------------ Dominant Writing Direction

function dominantDirection(text){
    let counted = countBy(text, char => {
        let script = charaterScript(char.codePointAt(0));
        return script ? script.direction : "None";
        }).filter(({name}) => name != "None");

        //console.log(counted);
    
    if( counted.length == 0) return "ltr";
    
    return counted.reduce((a, b) => 
        a.count < b.count ? b : a).name


   
    //     let dominantDirection ="";
    //     let count = 0;
    // for(let item of counted){
    //     if(item.count > count) dominantDirection = item.name;
    //     }
    //     return dominantDirection;        
    }

console.log(dominantDirection("Hello!"));

console.log(dominantDirection("Hey, مساء الخير"));