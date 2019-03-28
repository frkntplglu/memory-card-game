const cards = document.querySelectorAll(".card-wrap__card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard , secondCard; 
cards.forEach(e => e.addEventListener("click",flipCard));

function flipCard(){
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  checkForMatch();
}

function checkForMatch(){
  var isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch  ? disableCards()  : unFlipCards();
}

function disableCards(){
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
  resetBoard();
}

function resetBoard(){
  hasFlippedCard = false;
  lockBoard = false;
  firstCard , secondCard = null;
}

function unFlipCards(){
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  },1500)
}

function shuffle(){
  cards.forEach(e => {
    let randomOrder = Math.ceil(Math.random() * 12);
    e.style.order = randomOrder;
  })
}

shuffle();

