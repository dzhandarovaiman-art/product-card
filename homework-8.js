const userProfile = {
  firstName: "Иман",
  lastName: "Джандарова",
  age: 17,
  email: "iman.djandarova@example.com",
  country: "Чечня",
  city: "Грозный",
  company: "TechSolutions",
  position: "программист",
  relationshipStatus: "не жената",
  isEmployed: true
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Черный",
  transmission: "Автоматическая"
};

  car.owner = userProfile;

  console.log(car);

  function addMaxSpeed(carObject) {

  if ("maxSpeed" in carObject) {
    return;
  }

  carObject.maxSpeed = 240;
}

addMaxSpeed(car);

console.log(car);

function logPropertyValue(obj, propertyName) {
  console.log(obj[propertyName]);
}


logPropertyValue(car, "brand");
logPropertyValue(car, "maxSpeed");
logPropertyValue(userProfile, "city");

const products = [
  "Хлеб",
  "Молоко",
  "Яблоки",
  "Сыр",
  "Кофе",
  "Куриное филе",
  "Макароны"
 ];

 const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Черный",
    genre: "Роман"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия"
  },
  {
    title: "Дюна",
    author: "Фрэнк Герберт",
    year: 1965,
    coverColor: "Песочный",
    genre: "Научная фантастика"
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    coverColor: "Синий",
    genre: "Сказка-притча"
  }
];

books.push({
  title: "Три товарища",
  author: "Эрих Мария Ремарк",
  year: 1936,
  coverColor: "Зеленый",
  genre: "Роман"
});

console.log(books);

const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Синий",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    coverColor: "Красный",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Джоан Роулинг",
    year: 1999,
    coverColor: "Фиолетовый",
    genre: "Фэнтези"
  }
];

const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);

function markRareBooks(booksList) {
  return booksList.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const updatedBooks = markRareBooks(allBooks);

console.log(updatedBooks);