/*
// Without the break in "sunny" the swtich will include the next case.
switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }


//--------Looping Triangle ---------------
let text = '#';

while (text.length <=7){
  console.log(text);
  text = text +`#`
}
*/
/*
//-----------FizzBuzz-----------------
for(let i=1 ; i<=100; i++){
  let display="";
  if(i % 3 === 0){    
    display = 'Fizz';
  }
  if(i % 5 ===0){
    display += 'Buzz'
  }
  console.log(display || i)
}
*/
/*
//---------- Chessboard --------------

const size = 6;

for(let y = 0; y < size; y++){ 
  let text=""; 
  for(let x = 0; x <= size; x++){
      (x + y) % 2 === 0 ? text += " " : text += '#';
      }
      console.log(text);       
    }
*/        
 

 