
let resultDisplay=document.querySelector('.result')
let moveDisplay=document.querySelector('.moves')

function resetScore(){
      score.win=0,
      score.loss=0,
      score.ties=0
      localStorage.removeItem('score')
updateScoreElement();
resultDisplay.innerHTML=''
moveDisplay.innerHTML=''

}

const score=JSON.parse(localStorage.getItem('score'))|| {
      win:0,
     loss:0,
     ties:0
}

function updateScoreElement(){
      document.querySelector('.js-score').innerHTML=`Wins:${score.win}   , Loss:${score.loss}   , Ties:${score.ties}`;  
}


updateScoreElement()
function playGame(playerMove) {
      let result;

        const compMove = pickComputerMove(); //if you only call the function it says compMove not defind because compMove is function scope in that function so that is returned and again compMove variable is declared with that function calling..otherwise it will show not defined error and compMove stores the returned value of pickComputerMove function

        if (playerMove == "Rock") {
            if (compMove == "Rock") {
            result = "tie";
            } else if (compMove == "Paper") {
            result = "loss";
            } else if (compMove == "Scissors") {
            result = "win";
            }
        } else if (playerMove == "Paper") {
            if (compMove == "Rock") {
            result = "win";
            } else if (compMove == "Paper") {
            result = "tie";
            } else if (compMove == "Scissors") {
            result = "loss";
            }
        } else if (playerMove == "Scissors") {
            if (compMove == "Rock") {
            result = "loss";
            } else if (compMove == "Paper") {
            result = "win";
            } else if (compMove == "Scissors") {
            result = "tie";
            }
        }
        if(result=='win'){
            score.win +=1;
        }else if(result =='loss'){
            score.loss +=1;
        }else if(result =='tie'){
            score.ties +=1;
        }

        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement()

        resultDisplay.innerHTML=`Result - ${result}`;
        moveDisplay.innerHTML=`You <img class='move-icon' src="images/${playerMove}.png"> Computer <img class='move-icon' src="images/${compMove}.png"> `
        
        }


        function pickComputerMove() { 
        let compMove; //function scope
        let randomNO = Math.random();
        if (0 <= randomNO && randomNO < 1 / 3) {
            compMove = "Rock";
        } else if (1 / 3 <= randomNO && randomNO < 2 / 3) {
            compMove = "Paper";
        } else if (2 / 3 <= randomNO && randomNO < 1) {
            compMove = "Scissors";
        }
        return compMove;
        }

        document.querySelectorAll(".js-btn").forEach((buttons) => {
        console.log(buttons);
        buttons.addEventListener("click", (button) => {
            playGame(button.target.id);
        });
        });
