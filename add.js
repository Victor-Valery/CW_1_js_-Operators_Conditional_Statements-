// Operators

// var a = 20 + 30;
// console.log(a);

// ******************************************

// var a = 20;
// var b = 3;
// var c = a * b;
// console.log(c);

// ********************************************

// var a = 5;
// var b = 7;
// var c = 2;
// var d = a * b +c;
// console.log(d);

// ****************************************

// Asignment Operators

// var a = 20;
// a -= 5;
// console.log(a);

// --------------------------

// var a = 27;
// a %= 5;
// console.log(a);

// ****************************************

// Comparison Operators

// All comparison operators return Boolean (true or false).

// var a = 10;
// console.log(a==9);

// --------------------------

// var a = 10;
// console.log(a==10);

// --------------------------

// var a = "10";
// console.log(a===10);

// --------------------------

// var a = 10;
// console.log(a!==13);

// *******************

// var a = 10;
// var b = 5;
// console.log(a>=b && b<=20);

// --------------------------

// var a = 10;
// var b = 5;
// console.log(!(a>=b));

// --------------------------

// var a = 3;
// var b = 7;
// console.log(a>=b && b<=20);

// *****************************************

// Nullish coalescing operator

// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0

// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

// ***************************************

// var x = 5;
// var y = 2;

// x = x*=y
// console.log(x);

// **************************************

// var x = 5;
// var y = 2;

// x*=y

// console.log(x);

// **********************************

// var a = 3;
// var b = 2;

// console.log(a*b);

// x*=y;

// *******************************************

// var number = 10;
// // number = number + 5;
// number += 5;

// ****************************************

// var a = 100;
// a *= 5;

// console.log(a);

// console.log(7 !== 10);

// **********************************
// **************************************

// Conditional Statements

// The following conditional statements are available in JavaScript:

// If Statement: If a specified condition is true, Use if to specify a code block to be executed
// else: If the same condition is false, Use else to specify a code block to be executed
// else if: If the first condition is false, Use else if to specify a new condition to test
// switch: compare a value with multiple variants.


// if Statement

// if (condition) {
//     //  Statement (if the condition is true, statement to be execute)
//   }

//---------------------------

//   var x = 3;
// if (x == 3) {
//   console.log(x); //(the condition is true and statement to be execute)
// }

// *****************************************

// else Statement

// if (condition) {
//     //  Statement (if the condition is true, statement to be execute)
//   } else {
//     //  Statement (if the condition is false, statement to be execute)  
//   }

//-----------------------

// var time = 12;
// if (time < 8) {
//     console.log("Good morning.");
// } else {
//     console.log("Good day.");
// }

//-----------------------

// var age = 15;
// if (age >= 18) {

// console.log(age = "Allowed to enter");

// } else {

// console.log(age = "Not allowed to enter");
// }

// *******************************************

// if…else if…else statement

// if (condition_1) {
//     //  Statement_1 (if the condition_1 is true, 
//     //   statement_1 to be execute)
// } else if (condition_2) {
//     //  Statement_2 (if the condition_1 is false & condition_2 is true, 
//     //  statement_2 to be execute)  
// } else {
//     //  Statement_3 (if the condition_1 & condition_2 are false, 
//     //  statement_3 to be execute)  
// }

//-----------------------

// var time = 21.00;
// if (time < 8) {
//     console.log("Good morning.");
// } else if (time < 18) {
//     console.log("Good afternoon.");
// } else {
//     console.log("Good evening.");
// }

// **************************************

// Switch Statements


// var level = 'two';
// var title;
// switch (level) {
//     case 'one':
//         title = "Level 1";
//         break;
//     case 'two':
//         title = "Level 2";
//         break;
//     case 'three':
//         title = "Level 3";
//         break;
//     default:
//         title = "Out of range.";
//         break;
// }
// console.log(title)

//-----------------------

// var name = 'Victor';
// switch (name) {
//   case 'John':
//     console.log(name + ' is a instructor.');
//     break;
//   case 'Walter':
//   case 'James':
//     console.log(name + ' is a mentor.');
//     break;
//   default:
//     console.log('Sorry, i dont know ' + name+ '.');
// }

//-----------------------

// var a = 7;
// switch (a) {
//  case 1:
//  document.write(a);
//  break;
//  case 2:
//  document.write(a+2);
//  break;
//  default:
//  document.write(a+3);
// }

// **************************************

// var num = 20;

// if (num > 0) {
//     console.log("The number is a positive.");
// }

// if (num < 0) {
//     console.log("The number is a negative.");
// }

// **********************************************

// var num = 0;

// if (num > 0) {
//     console.log("The number is a positive.");
// } else if (num < 0) {
//     console.log("The number is a negative."); 
// } else {
//     console.log("The number is a zero.");
// }

// *************************************


// var num = 0;

// if (num > 0) {
//     alert("The number is a positive.");
// } else if (num < 0) {
//     alert("The number is a negative."); 
// } else {
//     alert("The number is a zero.");
// }


// *****************************************

// var num = prompt("Enter a number!!!");

// if (num > 0) {
//     alert("The number is a positive.");
// } else if (num < 0) {
//     alert("The number is a negative."); 
// } else {
//     alert("The number is a zero.");
// }


// *************************************

// var isRaining = prompt("Is it raining?");

// if (isRaining === "yes") {
//     alert("Go take an umbrella!");
// } else {
//     alert("It's ok. You don't need anything.");
// }

// two equal signs or three equal are for comparison or equality chechking.

// one equal sign is for assigning values to a variable.

// *****************************************

// && (and), || (or), ! (not)

// true && true == true 
// true && false == false 
// false && true == false 
// false && false == false 

// true || true == true 
// true || false == true 
// false || true == true 
// false || false == false 

// !true == false
// !false == true

//-------------------------------------------------------------


// var name = "lexi";
// var age = 17;
// var highSchool = true;

// JOB AT APPLE
// job requirements : over 18 and high school degree

// if (age >= 18 && highSchool === true) {
//     alert("You are applicable to apply for this job.")
// }

//-------------------------------------------------------------

// var newGuy = "john";
// var age = 28;
// var highSchool = false;

// // JOB AT AMAZON
// // job requirements : over 18 or high school degree

// if (age >= 18 || highSchool === true) {
//     alert("You can apply!")
// }

// *****************************************

// var num = 3;

// if (num < 7) {
//     console.log("Less than 7");
// } else if (num < 5) {
//     console.log("Less than 5");
// } else {
//     console.log("Greater than or equal to 7");
// }

// *****************************************

// var num = 7;

// switch (num) {
//     case 1:
//     case 2:
//         console.log("Less than 3");
//         break
//     case 3:
//         console.log("Equal to 3");
//         break
//     default:
//         console.log("Greater than 3");
//         break;
// }