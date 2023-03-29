
/* value and varible in JavaScript*/

var myName = "Shlok Jadeja";
var _myName = "shlok";
var $my__Name = "shlokJadeja";
// var 1my_Name = "shlokJadeja"; // ----------> this show an error

/*1. we can't use Number as a first latter in JavaScript we use only latter  , underscore and $ as a first latter.

2.There is no limit to define a varible name

3.This is good practice to write Varible in cammelCase format ex:- myAge , myName , rollNumber etc...

4.Varible are Case Sensitive it means myAge and myage both are different for the js
*/

// console.log(myName);







// /*Data types in JAvaScrpit */

// var myName = 'shlok'; //string
// var myName = 13; //Number
// var myName = null; //object
// var myName = 1325.25; //number
// var myName = true; //boolean

// console.log(myName);
// console.log(typeof (myName));

// //undefined
// console.log(typeof (myAge));






/*Some extra Question  */

// console.log(10 + "20");
// console.log(10 - "20"); //This is bug in Java Script
// console.log(10 * "25"); //This is bug in Java Script
// console.log("20" + "25");
// console.log(20 + 25);
// console.log("20" - "25"); //This is show a bug
// console.log("shlok" - "shlok");
// console.log(true + true);
// console.log(true - true);
// console.log(true - false);
// console.log(false - true);
// console.log(false - false);









// /*What is a difference between null and undefined...? */

// var Name = null;
// var rollNumber;

// console.log(Name);
// console.log(rollNumber);
// rollNumber = 45;
// console.log(rollNumber);





// /** what is NaN....? */
// // NaN is a property of the global object
// //NaN  = Not-A-Number

// // isNaN method

// var myPhoneNumber = 9726666647;
// var myName = "Shlok Jadeja";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));










/** Operators in JavaScript */
/**
1. Assignment Operators
2. Artihmetic Operators
3.Increment adn Decrement Operator
4.Comparison Operators
5.Logical Operators
6.String Operators
7.Confitional (Ternary) Operator
*/


// /** Exponrtiation Operator */

// console.log(5 ** 4); // ---> 5*5*5*5

// //Swap two numbers without using third varible

// var a = 25;
// var b = 15;
// console.log("a = " + a);
// console.log("b = " + b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("After Swap")
// console.log("a = " + a);
// console.log("b = " + b);


// /** Diffrence Between == and === */

// // == cheack only both value if same then reply true otherwise false
// // === cheack value as well as datatype if both are from differnet data type still their value is same then it will return false

// var num1 = 10;
// var num2 = "10";

// console.log(typeof (num1));
// console.log(typeof (num2));
// console.log(num1 == num2);
// console.log(num1 === num2);




// for(let i = 0; i < 10; i++) {
//     debugger;
//     console.log(i);
// }



// /** Control Statement & Loops */
// /**
//  1. If...else
//  2. Switch Statement
//  3. While Loop
//  4. Do-while Loop
//  5. For loop
//  6. For in loop
//  7. For of loop
//  */


// var Age = 19;

// if (Age >= 18) {
//     console.log("You are eligibel for voting");
// }
// else {
//     console.log("You are not eligibel for voting");

// }

// // Now wirte same logic through ternari opertor
// console.log((Age>=18)?"you are elifibel for vete":"you are not eligibel for vote");


/** write a program to check wether a year is leap year or not...? */

/**
var year = 2021;
debugger;

if ((year % 4 == 0)) {
    if (year % 100 == 0) {
        if (year%400 == 0) {
            console.log("The year " + year + " is leap year");
        }
        else{
            console.log("The year " + year + " is not a leap year");

        }

    } else {

        console.log("The year " + year + " is leap year");
    }


}
else {

    console.log("The year " + year + " is not a leap year");
}

*/






/** Function in Java Script */

// Function is a block of code to design a particular task in JavaScript

// A function defiinitation (also called a function declartation or function statement)
// consists of the function keyword  , followed by :
// The name of Function
// A list of pramater to the function , enclode in parentheses and separated by commas.
// The javaScript statement that define the function, encloed in curly brackets {......}.

