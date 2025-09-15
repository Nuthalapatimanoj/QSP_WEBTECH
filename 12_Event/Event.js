//!  DATE : 12 - 09 - 2025

//! onClick()

console.log("Event in js");

let display = () => {
  console.log("Iam display function");
};

let changeColor = () => {
  let header = document.querySelector("header");
  header.style.backgroundColor = "wheat";
};

//! dblclick() event

let printMsg = () => {
  alert("Good afternon");
};

let copy = () => {
  let card1 = document.querySelector(".card1"); // Targets the card1

  let data = card1.innerHTML; // Gets data from card1

  let card2 = document.querySelector(".card2"); // Targets the card2

  card2.innerHTML = data; // Copying the data to card2

  card1.innerHTML = ""; // removes the data from the card1
};

//! onmouseover() event

let changeBg = () => {
  let box = document.querySelector(".box");

  box.style.backgroundColor = "red";
};

let changeBg2 = () => {
  let box = document.querySelector(".box");

  box.style.backgroundColor = "green";
};