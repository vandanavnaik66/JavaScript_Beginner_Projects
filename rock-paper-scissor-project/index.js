let button = document.querySelectorAll(".btn");
let instaResult = document.getElementById("instResult");
let finalResult=document.getElementById("finalResult")
let winText = document.getElementById("text1");
let lossText = document.getElementById("text2");
let tieText = document.getElementById("text3");



const score = {
  win: 0,
  loss: 0,
  tie: 0,
};
displayResult()
function displayResult(){
  winText.innerHTML = `Win:${score.win}`;
  lossText.innerHTML = `Loss:${score.loss}`;
  tieText.innerHTML = `Tie:${score.tie}`
  instaResult.innerHTML = "";
  finalResult.innerHTML="";

}
;

function Reset(){
score.win=0;
score.loss=0;
score.tie=0;
displayResult()

}

function computerMove() {
  let random = Math.random();
  let compMove = ""; //it is function scoped hence this value is returned

  if (random >= 0 && random < 1 / 3) {
    compMove = "rock";
    console.log(`computer move ${compMove}`);
  } else if (random >= 1 / 3 && random < 2 / 3) {
    compMove = "paper";
    console.log(`computer move ${compMove}`);
  } else if (random >= 2 / 3 && random < 1) {
    compMove = "scissor";
    console.log(`computer move ${compMove}`);
  }
  return compMove;
}

function playGame(playerMove) {
  let compMove = computerMove(); //comMove variable will have the returned value of computerMove() function
  let result = "";
  if (playerMove == "rock") {
    if (compMove == "rock") {
      result = "tie";
    }
    if (compMove == "paper") {
      result = "you lost";
    }
    if (compMove == "scissor") {
      result = "you win";
    }
  } else if (playerMove == "paper") {
    if (compMove == "rock") {
      result = "you win";
    }
    if (compMove == "paper") {
      result = "tie";
    }
    if (compMove == "scissor") {
      result = "you lost";
    }
  } else if (playerMove == "scissor") {
    if (compMove == "rock") {
      result = "you lost";
    }
    if (compMove == "paper") {
      result = "you win";
    }
    if (compMove == "scissor") {
      result = "tie";
    }
  }
  if (result == "you win") {
    score.win+=1;
  }
  else  if (result == "you lost") {
    score.loss+=1;
  }
  else  if (result == "tie") {
    score.tie+=1;
  }
  displayResult()
  instaResult.innerHTML = `${result}, computer move is ${compMove}`;
}

button.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    playGame(e.target.id); 
  });
});

function showResult() {
  instaResult.innerHTML = "";
  if (score.win > score.loss ) {
    finalResult.innerHTML = "you have won the game";
  } 
  else if ( score.win< score.loss) {
    finalResult.innerHTML = "you have lost the game";
  }
   else if (score.win== score.loss==score.tie) {
    finalResult.innerHTML = "game tie";
  }
}


