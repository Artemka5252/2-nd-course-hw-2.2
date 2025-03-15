// lesson 1

let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// lesson 2

let i = 1;
while (i <= 5) {
    console.log(i);
    i++
}

// lesson 3

let i = 7;
while (i <= 22) {
    console.log(i);
    i++
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

for (let day = firstFriday; day <= totalDays; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}




