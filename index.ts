type Mixed = string | number | boolean | {} | []

interface Person {
    name: string,
    age: number,
    hometown?: string
}

let num: number
let junior: string
let arr: Mixed[]
let myObj: Person = {
    name: '',
    age: 3,
}

myObj.hometown = ""

arr = [2,'', true, [], {}]

function sum(a: number, b: number){
    return a + b
}

sum(2, 3)