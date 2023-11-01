// -------------- Debugging and exception handling
/*

// Example of try and catch for exception handling
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
        } else {
            return "two angry bears";
    }
}

try {
console.log("You see", look());
} catch (error) {
console.log("Something went wrong: " + error);
}

// Example of bad Banking code 
//- If an exception is thrown the money is still taken out of the first account then disappears
const accounts = {
    a: 100,
    b: 0,
    c: 20
  };
  
function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transferBad(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

 // To resolve use finally and tracking
function transfer(from, amount) {
    if(accounts[from] < amount) return;
    let progress = 0; // Progress keeps track of where function is at.
    try{
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) { // If error is thrown after money is taken 
            //and before its depositted it adds it back to account[from]
            accounts[from] += amount;
        }
    }
}
*/
// Javascript isn't good at seperating exceptions, and a catch will handle any exception.
// even if it is not the expected on. Example:
/*
for (; ;) {
    try {
        let dir = promtDirection("Where?"); // ← typo!
        console.log("You chose ", dir);
        break;
    } catch (e) { // the typo which throws undefined variable error' but its caught by 
        //the catch statement intended for the incorrect direction. Now its caught in 
        //an infinite loop as the only way to exit is by putting in a correct direction.
        console.log("Not a valid direction. Try again."); 
    }
}


// As a general rule do not blanket-catch exceptions, as this can lead to situations like
// above where the true exception is hidden. You can handle the excceptions in a more targeted
// manor. To do this define a new type of Error as an extention of the Error class.

class InputError extends Error {} //This is just an empty class which inherits everything from Error

function promptDirection(question){
    let result = prompt(question);
    if (result.toLowerCase() == 'left') return "L";
    if (result.toLowerCase() == 'right') return "R";
    throw new InputError("Invalid direction: " + result);
}

// Changing the for loop above to catch the specfic InputError:

for (; ;) {
    try {
        let dir = promptDirection("Where?"); // ← typo!
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {// Now this catch will only handle the InputError
            console.log("Not a valid direction. Try again.");
        } else {
          throw e; // ny other errors are thrown and will be caught by the enviroments global
          //exception handler if thers no specific catch.
        }
    }
}

//---------- Assertions -----

// Assertions are used to flag anyissue within a program. For example if a programmer
// accidentally passes an empty array into a function which cannot handle them.
// The Error thrown then provides a more useful message than an 'undefined'

function firstElement(array){
    if (array.length == 0){
        throw new Error("firstElement called with []");
    }
    return array[0];
}

// Only use assertions in places where mistakes are common or easy to make. You do
//not want assertions on every input.


//______________________________________________

//------------- EXERCISES --------------

// ------- Retry 
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    try{return primitiveMultiply(a,b);}
    catch (e) {if(e instanceof MultiplicatorUnitFailure){
        return reliableMultiply(a,b);
    } else{ throw e};
}
}

console.log(reliableMultiply(8, 8));
// → 64
*/
//------------ Locked Box
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };


  function withBoxUnlocked(body) {
    if(box.locked){
        box.unlock();
    }
    try{
       return body();
    }
    finally{
        box.lock()
    }
  }
  

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  console.log(box._content);

  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true
  