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

let greet: Function


greet = () =>{
    console.log("Hello ,worlds")
}


const add = (a: number, b: number, c?: number|string)=>{ 

    console.log(a+b)
    console.log(c)

}

add(5,6, "string")

let minus = (a: number, b: number) => {
    return a-b
}

let result = minus(10,9)


// type aliases


type StringOrNum = string|number;

type objWithName = { name: string, uid: StringOrNum}

const logDetails =(uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greeting = (user: { name: string, uid: StringOrNum}) => {
    console.log(`Hello ${user.name} , uid is ${user.uid}`)
}


const refact = (user: objWithName)=>{
    console.log(user.name)
}




let grr: (a:string, b : string) => void;

grr = (name: string, greeting: string) => {
    console.log(name, greeting)
}



let calc: (a:number, b:number, c:string)=> number

calc = (numOne: number, numTwo: number, action:string)=>{
    if(action ==="add"){
            return numOne + numTwo
    } else{
        return numOne -numTwo
    }
}


let logDet: (obj: {name:string, age:number})=> void;   

type person = {name:string, age:number}

logDet = (ninja: {name:string, age:number})=> {
    console.log(ninja.name, ninja.age)
}


logDet = (ninja: person)=> {
    console.log(ninja.name, ninja.age)
}


