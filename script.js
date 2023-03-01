let username;
while (true) {
    username = prompt ("What is your name?");


    if (username === "") {
        alert("Name must be inputed!");
    }else {
    alert ("Hello " + username + "!");
        break;
    }
}

let x = 0;





function clickme(){
"use strict";
let origin = prompt("I was born in Memphis.");
let originlow = origin.toLowerCase();
if (originlow === "y" || originlow === "yes" ){
    alert("Correct!");
    x++;

}else {
    alert("Incorrect.. :(");
}
let age = prompt("I'm 20 years old.");
let agelow = age.toLowerCase();
if (agelow === "n" || agelow === "no" ){
    alert("Correct!");
    x++;
    
}else {
    alert("Incorrect.. :(");

}
let experience = prompt("I went to Germantown High.");
let experiencelow = experience.toLowerCase();
if (experiencelow === "y" || experiencelow === "yes" ){
    alert("Correct!");
    x++;
    
}else {
    alert("Incorrect.. :(");
}
let goal = prompt("I am class of 2021.");
let goallow = goal.toLowerCase();
if (goallow === "n" || goallow === "no"){
    alert("Correct!");
    x++;
  
}else {
    alert("Incorrect.. :(");
}
let job = prompt("I used to work at a body shop.");
let joblow = job.toLowerCase();
if (joblow === "y" || joblow === "yes" ){
    alert("Correct!");
    x++;
   
}else {
    alert("Incorrect.. :(");

}

alert("Congrats" + " " + username + " " + "you made a" + " "+ x + " " + "out of 5!");}


let randomnumber=Math.floor(Math.random() * 101);
let Tries = 7;
let i;

for (i = 0; i < Tries; i++){
    let guess=prompt("Welcome to my Guessing Game! I want you to guess a random number in 7 tries, if you get it right, you win! (1-100");
   
    if (guess == randomnumber){
        alert ("You got it, nice job!");
        break;
    }else if (guess < randomnumber) {
        alert("Your guess was lower than the number...");
    }else if (guess > randomnumber){
        alert("Your guess was higher than the number...");
    }
}

if (i == Tries){
    alert("You lost :(. The random number was " + randomnumber + ".");
}