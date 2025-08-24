const nameText = 'Moustafa Fadel Outour';
const nameEl = document.getElementById('typed-name');
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameEl.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    nameEl.style.borderRight = 'none';
    showSubtitle();
  }
}

function showSubtitle() {
  const subtitle = document.querySelector('.subtitle');
  subtitle.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
