
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);

console.log(filteredNumbers);

const kitchenAppliances = [
  "Блендер",
  "Тостер",
  "Кофеварка",
  "Микроволновка",
  "Мультиварка"
];

const hasToaster = kitchenAppliances.includes("Тостер");
const hasDishwasher = kitchenAppliances.includes("Посудомойка");

console.log(hasToaster);
console.log(hasDishwasher);

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(numbers));
console.log(reverseArray(kitchenAppliances));

import { socialMediaComments } from './comments.js';

console.log(socialMediaComments);

const comEmailComments = socialMediaComments.filter((comment) =>
  comment.email.includes(".com")
);

console.log(comEmailComments);

const updatedComments = socialMediaComments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

const simplifiedComments = socialMediaComments.map((comment) => ({
  id: comment.id,
  name: comment.name
}));

const validatedComments = socialMediaComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(validatedComments);

const emailsWithReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduce);


const emailsWithMap = socialMediaComments.map((comment) => comment.email);

console.log(emailsWithMap);

const emailsStringDefault = emailsWithMap.toString();
console.log(emailsStringDefault);

const emailsStringJoined = emailsWithMap.join(", ");
console.log(emailsStringJoined);
