// No navegador usamos o luxon global carregado via CDN
const { DateTime } = luxon;

const result = document.getElementById('result');
const calc = document.getElementById('calc')



function calculate (){

  const birthYear = Number(document.getElementById('year').value);
  const birthMonth = Number(document.getElementById('month').value);
  const birthDay = Number(document.getElementById('day').value);

  const now = DateTime.now();
  let ageYear = now.year - birthYear;
  let ageMonth = now.month - birthMonth;
  let ageDay = now.day - birthDay;

  if (ageDay < 0) { // Se o dia de idade atual for menor que 0
    const prevMonth = now.minus({ months: 1 }); // O mês anterior é usado
    ageDay += prevMonth.daysInMonth; // Adiciona o número de dias do mês anterior ao dia da idade atual
    ageMonth -= 1; // Diminui o número de meses
  }

  if (ageMonth < 0) {
    ageMonth += 12;
    ageYear -= 1;
  }


  result.innerHTML = `Você tem ${ageYear} anos, ${ageMonth} meses e ${ageDay} dias de idade`;
}

calc.addEventListener('click', () => {
  calculate()
});