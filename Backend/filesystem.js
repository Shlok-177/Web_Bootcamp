let fs = require('fs');

// Sync

// read file
let t1 = performance.now();
// let data = fs.readFileSync("data.txt" , "utf-8");
// console.log(data);
// console.log(20);

// // write file
// let data2 = {
//     msg: "File is created successfully and datta is saved"
// }


// fs.writeFileSync("data2.txt" , JSON.stringify(data2));
// fs.appendFileSync("data2.txt" , "\n \t Hey");

// fs.renameSync("data.txt" , "data3.txt");


// Asynchronous

let t2 = performance.now();
fs.readFile("data.txt" , "utf-8" , (err , data)=>{
    console.log(data);
});
console.log(20);
console.log(t2-t1);












