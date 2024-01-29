let yourScore = document.getElementById("player1");
let compScore = document.getElementById("player2");

let yourHand = document.getElementById("you");
let compHand = document.getElementById("comp");

let RockBtn = document.getElementById("rocklogo");
let PaperBtn = document.getElementById("paperlogo");
let ScissorBtn = document.getElementById("scissorlogo");

let playAgainDiv = document.getElementById("playGameAgain");
let PlayAgainBtn = document.getElementById("playAgainBtn");
let gameWon = document.getElementById("wonTheGame");

let rock = "assets/rock-hand.png";
let paper = "assets/paper-hand.png";
let scissor = "assets/scissors-hand.png";

let scoreOfYou = 0;
let scoreOfComp = 0;

let random = [rock, paper, scissor];
let player;
let computer;

function compPlays() {
  let randomhand = random[Math.floor(Math.random() * random.length)];
  console.log(randomhand);
  compHand.src = randomhand;
  compHand.style.width = "80%";
  computer = randomhand;
}

RockBtn.onclick = () => {
  yourHand.src = rock;
  yourHand.style.width = "80%";
  player = rock;
  compPlays();
  compare();
};
PaperBtn.onclick = () => {
  yourHand.src = paper;
  yourHand.style.width = "80%";
  player = paper;
  compPlays();
  compare();
};
ScissorBtn.onclick = () => {
  yourHand.src = scissor;
  yourHand.style.width = "80%";
  player = scissor;
  compPlays();
  compare();
};

function compare() {
  if (
    (player == rock && computer == scissor) ||
    (player == paper && computer == rock) ||
    (player == scissor && computer == paper)
  ) {
    scoreOfYou++;
  } else if (
    (player == rock && computer == paper) ||
    (player == paper && computer == scissor) ||
    (player == scissor && computer == rock)
  ) {
    scoreOfComp++;
  }

  yourScore.innerHTML = scoreOfYou;
  compScore.innerHTML = scoreOfComp;
  if (scoreOfYou == 5) {
    playAgainDiv.style.display = "block";
    location.href = "#playGameAgain";
    gameWon.innerHTML = "You won the Game!🥳";
  } else if (scoreOfComp == 5) {
    playAgainDiv.style.display = "block";
    location.href = "#playGameAgain";

    gameWon.innerHTML = "You lose the Game😓";
  }
}

PlayAgainBtn.onclick = () => {
  location.reload();
};