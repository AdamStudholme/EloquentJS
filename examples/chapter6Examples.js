//----------- Object Oriented Programming --------------
/*
// ----- Methods
// Nothing more than properties that hold a function value

let rabbit = {};

rabbit.speak = function(line){
    console.log( `The rabbit says '${line}'`);
}; // speak() is a method

rabbit.speak("I'm alive");

// Usually the method would do something with the object

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'.`);
    }

let whiteRabbit = {type: "white", speak}; 

let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("I'm white"); // the this keyword takes the type from the object the method is applied to
hungryRabbit.speak("I'm hungry");

// You can also use a functions call method and pass the object in as a parameter

speak.call(whiteRabbit, "I'm still white");

// If a function is delcared in an arrow function the this keyword is not bound to that wrapping scrope
// Instead it sees the this binding of the scope around them. So you can do this:

function normalize(){
    console.log(this.coords.map(n=> n/this.length));    
}

normalize.call(({coords: [ 0,2,3] , length: 5})); // the arrow function takes the this bindings of the normalize method call.
*/
//---- Classes
/*

//Old way of delcaring an Object with a Constructor Function with a Prototype property
function Rabbit(type) {
    this.type = type;  
}
  
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`); // Define a method attached to Rabbit Prototype
};
  
let weirdRabbit = new Rabbit("weird"); // The new keword  automatically assigns the Rabbit class to the new object

weirdRabbit.speak("I'm odd");

//Important to understand that the prototype constructor function is a function.prototype but the prototype
// of an instance of the object created with it has the rabbit.prototype which is an object.prototype
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); 
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
console.log(Object.getPrototypeOf(Rabbit.prototype) == Object.prototype);

//-- As of 2015 ES6 -- You can create Classes as follows

class Donkey {
    // Constructor
    constructor(type){ 
        this.type = type;
    }
    //Associated Methods for the Rabbit Prototype
    speak(line){ 
        console.log(`The ${this.type} donkey says '${line}'`);   
    }
}

let killerDonkey = new Donkey("killer");
let blackDonkey = new Donkey("black");

blackDonkey.speak("hi");

//--- Overriding derived properties

Donkey.prototype.teeth = "sharp";

console.log(blackDonkey.teeth);
blackDonkey.teeth = "long"; // You can overrite the derived properties by adding it directly to the instance of the object
console.log(killerDonkey.teeth);
console.log(blackDonkey.teeth);

//---------------- Polymorphism

// You can set the same method name to a prototype and give it a different meaning. For example toString
//toString is found in the Object prototype but can be redefined to give a more purposeful result in 
// certain prototypes.

console.log(killerDonkey.toString()); // Returns [object Object]

Donkey.prototype.toString = function(){
    return `a ${this.type} donkey`;
}

console.log(killerDonkey.toString()); // Returns a killer donkey


//----------- Symbols

// Are used to control the use of the same property name for multiple interfaces.
//Symbols are unique and can be used as property names.

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length}cm of blue yarn`
}

// You can now use the [toStringSymbol] to give a different behaviour without affecting toString
console.log([1,2].toString());
console.log([1,2][toStringSymbol]())

// These symbols can be included in a object expressions and classes by using the []

let stringObject = {
    [toStringSymbol]() {return "a jute rope";}    
};

console.log(stringObject[toStringSymbol]());


//---- The Iterator Inteface
// An object given to a for/of loop is expected to be iterrable therefore it has 
// a method with the  Symbol.iterator symbol ( a value defined by JS stored as a property of the Sumbol function)
// An iterrator class, which contains the next() method then defines the behaviour of the iterration.


let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}


// Building a Matrix class

class Matrix {
    constructor(width , height, element = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content =[];
    
        for (let y = 0; y < height; y++){
            for (let x = 0; x < width; x++){
                this.content[ y * width + x] = element(x,y);
            }
        }
    }

    get(x,y) {
        return this.content[y * this.width + x];        
    }
    set(x,y, value){
        this.conent[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if(this.y == this.matrix.height) return {done: true};

        let value = {
                    x: this.x,
                    y: this.y,
                    value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done: false}
    }
}

// Adding the MatrixIterator method to the Matrix class. This could also be written directly into the 
//Matrix class

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
}

// Now you can loop over an object with for/of

let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`);

for( let {x, y, value} of matrix){
    console.log(x,y,value);    
}


//-------- Getters, Setters and Statics


// The temperature class only stores the temperature in Celsius but computes the temp in
// Fahrenheight from this
*/
class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() { // The getter will allow you to call the temperature in fahrenheight
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8; // The setter Temperature.fahrenheit will store the value converting it to celsius 
    }
  
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }
  
  let temp = new Temperature(22);
  console.log(temp.fahrenheit);
  // → 71.6
  temp.fahrenheit = 86;
  console.log(temp.celsius);
  // → 30

  console.log(Temperature.fromFahrenheit(80)); // This allows you to create a temperature using degrees fahrienheight

  let tempFahrenheight = Temperature.fromFahrenheit(71.6);

  console.log(tempFahrenheight)
  /*
  //------------ Inheritance --------------

  // Creating a new class that inherits some of its behaviour from a parent class. An example
  //would be if you have a Matrix which is symmetric. You could extend the Matrix class build before.

  class SymmetricMatrix extends Matrix {
    constructor(size, element = (x,y) => undefined){
        super(size,size, (x,y) => {
            if (x < y) return element (y, x);
            else return element (x ,y)
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y){
            super.set(y, x, value)
        }
    }
  }

  let symMatrix = new SymmetricMatrix(5, (x,y) => `${x}, ${y}`);

  console.log(symMatrix);

  console.log(symMatrix.get(2,3));

//----The instanceof operator
//It is occasionally useful to know whether an object was derived from a specific class. 
//For this, JavaScript provides a binary operator called instanceof.

console.log(
  new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true

//_______________________________________________

//------------- EXERCISES ---------

// ------ A Vector Type -----

class Vec {
    constructor(x,y){
        this.x = x;
        this.y =y;
    }
    get length(){
        return(Math.sqrt((this.x*this.x)+(this.y*this.y)));
    }

    plus(parameter){
        return new Vec (this.x + parameter.x, this.y + parameter.y);
    }

    minus(parameter){
        return new Vec (this.x - parameter.x, this.y - parameter.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
*/
//------------- Groups ------


