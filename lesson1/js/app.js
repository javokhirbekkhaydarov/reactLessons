//! template literal ====  ``

const fName = "Javokhirbek";
const job = "Developer";
const birthDay = 2003;
const year = 2022;

const me = " I'm " + fName + " , a" + job
console.log(me);



const newMe = `I'm ${fName} , ${job}, i'm ${year - birthDay} age`
console.log(newMe);



//! if else statiments

const myAge = 19
const yearsLesft = 18 - myAge;
if(myAge >= 18) {
    console.log("haydolaman");
}
else {
    console.log("uxlaaa");
}

myAge  >= 18 ? console.log("im ready") : console.log("okay");;