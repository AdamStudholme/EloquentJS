

//------ REGULAR EXPRESSIONS -------------
/*
//--- Creating Regular Expressions

let re1 = new RegExp("abc"); // constructor method
let re2 = /abc/; // Literal value

// Both of these expression objects represent the same pattern.
// When using the RegExp constructor normal string rules applie, re. special charaters etc

// In a regular expression some charaters such as + and ? has special meaning so if you 
// want to use them as part of the regular text then you have to include a \
//Example:

let eighteenPlus = /eighteen\+/;

//----- RegEx Methods -----------

//--- test

console.log(/abc/.test("abcde"));  //True - Checks if string passed in contains pattern of regex.
console.log(/abc/.test("abdef"));  // false
console.log(/abc/.test("werabcdef"));  // true as "abc" is within string

//--- Sets of Charaters
console.log((/[0123456789]/.test("in 1992"))); //true - Checks for any numbers
console.log((/[0-9]/.test("in 1992"))); //true - shorthand of above '-' means it finds  anything between the two unicode codes (48-57 in this case)
console.log((/\d/.test("in 1992"))); //true - '\d' is futher shorthand of above.

//Example of checking a date - does read very well
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

//------- Invert set of charaters

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true

//-------- Repeating parts of a pattern 
// To repeat parts of the pattern the + is used
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false

// The * is similar to the plus but it also allows for zero instances
console.log(/ab*c/.test("ac")); //true
console.log(/ab*c/.test("abbbc")); //true
console.log(/ab*c/.test("abbb")); // false

// The question mark means that the pattern is optional and may or may not occur
let neighbour = /neighbou?r/ // The "u" is now optional

console.log(neighbour.test("neighbour"));
console.log(neighbour.test("neighbor"));

//Setting specific groupings of charaters, useful for examples like the date one above
// {} contains min and max values for length of charaters that match.
let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("1-30-2003 8:45"));
// → true


//---Grouping subexpressions
// You use the opperators on more than one charater at a time by using parentheses
let cartoonCrying = /boo+(hoo+)+/i; // Means its case insensitive
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

//------- Matches and Groups
// As well as test there are other Regex methods

//--Execute

let match = /\d+/.exec("one two 100");
console.log(match); // ["100"] - no match returns "null", otherwise it returns an object containing info
console.log(match.index); // 8 -  will return the index of the in the string

//-- Match 
//Similar to execute

console.log("100 one two 100".match(/\d+/g)); // ["100", "100"] g means it finds all matches globally

// If the group has a subexpression it will show both the condtion that matches the parent
//condition and the one that matches the subexpression
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]


//------------- Date Time -----------------

// new Date() returns a new Date object with information about the time it was created

console.log(new Date()); //Thu Nov 02 2023 08:32:51 GMT+0000 (Greenwich Mean Time)

//!!!!!!! In Javascript, months start at 0, so December is 11, but days start at 1 !!!!!!!!!!!!

//Timestamps are stored as number of milliseconds since the start of 1970 in the UTC timezone.
// Negative numbers allow you to go before this date.

let bDay = new Date(2023, 1, 23); // Passing in a date when creating date object
let bDayTime = new Date(2023, 1, 23, 6, 20, 11) // Passing in a date and time (excluding milliseconds)

console.log(bDay);
console.log(bDayTime);

// If you pass the Date constructor a single arguement it treats it as a millisecond value

console.log(new Date(1003456)); //Thu Jan 01 1970 01:16:43 GMT+0100 (Greenwich Mean Time)
*/
// Using Regex to create a Date object from a string
/*
function getDate(string) {
    let [_, month, day, year] = // the _ in the array is to allow somewhere for the exec to put the full date
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); // Regex checks string for Date pattern 
    console.log([_, month, day, year]); //['1-30-2003', '1', '30', '2003']
    return new Date(year, month -1 , day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT


//------- Word and String Boundaries
// The getDate function above isn't perefect. It will allow extraction of a date from
// nonsensical strings like "100-1-30000", returning just the first charaters that match
//into the  new Date object ( 00-1-3000)

//Enforcing whole string matches using ^ and $. The ^ marks the start and the $ the end.
// /^\d+$/ would match any string containing one or more numbers, /^!/ a string that stars with an !

// Boundarys - \b is used to mark a boundary

console.log(/cat/.test("concatenate")); //True
console.log(/\bcat\b/.test("concatenate")); // False

//---- Choice Patterns
//  Ways to check multiple options at once. For example checking text for a number followed by a
// particular selection of words. See Example:

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/i // Allows for any length number followed by a singular or plural version of the three animals

console.log(animalCount.test("Have :123 Pigs")); // True
console.log(animalCount.test("123 Pighens")); // False

//---- Backtracking

//The Regex:

isNumber = /\b([01]+b|[\da-f]+h|\d+)\b/

//Checks to see if the string is a binary, hexidecimal or decimal number. However it has to have
// backtrack for example 103 would look like a binary number until it reaches the 3. See diagram in book.
// Once it reaches the three it will try the hexidecimal, but again fail when theres no "h"
// Finally trying to match the decimal and succeeeding. This is one of the reasons the b and h for 
// binary and hexidecimal are important. without the "h" the decimal number would have passed for a hex.

// The following will intially try the full string because of the .*, until it then realizes it needs
// an "x", it then loops through the string with one charater less each time until it finds an "x".
console.log(/^.*x/.exec("abcxe"));

//-- Replace method
// Strings have a replace method to replace certain parts with another:

console.log("papa".replace("p", "m")); // "mapa"
console.log("papa".replaceAll("p", "m")); // "mama"

// As well as passing string values in for the replace, you can pass in regex.
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a")); // the replaceAll method doesn't work with Regex so the /g means globally and will change all instances
// → Barabadar

// The real power or replace with regex is when you want to refer to match groups and change the format
//Example a list of names, in "firstName, lastName" format. You can remove the comma and make in to a single
// name with the first and last the correct way around.

let nameList = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"

console.log(nameList);
//Liskov, Barbara
//McCarthy, John
//Wadler, Philip

console.log(nameList.replace(/(\w+), (\w+)/g, "$2 $1")); // The $2, $1 refer to the positions of the parenthesized groups in the string
// Barbara Liskov
// John McCarthy
// Philip Wadler

// You can also pass a function in instead of the second string.

let s = "the cia and fbi";

console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase())); //Now it finds all instances of lower case fbi or cia and converts them to uppercase

// More complex example

let stock = "1 lemon, 2 cabbages and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if(amount ==1){ // If theres only 1 left remove the "s"
        unit = unit.slice(0, unit.length -1)
    } else if (amount == 0){ // If there are none left convert to a string thats not caught by \d
        amount = "no";
    }
    return amount + " " + unit;
}

// function takes the string finds all instances with a number followed by string. Minuses 1 from the number
// reuturns new string

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


// ------- Dynamically creating RegExp Objects

// In cases where you might not know the exact match when you are writing your code.
//Example when you have a varying name which you want to highlight in a string

//Use the RegExp constructor to build up a string

let name = "harry";
let text = "Harry is a suspicious charater.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi"); // regex looks like this: /\b(harry)\b/gi

console.log(text.replace(regexp, "_$1_")); // Will replace any instance of the name with "_name_"

//This works with a straightforward name but if someone uses special charaters in the name it causes
//problems.

let annoyingName = "dea+hl[]rd";
let text2 = "This Dea+hl[]rd is a suspicious. who is dea+hl[]rd?";
let regexp2 = new RegExp("\\b(" + annoyingName + ")\\b", "gi");
console.log(text2.replace(regexp2, "_$1_")); // Just returns the same string "Dea+hl[]rd is a suspicious charater."

//To fix this you need to edit the name to add backslashes before any special charaters.

let escaped = annoyingName.replace(/[\\[.+*?(){|^$]/g, "\\$&"); //The $& means you get the full string returned
console.log(escaped); // "dea\+hl\[]rd"
let regexp3 = new RegExp("\\b(" + escaped + ")\\b", "gi");

console.log(text2.replace(regexp3, "_$1_"));


//--------- Search Method
//search method is similar to indexOf, it returns the first index on which the regex matches, or -1 if theres no match

//console.log("   word".search(/\S/)); // Index of first non whitespace charater index 3
//console.log("    ".search(/\S/)); // Is all whitespace index -1

//--- The Last Index Method
// lastIndex is set to the index proceeding the last found occurence, 
//and dictates where the Regex starts looking from. So if you set the lastIndex to 3. The exec misses the first "y"
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzyzxy");
console.log(match);

console.log(match.index);// → 3
console.log(pattern.lastIndex);// → 4 // You can see the lastIndex of the Regex is now saved as the one proceeding match.index
//If there is no result from the .exec from the lastIndex then the lastIndex is set to 0

//-- Global/Sticky

let global = /abc/g;
console.log(global.exec("xyz abc")); //Global will search for the start of the next match
// → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // sticky will only find the match if it starts at the lastIndex
// → null
sticky.lastIndex = 4; // Change the lastIndex to where the "abc starts and sticky finds "abc
console.log(sticky.exec("xyz abc")); // ["abc", index: 4 ...]

// You need to be careful of the lastIndex automatic update as it can lead to you Regex searching from an
//unexpected start point. This is an effect of the global option

let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // → ["1"]
console.log(digit.exec("and now: 1")); // → null  because the lastIndex property of digit meant the 1 in this was missed

// You can reset the lastIndex between calls:
digit.lastIndex = 0;
console.log(digit.exec("and now: 1")); //["1"]

//The global option also changes the way in which the  match return their arrays,
// it returns all options in an array:

console.log("Banana".match(/an/g)); // ['an', 'an']
console.log(/an/g.exec("Banana")); // ['an']
*/
//-- Looping over matches
/*
let input = "A string with 3 number s in it ... 42 and 88.";
let number = /\b\d+\b/g; // finds any instance of a number;
let match;
while (match = number.exec(input)){ // This will keep looping until there are no numbers found and exec returns null
    console.log("Found", match[0], "at", match.index);   
    console.log(number.lastIndex); // On each loop the lastIndex is updated and determines where the search continues
} 

//---- Parsing an INI File: Example use of Regex

//config INI file

configFile = `searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`

// ; comments are preceded by a semicolon...
// ; each section concerns an individual enemy

//converting the INI string file into an useable object representing the configuration

function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => { // You can pass Regex into the .split() method. This one returns an array of each new line
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)){  // The ^ and the & ensure that the whole line matches
        section[match[1]] = match[2];
        //console.log(result);        
        } else if (match = line.match(/^\[(.*)\]$/)){ // Checks if the line is new subsection title
            section = result[match[1]] = {};
            //console.log(result);            
        } else if (!/^\s*(;.*)?$/.test(line)){  // This checks if the line is a comment or empty line otherwise throws an error
            throw new Error("Line '" + line + "' is not valid");
        }
    });
    return result;
}

let result = parseINI(configFile);

console.log(result);

//------- Issues with code units and Regex
 //Regex works on code units not actual charaters so when a charater consists of more than one code unit you get some 
 //unusual behaviour

console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>")); // The u is the option for "unicode" and means it behaves properly with two code unit charaters
// → true
console.log(/🍎{3}/u.test("🍎🍎🍎")); // true

// --- Using \p

//This checks if the charater belongs to a certain unicode standard. You must have u on the regex for it to work
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
console.log(/\p{Alphabetic}/u.test("α"));
// → true
console.log(/\p{Alphabetic}/u.test("!"));
// → false
*/
//----------- SUMMARY -----------


