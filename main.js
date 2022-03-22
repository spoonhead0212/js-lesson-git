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


//LOOP
for (w = 0; w <=20; w += 1) {
    console.log(w);
}

let nameee = 'Aguero';
(nameee) ? console.log(`how are you ${nameee}?`) :
console.log(`how are you stranger`);

let userName = '';
(userName) ? console.log(`Hello, ${userName}!`) : conlsole.log('Hello!');

//let marks = prompt('Enter your mark');
//document.getElementById('emotion').innerHTML = marks;

