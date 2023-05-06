// const char = "Mimi kwa mimi, sisi kwa sisi"

// console.log(char)

// const inputs = document.querySelectorAll('input')

// console.log(inputs)

// inputs.forEach((i)=> console.log(i))


let char = "super mario"

// let age = 30;

let isBlackBelt = false


char = "dave"

isBlackBelt = true


const circ = (dia: number) => {
    return dia * Math.PI
}


console.log(circ(7.9))


// arrays

let names = ["kim", "athi", "Njoki"]

names.push("felo");
// names.push(4)

let mixed = [ "ken", 67, 'chaun', 7, 9]

mixed.push('tyu')
mixed.push(78)
mixed[0] = 9


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

let charas: string;
let age: number;
let isLoggedIn: boolean;

age = 78;

charas = "minions";

// arrays

let ninjas: string[] = [];

ninjas.push("bradd")

// union types

let mixes: (string|number|boolean)[]= []


mixes.push("hello")
mixes.push(89)
mixes.push(true)


let uid: string|number;

uid = 89
uid ="34"


// objects

let ninjaOne:object;

ninjaOne ={ name: "yoshima", age: 89}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}


// dynamic types


let miaka: any = 25

miaka = true 
console.log(miaka)

miaka = "hello" 

console.log(miaka)