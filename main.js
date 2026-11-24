const firstProductCard = document.querySelector('.product-card');
const changeColorCardButton = document.querySelector('#change-color-card-button');

changeColorCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = '#E8F4F8'; 
});


const allProductCards = document.querySelectorAll('.product-card');
const changeAllCardsButton = document.querySelector('#change-all-cards-button');

changeAllCardsButton.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = '#F3E5F5';
  });
});


const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', () => {
  window.open('https://google.com', '_blank');
}); 


const showLogAlertButton = document.querySelector('#show-log-alert-button');

showLogAlertButton.addEventListener('click', () => {
  console.log('Кнопка нажата! Лог успешно выведен.');
  alert('Привет! Вы выбрали действие с alert.');
});


const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseenter', () => {
  console.log(catalogTitle.textContent);
});


const toggleColorButton = document.querySelector('#toggle-color-button');

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('is-active');
});