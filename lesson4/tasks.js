// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleS(a, b) {
    return a * b;
}

console.log(rectangleS(3, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;

function circleS(r) {
    return PI * (r * r);
}

console.log(circleS(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS(h, r) {
    return 2 * PI * r * h;
}

console.log(cylinderS(80, 50));

// - створити функцію яка приймає масив та виводить кожен його елемент
function dataArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let array = [1, 3, 4, 666];
dataArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function someText(text) {
    document.write(`<p>${text}</p>`);
}

someText(`some text`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul3li(text) {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}

ul3li(`bla bla`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul3li1(text, qualityLI) {
    document.write(`<ul>`);
    for (i = 0; i < qualityLI; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ul3li1(`abc`, 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayElements(arr) {
    document.write(`<ol>`)
    for (i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ol>`);
}

let arr = [1, 999, `string`, true, false];
arrayElements(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function objectArray(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}

let arrayInfo = [{id: 1, name: `Vasyl`, age: 56}, {id: 2, name: `Stepan`, age: 38}, {id: 3, name: `Oleg`, age: 27}];
objectArray(arrayInfo);

// - створити функцію яка повертає найменьше число з масиву
function minNumberArray(array) {
    let minimum = array[0];
    for (let i of array) {
        if (i < minimum) {
            minimum = i;
        }
    }
    return minimum;
}

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(minNumberArray(arrayNum));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const i of arr) {
        sum = i + sum;
    }
    return sum;
}

console.log(sum(arrayNum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrSwap = [11, 22, 33, 44];
function swap(arr, index1, index2) {
    let i1 = arr[index1];
    let i2 = arr[index2];
    arr[index1] = i2;
    arr[index2] = i1;
    return console.log(arr);
}
swap(arrSwap,0,1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyElement of currencyValues) {
        if (currencyElement.currency === exchangeCurrency) {
            return console.log(sumUAH / currencyElement.value);
        }
    }
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');