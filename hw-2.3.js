// lesson 1

let password = 'пароль';
let pass = prompt('Введите пароль');
if (password === pass) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неверно')
};

// lesson 2
// верно
let c = 5;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// skript 1
// неверно
let c = 0;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// skript 2
// неверно
let c = 10;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// skript 3
// неверно
let c = -3;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// skript 4
// верно
let c = 2;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}



// lesson 3

let d = 5;
let e = 7;
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

// lesson 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert = (Number(a) + Number(b));

// lesson 5

let monthNumber = Number(prompt('введите номер месяца'))
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('ввели что-то не то');
        break;
}

// lesson 7

let answer = Number(prompt('Пожалуйста, введите любое число'))
if (isNaN(answer)) {
    alert('Введите число');
} else {
    if (answer % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

// lesson 8
let clientOS = 1;
alert(clientDeviceYear <= 1 ? `Установите версию приложения для iOC по ссылке.` : `Установите приложение для Android по ссылке`);

// lesson 9

let clientOS = "iOS";
let clientDeviceYear = 2014;
alert(clientDeviceYear < 2015 ? `Установите облегченную версию приложения для ${clientOS} по ссылке.` : `Установите приложение для ${clientOS} по ссылке`);

