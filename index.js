var num = Math.floor(Math.random()*6)+1;
var randomdiceimage = "dice" + num + ".png";
var diceimage = "images/" + randomdiceimage;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src" , diceimage);

var num2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage2 = "dice" + num2 + ".png";
var diceimage2 = "images/" + randomdiceimage2;
var image = document.querySelectorAll("img")[1];
image.setAttribute("src" , diceimage2);

if(num > num2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins...!"
}

else if(num2 > num){
    document.querySelector("h1").innerHTML = "Player 2 Wins...! 🚩"
}

else{
    document.querySelector("h1").innerHTML = "Draw 😜"
}