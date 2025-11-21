// Botões
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// Tabs
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');


// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  tab2.classList.add("hidden");
  tab3.classList.add("hidden");
  tab4.classList.add("hidden");
});

// primeiro botão
btn1.addEventListener('click', () => {
  tab3.classList.add("hidden");
  tab2.classList.add("hidden");
  tab1.classList.remove("hidden");
  tab4.classList.add("hidden");

  btn3.classList.remove("underline-simple");
  btn2.classList.remove("underline-simple");
  btn4.classList.remove("underline-simple");

  btn1.classList.add("underline-simple")

})

// segundo botão
btn2.addEventListener('click', () => {
  tab1.classList.add("hidden");
  tab2.classList.remove("hidden")
  tab3.classList.add("hidden");
  tab4.classList.add("hidden");

  btn1.classList.remove("underline-simple");
  btn3.classList.remove("underline-simple");
  btn4.classList.remove("underline-simple");

  btn2.classList.add("underline-simple")
})

// terceiro botão
btn3.addEventListener('click', () => {
  tab1.classList.add("hidden");
  tab2.classList.add("hidden")
  tab3.classList.remove("hidden");
  tab4.classList.add("hidden");

  btn1.classList.remove("underline-simple");
  btn2.classList.remove("underline-simple");
  btn4.classList.remove("underline-simple");

  btn3.classList.add("underline-simple")

})

// quarto botão
btn4.addEventListener('click', () => {
  tab1.classList.add("hidden");
  tab2.classList.add("hidden")
  tab4.classList.remove("hidden");
  tab3.classList.add("hidden");

  btn1.classList.remove("underline-simple");
  btn2.classList.remove("underline-simple");
  btn3.classList.remove("underline-simple");

  btn4.classList.add("underline-simple")

})