//          /abc/	   A sequence of characters
//          /[abc]/	    Any character from a set of characters
//          /[^abc]/	Any character not in a set of characters
//          /[0-9]/	    Any character in a range of characters
//          /x+/	    One or more occurrences of the pattern x
//          /x+?/	    One or more occurrences, nongreedy
//          /x*/	    Zero or more occurrences
//          /x?/	    Zero or one occurrence
//          /x{2,4}/	Two to four occurrences
//          /(abc)/	    A group
//          /a|b|c/	    Any one of several patterns
//          /\d/	    Any digit character
//          /\w/	    An alphanumeric character (“word character”)
//          /\s/	    Any whitespace character
//          /./	        Any character except newlines
//          /\b/	    A word boundary
//          /^/	        Start of input
//          /$/	        End of input

//____________________________________________
/*
//----------- EXERCISES -----------------

//---- Regexp Golf

let reg1 = /ca(r|t)/;
let reg2 = /pr?op/;
let reg3 = /ferr(et|y|ari)/;
let reg4 = /ious\b/;
let reg5 = /\s[.,:;]/;
let reg6 = /\w{7}/
let reg7 =/\b[^\We]+\b/i;


// Fill in the regular expressions

verify(reg1,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(reg2,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(reg3,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(reg4,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(reg5,
       ["bad punctuation ."],
       ["escape the period"]);

verify(reg6,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(reg7,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

// ------ Quoting Style

let text = "'I'm the cook,' he said, 'it's my job.'";

regQuotes =/(\B')|('\B)/g

// Change this call.
console.log(text.replace(regQuotes, '"'));
// → "I'm the cook," he said, "it's my job."
*/

//-------- Number Again

// Fill in this regular expression.
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/; // Answer


//let number = /^(-|\+)?(\d+$|(\d+\.|\.\d+|\d+\.\d+))(e(-|\+)?\d+)?$/i; // My attempt

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}