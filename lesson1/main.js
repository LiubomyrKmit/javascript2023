// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let numbers = [1, 10, -999, 123];
const pi = 3.14;
const twoSeven = 2.7;
const sixteen = 16;
let bool = true;
let boolBool = false;
console.log(hello, owu, com, ua, numbers, pi, twoSeven, sixteen, bool, boolBool);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = `Любомир`;
let middleName = `Романович`;
let lastName = `Кміть`;
let person = firstName + middleName + lastName;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, b, c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По Батькові та роками. та вивести в консоль
prompt('ім`я', firstName);
prompt('по-батькові', middleName);
let age = prompt('вік', '27');
console.log(` Вітаю ` + firstName + ` ` + middleName + `. Тобі ` + age + ` років.`);