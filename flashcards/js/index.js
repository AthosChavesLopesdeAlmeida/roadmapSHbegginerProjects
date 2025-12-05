import { createCardObject, showNextCard, showPrevCard } from "./structure";
import { createFlashCardInterface, showAnswer } from "./ui";

const openModalBtn = document.getElementById('criar');
const createCardBtn = document.getElementById('confirm');
const questionInput = document.getElementById('pergunta');
const answerInput = document.getElementById('resposta');
const modal = document.getElementById('modal');
const cardsArray = [];

// Event Listener para abrir o modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Event Listener para criar o card
createCardBtn.addEventListener('click', () => {
  const question = questionInput.value;
  const answer = answerInput.value;

  createCardObject(question, answer, cardsArray);

  console.log(cardsArray);
  modal.style.display = 'none';
});