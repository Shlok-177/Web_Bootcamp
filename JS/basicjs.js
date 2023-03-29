// var myName = "Shlok"; // String
// var myAge = 20; // Number
// var f = 25.5; // Float
// var bool  = true; // Boolean
// var n = null;
// var abc;

// // console.log(typeof myName);
// // console.log( typeof myAge);
// // console.log(typeof f);
// // console.log(typeof bool);
// // console.log(typeof(n));
// console.log(typeof abc);

// abc = 123;
// console.log(typeof abc);


//Arithmetic Opration

// console.log(10 + 25);
// console.log(10 - 25);
// console.log(10 * 25);
// console.log(10 / 25);
// console.log(10 % 25);

// console.log(10 ** 2);
var num = 10;

// console.log(num++);
// console.log(num--);
// console.log(num);


// console.log( 10 + "20");
// console.log(10 - "20");  // bug
// console.log("10" - "10"); // bug
// console.log("10" * "2"); //bug

// console.log(true + true);
// console.log(true - true);
// console.log(false-true);
// console.log(false-false);


// Comparison Operatore ...!

// var a = 10;
// var b = "10";

// // console.log(a == b);  // Equal to
// console.log(a != b); // Not Equal to
// // console.log( a === b); // Equal value as well as DataType
// console.log(a !== b);

// console.log( 10 >5);
// console.log( 10 >= 5);
// console.log( 10 < 50);
// console.log( 10 <= 50);


// Logical Operator...
var a = 10;
var b = 20;
var c = 30;

// //And
// console.log( a>b && b<c);

// //Or
// console.log( a>b || b<c);

// //Not
// console.log(!true);

// /** Control Statement */
// /**
//  1. If...else
//
//
//  */

// if(a > b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }


// if(a>b){
//     console.log(a);
// }
// else if(b<c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }
// var age = 20;

// (age > 18) ? console.log("You can Drive") : console.log("You can't Drive");

// (condition) ? true : false;

// var year = 2021;
// debugger;

// if ((year % 4 == 0)) {
//     if (year % 100 == 0) {
//         if (year%400 == 0) {
//             console.log("The year " + year + " is leap year");
//         }
//         else{
//             console.log("The year " + year + " is not a leap year");
//         }

//     } else {

//         console.log("The year " + year + " is leap year");
//     }


// }
// else {

//     console.log("The year " + year + " is not a leap year");
// }



// loop in JavaScript

// for(var i = 0; i<10;i++){
//     // debugger;
//     console.log(i);
// }

// for in
// for out
// var i = 3;

// while (i--) {
//     console.log(i);
// }


/* Function in CSS */

// var a = 10;
// var b = 20;

// console.log(a+b);



// function sum(a ,b) {
//     return a+b;
// }

// console.log(sum(5,6));
// console.log(sum(8,6));
// console.log(sum(5,20));
// console.log(sum(56,6));


/*Anonymous Function*/

// var funcx = function(a ,b){
//     return a + b ;
// }

// var sum = funcx(15,25);

// console.log(sum);

//JavaScript and ECMA Script

// 1996 ---> 1997 ----> 2015 (ES6)

// 1) let and Const
// 2) Template Litreals
// 3) Defalut Argument
// 4) Destructing
// 5) Object Properties
// 6) Arrow Function
// 7) Spred Oper..
// 8) Rest Oper..

// LET

// var myName = 'Abc';
// console.log(myName);

// var myName = 'xyz';
// console.log(myName);

// {
//     let myAge = 10;
//     console.log(myAge);
// }
// console.log(myAge);


// myAge = 20;
// console.log(myAge);

// for(let i=0; i<5 ; i++){
//     let abc = 'abc';
//     console.log(abc);
// }
// console.log(abc);


// CONST

// const a = 10;
// console.log(a);


// 2) Template Litreals

// let tableof = 15;

// for (let i = 1; i <= 10; i++) {
//     // console.log(tableof + " X " + i + " = " + tableof*i);
//     console.log(`${tableof} X ${i} = ${tableof*i}`);
// }


// 3) Defalut Parameter

// const sum = (a = 5 , b = 2) => {
//     console.log(a+b);
// }


// 4) Arrow Function
// sum(8);

const sum = () =>{

}



//Array in JS

let arr = [4,5,6,8,2,6,47,3];
let arr2 = [4,'shlok jadeja' , 45.5 ,null , true];

// console.log(arr.length);

// console.log(arr2.length);
// console.log(arr2);


//Array Method

// 1) toString
// console.log(typeof arr);

// console.log( arr.toString());
// console.log( typeof arr);

// 2) join() method

// console.log( arr.join('*'));

// 3) Pop method

// console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// 4) Push Method

// console.log(arr);
// arr.push(8);
// arr.push(5);

// console.log(arr);


// 5) shift method

// console.log(arr);
// arr.shift();
// console.log(arr);

// 6) unshift method

// console.log(arr);
// arr.unshift('abc');
// console.log(arr);

// 7) delete method in Array


// console.log(arr.length);
// delete(arr[3]);
// console.log(arr.length);

// 8) Concate method in Js

let a1 =[1,2,3]
let a2 = [4,5,6]
let a3 = [7 , 8  ,9]

// let a4 = a1.concat(a2 , a3);

// console.log(a4);

//Spread Ope..

let a4 = [...a1 , ...a2 , ...a3];

// console.log(a4);


// 9) Sort method

// let arr3  = [5,85,2,6,45,36,96 ,1 ,11 ,7];

// const compare = (a,b) =>{
//     return a-b;
// }

// console.log(arr3);
// arr3.sort(compare);
// console.log(arr3);


//10) Reverse Method in JS
// console.log(arr3.reverse());



// 11) slice method in JS
const num6 = [1,2,3,4,5];
//            0 1 2 3 4

let abc = num6.slice(1 ,4);
// console.log(abc);


// For Each Loop

// for(let i =0;i<num6.length;i++){
//     console.log(num6[i]);
// }

// num6.forEach(function(ele){
//     console.log(ele);
// })

// num6.forEach((ele) => console.log(ele));


// // Map method

// let num8 = [10,20,5,60,82,70,90];

//  let num7 = num8.map(function(ele){
//         return ele*2 + 10;
//  })

// console.log(num7);


// // Filter Method

// let num9 = num8.filter((ele)=>{
//     if (ele % 10 == 0) {
//         return ele;
//     }
// })

// console.log(num9);

// reduce method in JS

// let num10 = [1,2,3,4,5];

// let s = num10.reduce((ele1 , ele2) =>{
//     return ele1*ele2;
// });

// console.log(s);


//Rest Operator

// let sum1 = (...num) =>{
//     let ans = 0;
//     for (let i = 0; i < num.length; i++) {
//         ans  += num[i];
//     }
//     return ans;
// }

// console.log(sum1(2 , 3 , 5));
// console.log(sum1(4));
// console.log(sum1(2 , 3 , 5 , 8));


// object in JavaScript

let data = {
    // key : Value

    fname : "Shlok",
    Age: 18,
    lname : "Jadeja",
    innerObj: {
        fname : "Manav",
        lname : "Shah",
        fullname : function (){
            console.log(this.fname + " " + this.lname);
        }
    },
    isfailed: false,
    fullname: function(){
        console.log(this.fname + " " + this.lname);
    }
}

console.log(data.fname);



