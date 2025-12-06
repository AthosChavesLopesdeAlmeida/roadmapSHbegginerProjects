// Função que cria a interface do card
export function createFlashCardInterface(flashCard, container) {
  container.innerHTML = 
  `<p class = 'questionText'>${flashCard.question}</p>
  <br>
  <button class = 'showAnswer'>Show answer</button>`;

  const showAnswerBtn = document.querySelector('.showAnswer');
  const questionText = document.querySelector('.questionText');

  showAnswerBtn.addEventListener('click', () => {
    questionText.innerHTML = flashCard.answer
  });
}

// Função que mostra a resposta do card
export function showAnswer(container, flashCard) {
  container.innerHTML = `<p>${flashCard.answer}</p>`
}