//! template literal ====  ``

const fName = "Javokhirbek";
const job = "Developer";
const birthDay = 2003;
const year = 2022;

const me = " I'm " + fName + " , a" + job;
console.log(me);

const newMe = `I'm ${fName} , ${job}, i'm ${year - birthDay} age`;
console.log(newMe);

//! if else statiments

const myAge = 19;
const yearsLesft = 18 - myAge;
if (myAge >= 18) {
  console.log("haydolaman");
} else {
  console.log("uxlaaa");
}

myAge >= 18 ? console.log("im ready") : console.log("okay");

// !array

movements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

euroToUsed = 1.1;

const movementToUsd = movements.map((mow) => mow * euroToUsed);

console.log(movementToUsd);

movements.map((mov, index) => {
  if (mov > 0) {
    console.log("udAE  ");
  }
});
