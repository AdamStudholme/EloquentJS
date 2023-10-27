//------ CHAPTER 5 -----------

const SCRIPTS = require("./scripts.js"); // Scripts file contains an object with the UNICODE languages info

//---- Abstracting repeatition
//instead of writing
for (let i = 0; i < 10; i++) {
    console.log(i);
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

console.log(labels)


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
      console.log("calling with", args);
      let result = f(...args); // runs the function with the argurments
      console.log("called with", args, ", returned", result);
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
        console.log(n, " is even");
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

console.log(filter(SCRIPTS, script => script.living)); // The test function takes each element 'script' from scripts and checks if script.living is true)

//filter is actually a standard array method so you do not need the above function instead you can just write
let filteredScript = SCRIPTS.filter(s => s.direction =='ttb');

console.log(filteredScript);

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
 
console.log(map(rtlScripts, s => s.name)); // this transforms the filtered array to a new array just containing the names

// Map is also a standard array method
console.log(SCRIPTS.map(s => s.living));