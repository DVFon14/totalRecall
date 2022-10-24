//Q +A

/* 
1. We assign a value to a variable by using the symbol =
2. To change the value of a variable (which has to be var or let)
   we can just declare a new value for the variable
3. To assign an existing variable a new variable, we first declare and
   initialize a new variable. Then we set the new variable = to the 
   old variable. For example, let variable 2; variable = variable2
4. a. declare is just stating a variable, such as let variable
   b. assign means giving a variable a value, such as let variable = value
   c. to define means to give properties
5. Pseudocode is notation that resembles/simplifies actual programming languages.
   We should do it as an easy entry point to start codign. 
6. The percentage of time should be spent thinking about how we're going to solve a 
   problem vs actually typing in code to solve it varies depending on the difficulty
   of a problem. If it's a non trivial problem, definetly more than half will 
   probably be spent thinking about how to solve.*/




// STRINGS 
let firstVariable = "Hello World"
firstVariable = 9
let secondVariable = firstVariable
secondVariable = "Hi again"
//the value of the firstVariable is 9
yourName = "Dulce" 
console.log(`Hello, my name is ${yourName}`)


//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
 

// FOR THE NEXT TWO, USE ONLY && OR ||
 console.log(true || false);
 console.log(false || false || false || false || false || true);

 console.log(!false && !false)
 console.log(e == 'Kevin');
 console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
 console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
 console.log(48 == '48');



//the Farm
animal = "cow";
if(animal === "cow"){
    console.log("moo");
} else {
    console.log("Hey! You're not a cow.")
}

//condition ? code if it true : code if it false
//animal === "cow" ? console.log("moo") : console.log("Hey! You're not a cow.")

//Driver's Ed
let age;
if (age >= 16){
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young")
}

//LOOPS

//The Basics

for (let i =0; i<11; i++){
    console.log(i)}

for (let i= 10; i <=400; i++){
        console.log(i)
    }
    
for (let i= 12; i < 4000; i= i+3){
        console.log(i)
    }


//Get Even
for (let i =0; i<100; i++){
    if(i % 2 ==0) {
        console.log (`${i}<--this is an even number`)
    } else {
        console.log(i)
    }
}

//Give Me 5, #1
for (let i =0; i<100; i++){
    if(i % 5 ==0) {
        console.log (`I found a ${i}. High five!`)
   } 
}

//Give Me 5, #2
for (let j =0; j<100; j++){
    if(j % 5 ==0 && j % 3 ==0){ 
        console.log (`I found a ${j}. Three is a crowd, but also high five`) //why did the order matter????
    } else if (j % 3 ==0){
        console.log (`I found a ${j}. Three is a crowd`)
    } else if (j % 5 ==0){
    console.log (`I found a ${j}. High five!`)
    }
} 


//Savings Account

let bank_account =0

for (i=1; i<11; i++){
    bank_account= bank_account + i
}
   console.log(bank_account)

let bank_account2 =0

for (i=1; i<=100; i++){
    bank_account2= bank_account2 + i
}
   console.log(bank_account2 * 2)

//ARRAYS & CONTROL FLOW

/*A. 
1. The things in an array are called elements
2. Arrays do not guarantee any order
3. Arrays could model lists

*/

//B
quotes = ["Don't give up", "Nhan is our governor", "Will's taxes"]

//C
randomThings = [1, 10, "Hello", true]

randomThings[0]; //accesses the 1st element in the array
console.log(randomThings[0]) //Changes the value of "Hello" to "World"

randomThings[2]= "World"
console.log(randomThings[2])

//D
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]; // accesses the 3rd element of the array
ourClass[4] = "Octocat"; //Changes the value of "Github" to "Octocat"
ourClass.push("Cloud City") //Adds a new element, "Cloud City," to the array

console.log(ourClass)

//E
const myArray = [5, 10, 500, 20]

myArray.push('Aegon');
myArray.push('Targaryen');
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();

console.log(myArray)

myArray.reverse(); //<--- come back to this!!!1

console.log(myArray)



//F

let k;

