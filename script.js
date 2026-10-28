// console.log("Hello from script.js!");

let clubName = "Sunday Book Club";
console.log("Welcome to " + clubName);

let meetingDay = "Sundays";
console.log("We meet on " + meetingDay);

// Declare or define a function
function sayHi() {
    console.log("Hi! Thanks for visiting!");
}

// Call the function
sayHi();

function sayBye() {
    console.log("Goodbye!");
}

sayBye();
sayBye();

// Day 2 - Getting HTML elements
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

// Declare a show message function
function showNextMeeting() {
    nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}

nextButton.addEventListener("click", showNextMeeting);