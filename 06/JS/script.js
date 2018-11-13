"use strict";

const messageWrapper = document.getElementById("message");

let name = prompt("What is your name?");
let age =  prompt("What is your age?");
let music =  prompt("What's your favorite band?")

let message = ("Hello, " + name + "!");
message += "You are " + age + " years old.<br>";
if (age > 30){
    message += " That's old! "
} else if (age < 13){
    message += "Should you even be on the internet?<br>"
}


message += "Your favorite band is " + music + ". Sweet!";

messageWrapper.innerHTML = message;