let score = "33a"

console.log(typeof score)
console.log(typeof(score))

let scoreInNumber = Number(score)

console.log(scoreInNumber);
console.log(typeof scoreInNumber);

/* 33 => 33
"33abc" => NaN
true => 1, false => 0
*/

let isBoolean1 = 1
let isBoolean1InBoolean = Boolean(isBoolean1)


console.log(isBoolean1);
console.log(typeof isBoolean1);
console.log(isBoolean1InBoolean);
console.log(typeof isBoolean1InBoolean);
/*
1
number
true
boolean
*/

let isBoolean2 = ""
let isBoolean2InBoolean = Boolean(isBoolean2)


console.log(isBoolean2);
console.log(typeof isBoolean2);
console.log(isBoolean2InBoolean);
console.log(typeof isBoolean2InBoolean);
/*

string
false
boolean
*/

let isBoolean3 = "Ashish"
let isBoolean3InBoolean = Boolean(isBoolean3)

console.log(isBoolean3);
console.log(typeof isBoolean3);
console.log(isBoolean3InBoolean);
console.log(typeof isBoolean3InBoolean);
/*
Ashish
string
true
boolean
*/

let string1 = "Ashish"
let string1InString = String(string1)

console.log("string1 => "+ string1);
console.log("typeof string1 => "+ typeof string1);
console.log("string1InString => "+ string1InString);
console.log("typeof string1InString => "+ typeof string1InString);
/*
string1 => Ashish
typeof string1 => string
string1InString => Ashish
typeof string1InString => string
*/