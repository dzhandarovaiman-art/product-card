function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Москва', 18);



const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300000000);
checkSpeed(100000);
checkSpeed(299792458);


const productName = 'Увлажняющая маска';
const productPrice = 25;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(30);
buyProduct(15);


function greetUser(userName) {
  console.log(`Добро пожаловать в магазин, ${userName}!`);
}

greetUser('Анна');


const storeName = 'Beauty Shop';
const discountPercent = 10;
const isStoreOpen = true;