// function Sum(a ,b) {
//     var c = a+b;
//     console.log("The sum of " + a + " and " + b + " is " + c);
// }

// Sum(45 , 10);
// Sum(55 , 10);











/** Feature of EcmaScript 2015 or ES6 */





// 1.

/** Let and Const */
// var ==> Function Scope
// let and const ==> Block Scope




//VAR

//In var we can Again declare same varible but the value of above varible is overwritten by that varible

// var name = "Shlok";
// var name  = "Jadeja";

// console.log(name);







//LET

// let name = "shlok";
// // let name = "jadeja";  // This show an error in code We can't declare same varible again through let

// console.log(name);

// function display() {
//     let name = "shlok";

//     for (let i = 0; i < 10; i++) {
//         let name1 = "jadeja";
//         console.log(name + " " + name1);
//     }
//     // console.log(name + " " + name1); // this line shown an error because we can't use let varible out of for block or any block because it value is valid only in block.
// }

// display();









//CONST

// const myName = "Jadeja";

// console.log(myName);

// // myName = "shlok"; // This shown an error in code because we can't change the value of const varible
// console.log(myName);





// 2.
// Template Literals (Template Strings)

//

// for (let num = 1; num <=10; num++) {
//     let tableOf = 12;

//     // old method
//     // console.log(tableOf + " X " + num + " = " + (tableOf*num));

//     //With the help of leiterals
//     console.log(`${tableOf} X ${num} = ${tableOf*num}`);
// }






//3.

// Default Parameters
// Defalut function parameters allow named parameters to be initialized with deeflaut value if no vallue is or undefined is passed.


// function mult(a ,b=4) {
//     return a*b;
// }

// console.log(mult(5)); // Here we pass only one value so second value is taken as a 4

// console.log(mult(5 , 7)); // Here we pass two value so that it reture multiplication of that




//4.

//fat Arrow Function


 //Normal way to write a function

//  console.log(sum(5 , 6));

//  function sum(a ,b) {
//         return `The sum of ${a} and ${b} is ${a+b}`;
//     }
    // Here we call the function above and then we defined the function in normal way it allow to do.


    // Conveting same function into Fat Arrow  function

    // const sum = (a,b) =>{
    //     return `The sum of ${a} and ${b} is ${a+b}`;
    // }

    // write above function in one line

    // const sum = (a ,b) => `The sum of ${a} and ${b} is ${a+b}`;

    // console.log(sum(7 , 8));











//Array in JavaScript
//In js we have Arrau class and arrays are the prototype of this class.

//  let myFriends = ['shlok' , 'raj' , 'sahil', 45 , true]

//  console.log(typeof(myFriends[4]));
//  console.log(typeof(myFriends[5]));

 //length of an array

//  console.log(myFrsiends.length);



// For loop to print a all value of Array
// for (let i = 0; i < myFriends.length; i++) {
//      console.log( myFriends[i]);

// }



//After Es6 we use for...in and for...of loop to print all varible in js

// for (const elements in myFriends) {
//     console.log(elements);
// }

// for...in loop print the number that how many elemtns are there in the loop

// for (const elements of myFriends) {
//     console.log(elements);
// }
// for...of loop print the elemtns of the Array


//Array.prototype.forEach() loop
//call a function for each element inthe array


// myFriends.forEach((element , index , arrays) => {
//         console.log(`${element} : ${index} : ${arrays}`);
// });




//Array : Searching and Filter is an array

// const prices = [200,250,300,400,450,600,700,800,900, 200,];

//indexof method

// console.log(prices.indexOf(500));

// console.log(prices.indexOf(1500)); // this element is not in a array so it returen -1.


//lastIndexOf method

// console.log(prices.lastIndexOf(200));


// //includs method
// console.log(prices.includes(500));

// //find method

// console.log(prices.find((Element)=>{
//     return Element>400;
// }));

//filter method

//it return array of given choice

// console.log(prices.filter((Element )=>{
//     return Element>400;
// }))

// prices.sort();

// console.log(prices);


