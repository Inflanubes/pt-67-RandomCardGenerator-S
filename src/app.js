/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(cardCreator) {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["diamond", "spade", "heart", "club"];
  
};

let randomNumber = number [Math.floor(Math.random() * number.length)];
number.innerHTML = cardNumber;

let randomSuit = suit [Math.floor(Math.random() * suit.length)];
suit.innerHTML = cardSuit;

