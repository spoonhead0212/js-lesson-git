
/*In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.*/

//var identity = prompt("whate is my name?");
//document.getElementById('emotion') .innerHTML = identity;

//DECLARE JAVASCRIPT VARIABLES
var myName;  //thats how to declare variable'
myName = 'Bola'; //added a value to the variable already declared

//CHANGING VARIABLES
var we;
we = 'assignment'
var us;
us = we;
console.log(us);

/*One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:*/
var winner = "Bucks";
var winner = "Milwaukee";
console.log(winner);
// "Let" doesnt work like that, instead it prints out error

/*VARIABLES DECLARED USING "CONSTANT" ARE READ ONLY. THEY ARE CONSTANT VALUE, WHICH MEANS THAT ONCE A VARIABLE  IS ASSIGNED WITH "CONSTANT", IT CANNOT BE REASSIGNED:*/
const UIDLC = 'Distance learning college ';
let ui = 'University';
ui = "University of ibadan"; //no need using (let) again to redefine the value
console.log(UIDLC + ui);

//DECLARING NUMBER VALUE
let phoneNumber = '08184656329';
    console.log(`this my number ${phoneNumber}`); //string interpolation

//ADD ONE TO THE CURRENT VARIABLE VALUE
myAge = 29;
myAge++;
console.log(`comes december i will be ${myAge} year old`);

//REMOVE ONE FROM THE VARIABLE VALUE
myCatAge = 5;
myCatAge--;
console.log(`comes december my cat will be ${myCatAge} year old`);

//DECIMAL VALUE
let myGrade = 3.8;
console.log(Math.floor(myGrade));

//THE (REMAINDER) OPERATOR % GIVE REMAINDER OF THR DIVISION OF TWO NUMBERS
const remainder = 99 % 3;
console.log(remainder);

//ADDITIONAL ASSIGNMENT OPERATOR
let firstBorn = 30;
let secondBorn = 25;
let lastBorn = 20;

firstBorn -= 1;
secondBorn += 1;
lastBorn *= 2;
console.log(firstBorn, secondBorn, lastBorn);

//ESCAPING LITERAL QUOTES IN JAVASCRIPT '\ at the front and back of the quotes
let sentence = "Everything is gonna go \"RIGHT\" for me this year. so i aint \'TRIPPING\' at all";
console.log(sentence);

//STRING CONCATENATION
let loud = 'Loud dey sweet normal. ';
loud += 'but colos mayan'
console.log(loud);

//Find the Length of a String with .length
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

//Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastNames = "Lovelace";

firstLetterOfLastName = lastNames[0];

//Understand String Immutability
let captain = 'Bolu';
let chill = captain[3];
console.log(chill);

const chao = "eat";
const baff = 'bath';
const gbe = "sleep";
const together = "i am going to " + chao + " " + "then" + " " + baff + " " + "and" + " " + gbe + ".";
console.log(together);

//ARRAY
/*With JavaScript array variables, we can store several pieces of data in one place.*/
const myList = [['Iphone', 100], ['Samsung', 50], ["John", 23], ["cat", 2], ["Kunle", 25]];

//You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:*/

//Nest one Array within Another Array
//let league = [["EPl", 20], ["Laliga", 15]];
//console.log(league);
const myArray = [["Epl", 20], ["Laliga", 15]]
console.log(myArray[0]);

const myArrray = [50, 60, 70];
const myData = myArrray[0];
console.log(myData);

let cars = ['Benz', 'Volvo', 'Audi'];
cars[0] = "Chevrolet";
console.log(cars);

const students = [
    [234, 378, 456],
    [987, 936, 276],
    [23, 45, 56],
    [[948, 754, 983], 888, 345, 290],
];
const student = students[3][0][2];
console.log(student);

//PUSH()
//.push() takes one or more parameters and "pushes" them onto the end of the array.
const studentAge = [["Kunle", 25], ["Adeoye", 22]];
studentAge.push(["Bola", 21]);
console.log(studentAge);

//POP()
//.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

const myArrayy = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArrayy.pop();          
console.log(removedFromMyArray);
console.log(myArrayy);

//SHIFT
//pop() always removes the last element of an array. What if you want to remove the first?

//That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
const dogAge = [['Kel', 3], ['Kelly', 2]]
const doggy = dogAge.shift();
console.log(dogAge);
console.log(doggy);

