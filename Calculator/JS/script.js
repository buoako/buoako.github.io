"use strict";
 
const messageWrapper = document.getElementById('message');

const w = prompt ('Enter a number!');
const x = prompt ('Enter a number!');
const y = prompt ('Enter a number!');
const z = prompt ('Enter a number!');

// let message = '(' + x + ' + ' + y + ' - ' + z + ' x ' + w + ' = ' + ((Number(x)) + (Number(y)) -(Number(z)) = (Number(w));
// let message = (Number(x)+Number(y));
let batman = Number(w)+Number(x)-Number(y)*Number(z);

// console.log("batman= " + batman);

// console.log(batman);
console.log(w + "+" + x + "-" + y +"x"+ z +"="+ batman);

// alert(message);

messageWrapper.innerText = message;