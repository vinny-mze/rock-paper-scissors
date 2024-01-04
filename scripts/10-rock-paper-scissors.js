let score = JSON.parse(localStorage.getItem('score'))
||{
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();
  
  /*
if (!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}*/

function playGame(playerMove){

  pickComputerMove() 
  let result = '';
  if (playerMove ==='rock'){
    if (computerMove==='rock'){
      result = 'Tie.';
    } else if (computerMove==='paper'){
      result = 'You Lose.';
    }  else if(computerMove==='scissors'){
      result = 'You win.';
    }

  } else if(playerMove === 'paper'){
      if (computerMove==='rock'){
        result = 'You win.';
      } else if (computerMove==='paper'){
        result = 'Tie.';
      }  else if(computerMove==='scissors'){
        result = 'You Lose.';
      }

  } else if (playerMove === 'scissors'){
      if (computerMove==='rock'){
        result = 'You Lose.';
      } else if (computerMove==='paper'){
        result = 'You win.';
      }  else if(computerMove==='scissors'){
       result = 'Tie.';
      }
        
    }

    if (result === 'You win.'){
      score.wins += 1;
    } else if (result === 'You Lose.'){
      score.losses += 1;
    } else if (result === 'Tie.'){
      score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-move').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon"> 
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
  }
  
  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

let computerMove = '';
function pickComputerMove() {
  const randomNumber1 = Math.random();
  if (randomNumber1 >= 0 && randomNumber1 < 1/3){
    computerMove = 'rock';
  } else if (randomNumber1 >= 1/3 && randomNumber1 < 2/3){
    computerMove = 'paper';
  } else if (randomNumber1 >= 1/3 && randomNumber1 < 1){
    computerMove = 'scissors';
  }
}