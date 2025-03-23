//lesson 1

function calculate(a, b) {
    return a < b ? a : b;
}

//lesson 2

function parity(num) {
    return num % 2 === 0 ? 'число четное' : 'число нечетное';
}

//lesson 3

function square(num) {
    console.log(num * num);
}

function square2(num) {
    return num * num
}

//lesson 4

function age() {
    let age = Number(prompt('Сколько вам лет'));
    if (age < 0) {
        console.log("Вы ввели неправильное значение.");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг");
    } else {
        console.log("Добро пожаловать.");
    }
}

//lesson 5

function multiplyNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}


//lesson 6

function cubeNumber() {
    let userAnswer = prompt('Введите число');

    if (isNaN(userAnswer)) {
        return "Переданный параметр не является числом.";
    }
    return `${userAnswer} в кубе равняется ${userAnswer * 3}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}

//lesson 7

const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 7,
    getArea() {
        return Math.PI * this.radius * 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

//lesson 8

function Season(month) {
    if (month < 1 || month > 12) {
        return "Недопустимое значение. Введите число от 1 до 12.";
    } else if (month === 12 || month === 1 || month === 2) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    }
}
// это что бы пользователь вводил значение
let month = prompt('введите номер месяца');
console.log(Season(month));

// а это проверял
console.log(Season(1));
console.log(Season(5));
console.log(Season(8));
console.log(Season(11));
console.log(Season(13));
console.log(Season(0));  