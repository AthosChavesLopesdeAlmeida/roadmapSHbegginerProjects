// Função que cria um ID único para o card e coloca em um Array para criar o funcionamento dos botões 'próximo' e 'anterior'
export function createCardObject(question, answer, arr) {

  const flashCard = new Object;
  flashCard.id = crypto.randomUUID();
  flashCard.question = question;
  flashCard.answer = answer;

  arr.push(flashCard)
  
  return arr
}