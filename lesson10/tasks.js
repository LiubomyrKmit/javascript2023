// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.forms.f1;
console.log(f1);
f1.onsubmit = function (eo) {
    eo.preventDefault();
    let div1 = document.createElement(`div`);
    div1.classList.add(`div1`);
    let divName = document.createElement(`div`);
    let divSurname = document.createElement(`div`);
    let divAge = document.createElement(`div`);
    divName.append(f1.name.value);
    divSurname.append(f1.surname.value);
    divAge.append(f1.age.value);
    div1.append(divName, divSurname, divAge);
    document.body.appendChild(div1);
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter = localStorage.getItem(`counter`);
if (!counter) {
    counter = 0;
}
let count = document.getElementById(`counter`);
let newCount = (+counter + 1).toString();
count.innerText = newCount;
localStorage.setItem('counter', newCount);
// ==========================
