"use strict";

var userName = prompt("What is your name?");

while (userName === "") {
	userName = prompt("What is your name?")
}



alert("Welcome " + userName + "!")

var response = confirm('Do you like pizza?');
	if (response) {
		alert("Too bad, you can't have any of mine.")
	} else {
		alert("Yay. More for me.")
	}


// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
