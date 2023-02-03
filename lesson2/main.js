// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, true, 22, `false`, `array`, 0, false, `333`, 333, `OKTEN`];
console.log(array.length);
console.log(typeof array);
console.log(array);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: `Javascript`,
    pageCount: 576,
    genre: `programming`
}
let book1 = {
    title: `Java`,
    pageCount: 713,
    genre: `programming`
}
let book2 = {
    title: `Python`,
    pageCount: 934,
    genre: `programming`
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book3 = {
    title: `Javascript`,
    pageCount: 576,
    genre: `programming`,
    authors: [{
        name: `Vasya`,
        age: 44
    }]
}
let book4 = {
    title: `Java`,
    pageCount: 713,
    genre: `programming`,
    authors: [{
        name: `Petya`,
        age: 23
    }]
}
let book5 = {
    title: `Python`,
    pageCount: 934,
    genre: `programming`,
    authors: [{
        name: `Lyosha`,
        age: 36
    }]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name: `Vasya`, username: `VasyaVasya`, password: 1234},
    {name: `Lyosha`, username: `LyoshaLyosha`, password: 2333},
    {name: `Petya`, username: `PetyaPetya`, password: 4431},
    {name: `Andrii`, username: `AndriiAndrii`, password: 5666},
    {name: `Kolya`, username: `KolyaKolya`, password: 3266},
    {name: `Artem`, username: `ArtemArtem`, password: 1778},
    {name: `Pavlo`, username: `PavloPavlo`, password: 8844},
    {name: `Maks`, username: `MaksMaks`, password: 2357},
    {name: `Oleg`, username: `OlegOleg`, password: 8643},
    {name: `Igor`, username: `IgorIgor`, password: 9999},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5][`password`]);
console.log(user[6][`password`]);
console.log(user[7][`password`]);
console.log(user[8][`password`]);
console.log(user[9][`password`]);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 11;
if (x !== 0) {
    console.log(`вірно`)
} else {
    console.log('невірно')
}
let a = +prompt(`Введіть число 1, 0 , -3`);
if (a !== 0) {
    console.log(`вірно`)
} else {
    console.log(`невірно`)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt(`ввeдіть число від 0 до 59`);
if (time <= 15 && time >= 0) {
    console.log(`це перша чверть години`)
} else if (time > 15 && time <= 30) {
    console.log(`це друга чверть години`)
} else if (time > 30 && time <= 45) {
    console.log(`це третя чверть години`)
} else if (time > 45 && time <= 59) {
    console.log(`це четверта чверть години`)
} else {
    console.log(`введіть інше число`)
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt(`введіть число від 1 до 31`);
if (day >= 1 && day < 11) {
    console.log('це перша декада місяця')
} else if (day >= 11 && day < 21) {
    console.log('це друга декада місяця')
} else if (day >= 21 && day <= 31) {
    console.log('це третя декада місяця')
} else {
    console.log('введіть інше число')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOFWeak = +prompt(`введіть порядковий день тижня від 1 до 7`)
switch (dayOFWeak) {
    case 1:
        console.log(`monday`);
        break
    case 2:
        console.log(`tuesday`);
        break
    case 3:
        console.log(`wednesday`);
        break
    case 4:
        console.log(`thursday`);
        break
    case 5:
        console.log(`friday`);
        break
    case 6:
        console.log(`saturday`);
        break
    case 7:
        console.log(`sunday`);
        break
    default:
        console.log(`спробуйте ще раз`);
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt(`введіть перше число`);
let number2 = +prompt(`введіть друге число`);
if (number1 > number2) {
    console.log(number1)
} else if (number1 < number2) {
    console.log(number2)
} else {
    console.log(`числа рівні`)
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = prompt(`введіть що-завгодно`) || "default";
console.log(xx);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`Супер`)
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`Супер`)
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`Супер`)
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`Супер`)
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`Супер`)
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`Супер`)
}