'use strict';

const reviewCard = document.querySelector('.card');
const thanksCard = document.querySelector('.card-thanks');
const btnSubmitReview = document.querySelector('.review-button-start');
const btnSubmitClick = document.querySelector('.review-submit');
const score = document.querySelectorAll('.score');
const thanksScore = document.querySelector('.thanks-score-final');

let scoreSelection = false;
let lastSelection;


window.onload = function () {
  for (let i = 0; i <= score.length; i++) {
    score[i].addEventListener('click', function () {
      if (scoreSelection === false) {
        score[i].classList.add('selected-button');
        scoreSelection = true;
        lastSelection = i;
        btnSubmitReview.classList.remove('review-button');
        btnSubmitReview.classList.add('usable');
      } else {
        score[i].classList.add('selected-button');
        if (i !== lastSelection)
          score[lastSelection].classList.remove('selected-button');
        lastSelection = i;
      }
    })
  }
}

btnSubmitClick.addEventListener('click', function () {
  if (scoreSelection === true) {
    reviewCard.classList.add('fade-out');
    thanksCard.classList.add('fade-in');
    thanksCard.classList.remove('hidden');
    thanksScore.textContent = `You selected ${lastSelection + 1} out of 5`;
  }
})