//UNSHIFT()
//.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const gadget = [['Iphone', 100], ['Samsung', 50]];
gadget.shift();
gadget.unshift('Tecno', 20);
console.log(gadget);

//FUNCTION
//Write Reusable JavaScript with Functions
//In JavaScript, we can divide up our code into reusable parts called functions.
function example() {
    console.log('Learning js');
}
example()

/*function myFunc(frr1, frr2) {
    console.log(frr1, frr2);
}
myFunc(20 * 20)*/

function teachers(school) {
    return school * 5;
}
console.log(teachers(20));

const familyFunction = function() {
    console.log(4);
}
familyFunction()

//CHANGE ALL JS VALUE TO UPPPERCASE
//.UpperCase()

//CANCEL JS WHITESPACE
//.trim()

//MATH.RANDOM() TO GENERATE NUMBER FROM 0 TO 1
console.log(Math.random())

//MATH.FLOOR() TO ROUND UP NUMBER INTO THE LOWEST INTEGER
console.log(Math.floor(3.8));

//MATH.CEIL() TO ROUND UP NUMBER INTO THE HIGHEST INTEGER
console.log(Math.ceil(19.1));

//NUMBER.INTEGER IS USED TO CHECK IF A NUMBER IS INTERGER OR NOT
console.log(Number.isInteger(4));

//TYPEOF IS USED TO KNOW THE TYPEMOF YOUR VARIABLE's VALUE
let product = 'tv';
console.log(typeof product);

//choosed to use the const variable declaration because i have no intention changing that.
//choosed to use the const variable declaration because i have no intention changing that.
const Kelvin = 293;
//subtracted kelvin's value
celsius = Kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

//ELSE IF STATEMENT
let today = '2'
if (today == 1) {
    console.log('Not today');
} else {
    console.log('today');
}

const Xmas = 'Dec 25';
if (Xmas == 'Dec 20') {
    console.log('not yet');
} else if (Xmas == 'Dec 21') {
    console.log('Not close!');
} else if (Xmas == 'Dec 22') {
    console.log('Not here!');
} else if (Xmas == 'Dec 23'){
    console.log('Not there yet se');
} else {
    console.log('You all got it wrong cos it was jesus birthday');
};

//TRUTHY AND FALSY VALUES
let myParents = 4;
if (myParents) {
    console.log('My my parents have 4 children');
} else {
    console.log('they have just one daughter');
};

let username = 'Visitor';
let random = username || 'stranger';
console.log(random);

//TERNARY OPERATOR saves us less coding
let isNight = true;
isNight ? console.log('Lets go to bed now')
: console.log('Not yet time for bed');


const mood = 'swing'
mood != 'swing' ? console.log('Not happy')
: console.log('I am super excited');

//THR SWITCH KEYWORD
let score = 85;
switch (score) {
    case 50:
        console.log("Mid");
        break;
    case 60:
        console.log('credit');
        break;
    case 70:
        console.log('B');
        break;
    case 85:
        console.log("Perfect!");
    break;
}


//LOOPp
for (w = 0; w <=20; w += 1) {
    console.log(w);
}

let nameee = '';
(nameee) ? console.log(`how are you ${nameee}?`) :
console.log(`how are you stranger`);

let igwe = '';
(igwe) ? console.log(`i am the highest goal scorer of the world, and my name is ${igwe}`) : 
console.log('we shall call you \'Titi boi\' ');

let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegTime = true;
let runnerAge = 18;

if (runnerAge != 18 && runnerRegTime == true) {
  console.log('Reg early, and old enough to participate in the race.');
} else {
  console.log('You registered late for the race so you won\'t be participating');
}

if (runnerAge != 18 && runnerRegTime == true) {
  console.log(`Your race number is ${raceNumber}. You will race by 9:30am`);
} else if (runnerAge => 18 && runnerRegTime) {
  console.log(`Your race number is ${raceNumber}. You will race by 11:00am`);
} else if (runnerAge => 18 && runnerRegTime) {
  console.log(`you race number is ${raceNumber}. You shall race by 12:30pm`);
} else {
  console.log(`Your race number is ${raceNumber}. You need to see the registration desk`)
}

//----------------
let artistName = 'Davido';
let stanName = '';

if (artistName === 'Burna') {
    console.log('We are the \'OUTSIDERS\'.');;
} else if (artistName === 'Wizkid'){
    console.log('\'FC\' for life.');
} else if (artistName === 'Davido') {
    console.log('\'30BG\' wa o.');
} else {
    console.log('B list Artist');
} 
//-----------

