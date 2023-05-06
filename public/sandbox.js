"use strict";
// const char = "Mimi kwa mimi, sisi kwa sisi"
// console.log(char)
// const inputs = document.querySelectorAll('input')
// console.log(inputs)
// inputs.forEach((i)=> console.log(i))
let char = "super mario";
// let age = 30;
let isBlackBelt = false;
char = "dave";
isBlackBelt = true;
const circ = (dia) => {
    return dia * Math.PI;
};
console.log(circ(7.9));
// arrays
let names = ["kim", "athi", "Njoki"];
names.push("felo");
// names.push(4)
let mixed = ["ken", 67, 'chaun', 7, 9];
mixed.push('tyu');
mixed.push(78);
mixed[0] = 9;
//  objects 
// let ninja = {
//     name: "Ninja",
//     age: 30,
//     height: 1.7,
//     belt: "white"
// }
// ninja.age = 40
// ninja.belt = "black"
// explicit types 
let charas;
let age;
let isLoggedIn;
age = 78;
charas = "minions";
// arrays
let ninjas = [];
ninjas.push("bradd");
// union types
let mixes = [];
mixes.push("hello");
mixes.push(89);
mixes.push(true);
let uid;
uid = 89;
uid = "34";
// objects
let ninjaOne;
ninjaOne = { name: "yoshima", age: 89 };
let ninjaTwo;
// dynamic types
let miaka = 25;
miaka = true;
console.log(miaka);
miaka = "hello";
console.log(miaka);
let greet;
greet = () => {
    console.log("Hello ,worlds");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 6, "string");
let minus = (a, b) => {
    return a - b;
};
let result = minus(10, 9);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`Hello ${user.name} , uid is ${user.uid}`);
};
const refact = (user) => {
    console.log(user.name);
};
let grr;
grr = (name, greeting) => {
    console.log(name, greeting);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDet;
logDet = (ninja) => {
    console.log(ninja.name, ninja.age);
};
logDet = (ninja) => {
    console.log(ninja.name, ninja.age);
};
