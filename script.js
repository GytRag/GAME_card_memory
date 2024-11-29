
const gameBoard = document.querySelector('#gameBoard');
const playAgain = document.querySelector('.playAgain');


let cardsArray = ['🥶','💩','😹','🤖','👽','👻','🎅','🧟‍♀️','🧛‍♂️','🌈','🍭','🍡'];
    cardsArray = [...cardsArray, ...cardsArray];
let card1 = '';
let card2 = '';
let cardClass1 = '';
let cardClass2 = '';
let score = 0;


// CREAT START FUNCTION
const start = () => {
    cardsArray.sort(() => 0.5 - Math.random());
    cardsArray.forEach( (item) => {
        gameBoard.innerHTML += `<div><span>${item}</span></div>`;
    })

    // ---------GAME START-----------------------
    const cardDiv = document.querySelectorAll('div');

    // open cards
    cardDiv.forEach((card, data) => {
        card.onclick = () => {
            if (card1 !== '' && card2 !== '') return
            if(!card.classList.contains('open')) {
                card.classList.add('open');
                if (card1 === ''){
                    card1 = cardDiv[data].innerText
                    cardClass1 = card
                }else {
                    card2 = cardDiv[data].innerText
                    cardClass2 = card
                    compare()
                }
            }
        }
    })

    // COMPARE TWO OPEN CARDS
    function compare() {
        if (score < cardsArray.length/2 - 1) {
            if(card1 === card2) {
                card1 = '';
                card2 = '';
                score++
            }else {
                setTimeout(()=> {
                    cardClass1.classList.remove('open');
                    cardClass2.classList.remove('open');
                    card1 = '';
                    card2 = '';
                }, 400)
            }
        }else {
            score++
            playAgain.style.display = 'block';
        }
    }
}

start();

// PLAY AGAIN BUTTON CLICK
playAgain.onclick = () => {
    score = 0;
    playAgain.style.display = 'none';
    gameBoard.innerHTML = '';
    card1 = '';
    card2 = '';
    start()
}


