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
