document.addEventListener("DOMContentLoaded", startGame);

function startGame () {
    console.log("Game started");
    playerChoice();
}

function playerChoice () {
    document.querySelector(".rock").addEventListener("click", showAnimation);
    document.querySelector(".paper").addEventListener("click", showAnimation);
    document.querySelector(".scissors").addEventListener("click", showAnimation);
}

function rememberPlayerChoice () {

}

function randomComputerChoice () {

}

function showAnimation () {
    console.log("Shake it");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    determineWinner();
}

function determineWinner () {
    showResult();
}

function showResult () {
    document.querySelector("#win").classList.remove("hidden");
    console.log("Winner");
}

function showWin () {

}

function showLose () {

}

function tie () {

}