//Local scope
function myPaddings() {
    let pad = 100;
    console.log(pad);
}
 myPaddings()

//Global Scope
const laptopModel = 'Lenovo';
function myLappy() {                         
    console.log(laptopModel);
}
myLappy();

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());
//----------------

//Global and Local scope
/*const weekDay = 'Monday';
function today() {
    const weekDay = 'Sunday';
    return weekDay;
}
today();*/

// WHILE LOOP 
//var i = 0;
//while (i <= 10) {
//    console.log(w++);
//}

let kill = 20;
console.log(kill);

//FUNCTION AND PARAMETER
function customerName(name) {
    console.log(`we do appreciate your presence today ${name} we expect to see you soon`)
}
customerName('Bolakale')

//DEFAULT PARAMETER
function greeting(name = 'Stranger') {
    console.log(`Hello ${name}`);
}
greeting('SpoonHead')
greeting()

function scorer(henry = 13, pires = 27, fabregas = 10) {
    console.log(`Henry opened the score ${henry} minute into the game`);
    console.log(`Pires doubled the lead ${pires} minute later`);
    console.log(`Fabregas took the game away from their reaching ${fabregas}  before the final whistle`);
}
scorer()

function siblingsAge(mariam, moshood) {
    let ageTogether = mariam + moshood //local scope
    return ageTogether;
}
console.log(siblingsAge(20, 25));

// ARRAY
let [jesus, Debruyne, Cancelo] = [10, 30, 60];
console.log(`first goal: ${jesus}`);
console.log(`second goal: ${Debruyne}`);
console.log(`third goal: ${Cancelo}`);

function rectangleArea(width) {
    const size = width + 5 /*width has no value yet*/
    return size/*telling return to choose size variable and return*/
  }
const space = rectangleArea(50);/*a new variable to  assign a number to the width arguement at the top and the value is 50*/
console.log(space);// 55
//------------------------------------


function multiplyByFifths(number) {
     return number * 9/5 /*number does not have a value yet but it being aded pending the assignment */
}
multiplyByFifths() //undefined
// console.log(multiplyByFifths(10));

function getFahrenheit(celsius) { //new function with a new parameter
    return multiplyByFifths(celsius) + 32; //undefine * 32
}

console.log(getFahrenheit(15)); // 15 + 32 = 47

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
     return monitorCount(rows, columns) * 200
     // adopted from the top function
  }
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

  //--------------------
  let virtual = 0; //variable zero
  function virtualPlayer(num) { //virtual players number = none
      return(num + 5) * 3  //stil notin plus 3
  }

  virtual = virtualPlayer(15);
  console.log(virtualPlayer(15)); //

  //FUNCTION EXPRESSION
  const workers = function(dayWorkers, NightWorkers) {
      return dayWorkers + NightWorkers
  }
  console.log(workers(35, 28));

  //MORE EXAMPLE
  const plantNeedsWater = function(day) {
    if (day === 'wednesday'){
        return true; 
      } else {
        return false;
      }                      
 };
 console.log(plantNeedsWater('wednesday'))

//ARROW FUNCTION () =>

const todayTopic = (mono, poly) => {
    if (mono === 'monogamy' && poly === 'polygamy'){
        return true;
    } else {
        return false;
    };
}
console.log(todayTopic('monogamy', 'polygamy'));

//Concise Body Arrow Functions
const strike = /*function(stillOn)*/stillOn => /*return*/stillOn > 5 ? true : false;
console.log(strike(10));

const mvps = (debruyne, salah) => {
    if (debruyne => 55 && salah < 55){
        return true;
    } else {
        return false;
    }
}
  console.log(mvps(60, 40));

  //double line
  /*const teams = (teamNumber) =>  {
    const numberOfTeams = teamNumbers + teamNumbers;
    return numberOfTeams;
  };
  console.log(teams(10, 5));*/

  //for loop
  for (let k = 0; k < 20; k++) {
      console.log(k);
  }

  let slide = 'nike';
  slide.push(s);
  console.log(slide);
  

  //----------------------------
//  document.getElementsByClassName('firstp').innerHTML = 'hi bro';
/*const element = document.getElementById("intro");
    document.getElementById("demo").innerHTML =
      "GeeksforGeeks introduction is: " + element.innerHTML;*/

      document.getElementById("demo-example").innerHTML = "i dey my day dey on my day";
  