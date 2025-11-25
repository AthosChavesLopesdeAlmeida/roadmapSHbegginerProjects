const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const sect1 = document.getElementById('sect1');
const sect2 = document.getElementById('sect2');
const sect3 = document.getElementById('sect3');

btn1.addEventListener('click', () => {
  if (window.getComputedStyle(sect1).display !== 'none') {
    sect1.classList.add('slideTop')
    sect1.classList.remove('slideDown')
  } else {
    sect1.classList.add('slideDown')
    sect1.classList.remove('slideTop')
  }
});

btn2.addEventListener('click', () => {
  if (window.getComputedStyle(sect2).display !== 'none') {
    sect2.classList.add('slideTop')
    sect2.classList.remove('slideDown')
  } else {
    sect2.classList.add('slideDown')
    sect2.classList.remove('slideTop')
  }
});

btn3.addEventListener('click', () => {
   if (window.getComputedStyle(sect3).display !== 'none') {
    sect3.classList.add('slideTop')
    sect3.classList.remove('slideDown')
  } else {
    sect3.classList.add('slideDown')
    sect3.classList.remove('slideTop')
  }
});