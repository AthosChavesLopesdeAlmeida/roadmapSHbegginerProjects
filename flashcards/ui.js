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

// Função que mostra o próximo card
export function showNextCard(arr, flashCard, container) {
  
  const now = arr.indexOf(flashCard);

  if ((now + 1) <= (arr.length - 1)) {
    const nx = now + 1
    flashCard = arr[nx]
     container.innerHTML = 
    `<p class = 'questionText'>${flashCard.question}</p>
    <br>
    <button class = 'showAnswer'>Show answer</button>`;

    const showAnswerBtn = document.querySelector('.showAnswer');
    const questionText = document.querySelector('.questionText');

    showAnswerBtn.addEventListener('click', () => {
      questionText.innerHTML = flashCard.answer
    });

    return true;
  } 
  
  else {
    return false;
  }
}

// Função que mostra o card
export function showPrevCard(arr, flashCard, container) {
  const now = arr.indexOf(flashCard);

  if ((now - 1) >= 0) {
    const pv = now - 1
    flashCard = arr[pv]
     container.innerHTML = 
    `<p class = 'questionText'>${flashCard.question}</p>
    <br>
    <button class = 'showAnswer'>Show answer</button>`;

    const showAnswerBtn = document.querySelector('.showAnswer');
    const questionText = document.querySelector('.questionText');

    showAnswerBtn.addEventListener('click', () => {
      questionText.innerHTML = flashCard.answer
    });

    return true;
  } 
  
  else {
    return false;
  }
}