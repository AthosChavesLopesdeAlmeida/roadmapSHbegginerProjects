import { createCardObject } from "./structure.js";
import { createFlashCardInterface } from "./ui.js";

const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');

const createCardBtn = document.getElementById('confirm');
const questionInput = document.getElementById('pergunta');
const answerInput = document.getElementById('resposta');

const cardContainer = document.getElementById('cardContainer');
const next = document.getElementById('gt');
const prev = document.getElementById('lt');


const cardsArray = [];


// Event Listener que abre o modal
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    if (modal) {
      modal.style.display = 'flex';
    }
  });
}

// Event Listener que cria o objeto e coloca no array
if (createCardBtn) {
  createCardBtn.addEventListener('click', () => {

    if (questionInput && answerInput) {
      if (questionInput.value !== '' && answerInput.value !== '') {
        createCardObject(questionInput.value, answerInput.value, cardsArray);
        console.log(cardsArray);

        questionInput.value = ''
        answerInput.value = ''
        modal.style.display = 'none'
      }
    }
  });
}


if (createCardBtn) {
  createCardBtn.addEventListener('click', () => {
    createFlashCardInterface(cardsArray[0], cardContainer);
  })

}