class Group {
    constructor(){
        this.members =[];
    };

    add (value){ if(this.members.includes(value) == false){this.members.push(value)}};
    delete (value) {if(this.members.includes(value) == true){
                    this.members = this.members.filter(item => item !== this.members[this.members.indexOf(value)]);
                    }};
    has (value){ return this.members.includes(value)}

    static from(array){
        let newGroup = new Group; 
        for(let value of array){newGroup.add(value)};
        return newGroup;}

    [Symbol.iterator]() {return new groupIterator(this); }

}

// newGroup = new Group();
// newGroup.add(1)

// console.log(newGroup.has(1));
// newGroup.delete(1);
// console.log(newGroup.has(1));
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

//------------- Iterrable Groups

class groupIterator{
    constructor(group){
        this.index = 0;
        this.group = group;
    }

    next(){
        if(this.index == this.group.members.length) return {done: true};
        let value = this.group.members[this.index];
        this.index++;
        return {value: value, done: false};
    }
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

let numGroup = Group.from([1,2,3,4,5]);

for(let value of numGroup){
    console.log(value);    
}

//------------- Borrowing a Method

let map = {one: true, two: true, hasOwnProperty: true};

//console.log(map.hasOwnProperty("one")); // This will not work as the object map has a property with the
// same name as the objext.prototype method hasOwnProperty. To get around this use the method call() and
//pass in the object adn the property you are looking for.

console.log(Object.prototype.hasOwnProperty.call(map, "one"));

