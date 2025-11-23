const txt = document.getElementById('txt');
const count = document.getElementById('count');


txt.addEventListener('input', () => {
  let txtValue = txt.value.length;

  if (txtValue <= 250) {
    count.innerHTML = `${txtValue}/250` 

  } 

  if (txtValue === 250) {
    txt.style.color = 'red';
    txt.style.border = '1px solid red'

    count.style.color = 'red'
  }

  if (txtValue !== 250) {
    txt.style.color = 'black';
    txt.style.border = '1px solid black'

    count.style.color = 'black'
  }
});