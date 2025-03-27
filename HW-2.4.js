// lesson 1

for (let i = 0; i < 2; i = i + 1) {
    console.log('Привет');
}

// lesson 2

for (i = 1; i <= 5; i = i + 1) {
    console.log(i);
}

// lesson 3

for (i = 7; i <= 22; i = i + 1) {
    console.log(i);
}

// lesson 4

const obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
};

// lesson 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

// lesson 6

const firstFriday = 7;
const totalDays = 31;
let day = firstFriday;

do {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    day += 7;
} while (day <= totalDays);





