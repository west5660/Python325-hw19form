const formTemplate = document.querySelector('form');
const addButton = document.querySelector('.b2');
const cardsContainer = document.querySelector('#card2');

addButton.addEventListener('click', () => {
  const clonedForm = formTemplate.cloneNode(true);
  cardsContainer.appendChild(clonedForm);
});