if (k < 100){
    console.log(`${k} is a little number`)
} else if (k >= 100){
    console.log(`${k} is a big number`)
} else {
    console.log (`${k} is not a number`)
}

//G

let m;

if (m < 5){
    console.log(`${m} is a little number`)
} else if (m >= 10){
    console.log(`${m} is a big number`)
} else {
    console.log (`monkey`)
}

//H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let thirdItem = kristynsCloset[2]
console.log("Kristyn is rocking that " + thirdItem + " today!")

kristynsCloset.splice(6, 2, "raybans", "marshmallow peeps")
console.log(kristynsCloset)

kristynsCloset[5]= "stained knit hat"
console.log(kristynsCloset)

let tomsShirts = thomsCloset[0][0]; //didn't need this line
console.log(tomsShirts) //could just done thomsCloset[0][0]

let tomsPants = thomsCloset[1][0]; 
console.log(tomsPants)

let tomsAccessories = thomsCloset[2][0]; 
console.log(tomsAccessories)

console.log(`Tom is looking good in a ${tomsShirts}, 
${tomsPants}, and ${tomsAccessories}`)



thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1][2])

//FUNCTIONS

//B.
function printCool(name){
    console.log(`${name} is cool`)
}

printCool("Jason")

//C.
function calculateCube(dimensions){
    volume = dimensions * dimensions * dimensions
    console.log(`The volume is ${volume} units cubed`)
}

calculateCube("2")



//D 
function isVowel(charater){
        
    let AEIOU = ["a","e","i","o","u"];//store the argument inside The Input
    let  input = charater.toLowerCase();
    //check the condition if the array is contain the element that is converted to lowercase
     if (AEIOU.includes(input)=== true){ //true is not necessary
         return true;
       } else{
     return false;
      }
     }
 console.log(isVowel('a'));




//E
function getTwoLength (string1, string2){
    let array1= [string1.length,string2.length]
    console.log(array1)
    return array1
}
getTwoLength("123", "1234")


/*function getTwoLength2 (string1, string2){
    let array1= []
    array1.push(string1.length)
    array1.push(string2.length)
    console.log(array1)
    return array1
}
getTwoLength2("123", "1234")*/




//F <---come back to this one
/*function getMultipleLengths(array1){
    let array2= []
    array1.forEach(element => {
        array2.push(element.length)
        console.log(array2)
    });
}
getMultipleLengths(["1", "12", "123", "1234"]) */

function getMultipleLengths(numberArray){
    let newArray = []
    numberArray.forEach(function(element){
     newArray.push(element.length)
    });
    return newArray;
  }
  console.log(getMultipleLengths(["1", "12", "123", "1234"]))





//G
function maxOfThree(a, b, c){
    let test =a 
    if (b > test) test= b; //if b >test, then test will update to b. if b is not > test, then test will NOT update
    if (c> test) test =c;
    return test;
}
console.log(maxOfThree(12, 12, 3))



//H
function printLongestWord(arrayOfStrings){
    let longest = arrayOfStrings[0];
    for (let i=1; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}
 console.log(printLongestWord(["Is", "this", "the", "longest"]))


 //OBJECTS

 const user = {
    name: "Andrew",
    email: "potato@aol.com",
    age: 27,
    purchased: []
 }

 user.email = "slug@aol.com";
 console.log(user.email);

 user.age++
 console.log(user.age)

 user.location = "U.S"
 console.log(user)

 user.purchased.push("carbohydrates")
 user.purchased.push("peace of mind")
 user.purchased.push("Merino jodhpurs")
 console.log(user.purchased[2])

 user.friend = {
    name: "Grace Hopper",
    age: 85,
    purchased: [],
    location: "Ireland"
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age++
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])

for (let i=0; i< user.purchased.length; i++){
    console.log(user.purchased[i])
}

for (let i=0; i< user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

function updateUser(){
    user.age++;
    console.log(user.name.toUpperCase())
}

function oldAndLoud(person){
    person.age++
    person.name.toUpperCase();
    return person;
}

console.log(oldAndLoud(user))