//Array.prototype.push();
//The push() method returen the new length of given array

// ex:-

// const animal = ['dog' , 'cat' , 'cat' , 'elephant'];

// const oldCount = animal.length;
// console.log(oldCount);
// console.log(animal);
// const count = animal.push('cow')
// console.log(count);
// console.log(animal);

// // We can push multiple element in an array at a time saprated by coam(,).



// // unshift() method add data at the start of array
// //It also reture length of an array
// animal.unshift('horse');
// console.log(animal);

// //pop method it simple remove the last element of an array
// animal.pop();
// console.log(animal);

// //similar we have shif method it remove the first element of an array
// animal.shift();
// console.log(animal);





// /** Map method in Js */

// let arr1 = [12,54,87,96,55,25,89];


// console.log(arr1);
// let newarr  = arr1.map((element , index , arr) =>{
//             return element >50;
// })

// console.log(newarr);

// it return new arr without mutating original value


//Ex:- Find the square root of all element in arr

// let arr = [4,9,16,25,36,81];


/**Without using sqrroot function */
// let arrSqr = arr.map((element)=>{
//     return element**(1/2);
// })

/**With using Function */
// let arrSqr = arr.map((element)=>Math.sqrt(element));
// console.log(arrSqr);


/**Multipliing all elemnt with 2 and then returen only those element which are greter  than 10 */

// let num = [2,4,5,3,6,7,1,2];

// let newnum = num.map((ele)=>{
//      return ele *= 2;
// }).filter((Element)=>{
//     return Element<10;
// }).sort();

// console.log(newnum);





// Reduce Method

// flatten an array means to convert the 3d or 2d array into a
// single dimensional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);



// How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => {
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));












/****  Strings in JavaScript  ****/
// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor

// let myName = "shlok jadeja";
// let myChannelName = 'shlok jadeja';

// // let ytName = new String("jadeja Technical");
// let ytName = 'jadeja technical';

// console.log(myName);
// console.log((ytName));



// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string.

// let myName = "shlok jadeja";
// console.log(myName.length);



// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);









// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the jadeja Technical';
// console.log(myBioData.indexOf("t", 6));


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...






// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the
// // last occurrence of searchValue, or -1 if not found.


// const myBioData =  'I am the jadeja Technical';
// console.log(myBioData.lastIndexOf("t", 6));













// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified
// value and returns the position of the match

// const myBioData =  'I am the jadeja Technical';
// let sData = myBioData.search("technical");
// console.log(sData);



// The search() method cannot take a second start position argument.




// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part
// in a new string.

// The method takes 2 parameters: the start position,
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// // let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);


// The slice() method selects the elements starting at the
// given start argument, and ends at, but does not include,
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.






// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);






// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);



// // If we give negative value then the characters are
//  counted from the 0th pos



// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);






// 👉 Replacing String Content()

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value
// with another value in a string.

// let myBioData = `I am shlok jadeja shlok`;

// let repalceData = myBioData.replace('shlok','Shlok');
// console.log(repalceData);
// console.log(myBioData);


// Points to remember
// 1: The replace() method does not change the string
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only
// the first match
// 3:By default, the replace() method is case sensitive.
// Writing Shlok (with upper-case) will not work







//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));










// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every
// character, no matter the platform, device, application,
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );



// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));




// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);













//👉  Other useful methods

// let myName = "shlok jadeja";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());







// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "Shlok"
// let lName = "jadeja"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));






// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());







// Converting a String to an Array
// A string can be converted to an array with the
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe






/** Data and Time in JavaScript */



// let data = new Date();

// console.log(data);
// /** This can't return indian time */
// // for that we use another method

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());
// console.log(new Date(1657876813252).toLocaleString());
// console.log(new Date().getDate());
// console.log(new Date().getTime());
// console.log(new Date().getHours());


// // Practice Time
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM







/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
// console.log(Math.PI);

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);


// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));



// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));



// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));



// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));



// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));



// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9



// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number
// rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));



// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));







// print 1 to 50 randomly


// console.log(Math.abs(Math.floor((Math.random()*100)-50)));
