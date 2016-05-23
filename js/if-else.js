"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'yellow'; 

if (color === 'red') {
	console.log("Roses are red.");

} else if (color === 'orange') {
	console.log("Orange Unicorn is orange.");

} else if (color === 'yellow') {
	console.log("Sunshine is yellow.")

} else if (color === 'green') {
	console.log("Moss is green.");

} else if (color === 'blue') {
	console.log("Water is blue.");
} else {
	console.log("I do not know anything about that color.");
}

(color === favorite) ? console.log(color + " is my favorite color!") : console.log(color + " is not my favorite color.")


