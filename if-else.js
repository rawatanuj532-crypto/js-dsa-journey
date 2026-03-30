// write a program that takes an input of age and print if you are adult or not 

const prompt = require("prompt-sync")();

let age = Number(prompt("enter your age:"));

if (age < 18) {
    console.log("you are not eligible");
} 
else if (age <= 55) {
    console.log("you are eligible for job");
} 
else if (age <= 57) {
    console.log("eligible to do job, but retirement soon");
} 
else {
    console.log("you can't get a job");
}


