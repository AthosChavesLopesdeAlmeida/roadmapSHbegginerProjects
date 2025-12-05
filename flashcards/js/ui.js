// Função que cria a interface do card
export function createFlashCardInterface(flashCard, container) {
  
  const flashCardUI = document.createElement('div');
  flashCardUI.innerText = `<p>${flashCard.question}</p>
  <button id="show">Show answer</button>`;
  container.appendChild(flashCardUI);

  flashCardUI.classList.add('flashcards');
}

// Função que mostra a resposta do card
export function showAnswer(flashCardUI, flashCard) {
  flashCardUI.innerText = `<p>${flashCard.response}</p>`
}