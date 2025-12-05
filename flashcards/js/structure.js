// Função que cria um ID único para o card e coloca em um Array para criar o funcionamento dos botões 'próximo' e 'anterior'
export function createCardObject(question, answer, arr) {

  const flashCard = new Object;
  flashCard.id = crypto.randomUUID();
  flashCard.question = question;
  flashCard.answer = answer;

  arr.push(flashCard)
  
  return arr
}

// Função que cria a lógica de mostrar o card anterior
export function showPrevCard(arr, currentCard) {
  const now = arr.indexOf(currentCard)

  if (now - 1 < 0) {
    console.log('Não é possível retornar')
  } else {
    console.log(arr[now - 1])
  }
}

// Função que cria a lógica de mostrar o próximo card
export function showNextCard(arr, currentCard) {
  const now = arr.indexOf(currentCard);

  if (now + 1 > arr.length - 1) {
    console.log('não é possível avançar');
  } else {
    console.log(arr[now + 1]);
  }
}