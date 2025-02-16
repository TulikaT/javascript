let score = 987;
let str ="string"

console.log(typeof score);
console.log(typeof(score));

let valueInString = String(score);
let valueInNumber = Number(str)
console.log(typeof valueInString);
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN

let isLoggedIn = 1;
let isLoggedInAg = "";
let isLoggedInAg1 = "hello"
let isLoggedInAg2 = 5
// let booleanInLoggedIn = Boolean(isLoggedIn); // true
// let booleanInLoggedIn = Boolean(isLoggedInAg); // false
// let booleanInLoggedIn = Boolean(isLoggedInAg1); // true
let booleanInLoggedIn = Boolean(isLoggedInAg2);
console.log(booleanInLoggedIn);
console.log(isLoggedInAg);



// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "hello" => true



