const Game = () => {

    let PScore = 0;
    let CScore = 0;


    const ScreenSwitch = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");


        playBtn.addEventListener("click", function () {
            
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
            
        })
        
    }

    const PlayMatch = () => {
    
        const optionsBtns = document.querySelectorAll(".options button") ; 
        const playerHand = document.querySelector(".playerHand"); 
        const comHand = document.querySelector(".comHand");
        const hands = document.querySelectorAll(".hands img")


       
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                
                hand.style.animation= '';
            })
        })
      
        
        const list = ['rock', 'paper', 'scissors'];
        
        optionsBtns.forEach(option => {
            option.addEventListener("click", function () {
                
                N = Math.floor(Math.random() * 3);
                select = list[N];
                

                console.log(`player :  | ${this.textContent} , computer :  | ${select}`);
                setTimeout(() => {
                    wins(this.textContent, select); 
                playerHand.src = `assets/img/${this.textContent}.png`;
                comHand.src = `assets/img/${select}.png`;
                }, 1500);

                playerHand.style.animation = 'playerAnim 1.8s ease';
                comHand.style.animation = 'computerAnim 1.8s ease';

                playerHand.src = `./assets/img/rock.png`;
                comHand.src = `./assets/img/rock.png`;
                
            })
        })
    }

    const Result = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
       
        playerScore.textContent = PScore ;
        computerScore.textContent =  CScore ;
        
    }

    const wins = (user  , com ) => {
        const winner = document.querySelector('.winner')

        if (user === com) {
            winner.textContent = 'result tie';
            winner.classList.add('style');
            return; 
        }

        // rock

        if (user === 'rock') {
            if (com === 'paper') {
                winner.textContent = 'COMPUTER is WINNER ';
                winner.classList.add('style');

                CScore++;
                Result();
                return

            } else {
                winner.textContent = 'PLAYER is WINNER';
                winner.classList.add('style');

                PScore++;
                Result();
                return
            }
        }
//paper
        if (user === 'paper') {
            if (com === 'scissors') {
                winner.textContent = 'COMPUTER is WINNER ';
                winner.classList.add('style');

                CScore++;
                Result();
                return
            } else {
                winner.textContent = 'PLAYER is WINNER';
                winner.classList.add('style');

                PScore++;
                Result();
                return
            }
        }

//sciss
        if (user === 'scissors') {
            if (com === 'rock') {
                winner.textContent = 'COMPUTER is WINNER ';
                winner.classList.add('style');

                CScore++;
                Result();
                return
            } else {
                winner.textContent = 'PLAYER is WINNER';
                winner.classList.add('style');

                PScore++;
                Result();
                return
            }
        }
    }


    ScreenSwitch();
    PlayMatch();
  
}

Game();