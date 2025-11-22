const tab = document.getElementById('cookieTab');
const btn = document.getElementById('btn');
const x = document.getElementById('x');


document.addEventListener('DOMContentLoaded', () => {
  tab.classList.add('slide-in');
});

btn.addEventListener('click', () => {
  tab.classList.remove('slide-in');
  tab.classList.add('slide-out');
});

x.addEventListener('click', () => {
  tab.classList.remove('slide-in');
  tab.classList.add('slide-out');
});