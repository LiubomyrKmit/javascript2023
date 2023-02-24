// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers;
newUsers = [
    new User(1, `Vasyl`, `Popov`, `vasylpopov@gmail.com`, 380631231231),
    new User(12, `Stepan`, `Borovets`, `stepaborovets@gmail.com`, 3806312332111),
    new User(93, `Leonid`, `Haos`, `haos@gmail.com`, 380985463789),
    new User(84, `Myhaylo`, `Lyhoglyad`, `misha123@gmail.com`, 380671267345),
    new User(35, `Sergiy`, `Kravchuk`, `Kravchuk@gmail.com`, 380989876125),
    new User(66, `Yaryna`, `Bila`, `bila@gmail.com`, 380634554455),
    new User(77, `Hrystyna`, `Lugova`, `hrustya@gmail.com`, 380981234567),
    new User(48, `Olesya`, `Vovk`, `vovk@gmail.com`, 380668374912),
    new User(59, `Ruslana`, `Nagirna`, `ruslana1223@gmail.com`, 380638877665),
    new User(10, `Victoria`, `Danchuk`, `vika3993@gmail.com`, 380989876234),
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(newUsers.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
}));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(newUsers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [
    new Client(1, `Vasyl`, `Popov`, `vasylpopov@gmail.com`, 380631231231, [`toyota`, `bmw`, `audi`, `jeep`]),
    new Client(12, `Stepan`, `Borovets`, `stepaborovets@gmail.com`, 3806312332111, [`snickers`, `mars`, `bounty`, `twix`]),
    new Client(93, `Leonid`, `Haos`, `haos@gmail.com`, 380985463789, [`corona`, `miller`, `bud`, `stella artois`]),
    new Client(84, `Myhaylo`, `Lyhoglyad`, `misha123@gmail.com`, 380671267345, [`iphone`, `samsung`, `redmi`, `nokia`]),
    new Client(35, `Sergiy`, `Kravchuk`, `Kravchuk@gmail.com`, 380989876125, [`lacoste`, `tommy hilfiger`, `levis`]),
    new Client(66, `Yaryna`, `Bila`, `bila@gmail.com`, 380634554455, [`toothpaste`, `soap`, `shampoo`]),
    new Client(77, `Hrystyna`, `Lugova`, `hrustya@gmail.com`, 380981234567, [`watermelon`, `plum`, `grape`]),
    new Client(48, `Olesya`, `Vovk`, `vovk@gmail.com`, 380668374912, [`eggplant`, `cucumber`, `tomato`]),
    new Client(59, `Ruslana`, `Nagirna`, `ruslana1223@gmail.com`, 380638877665, [`milk`, `cheese`, `yogurt`]),
    new Client(10, `Victoria`, `Danchuk`, `vika3993@gmail.com`, 380989876234, [`pizza`, `hamburger`, `hot dog`]),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArray.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, manufacturer, production_year, max_speed, engine_size) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.production_year = production_year;
    this.max_speed = max_speed;
    this.engine_size = engine_size;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== "function")
                console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.production_year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Auto {
    constructor(model, manufacturer, production_year, max_speed, engine_size) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.production_year = production_year;
        this.max_speed = max_speed;
        this.engine_size = engine_size;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
        };
        this.info = function () {
            for (const key in this) {
                if (typeof this[key] !== "function")
                    console.log(`${key} - ${this[key]}`);
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.max_speed = this.max_speed + newSpeed;
        };
        this.changeYear = function (newValue) {
            this.production_year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        };
    };
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let cinderellas = [
    new Cinderella(`Jasmin`, 22, 36),
    new Cinderella(`Esmeralda`, 18, 35),
    new Cinderella(`Bella`, 21, 37),
    new Cinderella(`Diana`, 24, 38),
    new Cinderella(`Catherine`, 22, 36),
    new Cinderella(`Elena`, 27, 39),
    new Cinderella(`Victoria`, 28, 39),
    new Cinderella(`Eva`, 25, 38),
    new Cinderella(`Caroline`, 27, 38),
    new Cinderella(`Rosalie`, 23, 37),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, womenShoes) {
        this.name = name;
        this.age = age;
        this.womenShoes = womenShoes;
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const prince = new Prince(`Leopold`, 30, 37);
const couple = (cinderellas, prince) => {
    for (const item of cinderellas) {
        if (item.foot_size === prince.womenShoes) {
            return `${item.name}`;
        }
    }
}
console.log(couple(cinderellas, prince));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const couple1 = cinderellas.find((item) => item.foot_size === prince.womenShoes);
console.log(couple1);