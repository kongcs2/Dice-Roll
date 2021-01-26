let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomDice = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice);

 let randomNumber2 = Math.floor((Math.random() * 6) + 1);

 let randomDice2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

 if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "Player 1 Wins <._.<";
 } else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "Player 2 Wins >._.>";
 } else document.querySelector("h1").innerHTML = "It's a tie <._.>";