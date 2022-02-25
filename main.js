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
