// lesson 1

let a = 10;
alert(a);

a = 20;
alert(a);

// lesson 2

const Iphone = 2007;
alert(`Год выпуска первого Iphone: ${Iphone}`);

// lesson 3

const JS = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript: ${JS}`);

// lesson 4. Нельзя в одном файле одинаковые значения переменных, по-этому поменял их.

let c = 10;
let d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);

// lesson 5.

let result = Math.pow(2, 5);
alert(result);

// lesson 6.Нельзя в одном файле одинаковые значения переменных, по-этому поменял их.

let w = 9;
let e = 2;
alert(w % 2);

// lesson 7.

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// lesson 8.

let age = prompt('Сколько вам лет ?');
alert(age);

// lesson 9.0
const user = {
    name: 'Bob',
    age: 52,
    isAdmin: false,
}

// lesson 9.1

user.cityOfResidence;

// lesson 9.2

user.age = 40;

// lesson 9.3

delete user.cityOfResidence;

// lesson 9.4

let info = prompt("Какую информацию хотите узнать о пользователе ?");
alert(user[info]);

// lesson 10

let names = prompt("Как вас зовут ?");
alert(`Привет, ${names}!`);