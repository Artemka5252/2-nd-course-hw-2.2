// lesson 1

const java = 'js';
console.log(java.toUpperCase());

// lesson 2

function filterByPrefix(arr, prefix) {
    return arr.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase()));
}
const words = ["Яблоко", "Апельсин", "Ягодка", "банан", "Ящерица"];
const prefix = "я";
const result = filterByPrefix(words, prefix);
console.log(result);

// lesson 3

Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

// lesson 4

const number = [52, 53, 49, 77, 21, 32];

const min = Math.min(...number);
const max = Math.max(...number);

console.log(min);
console.log(max);

// lesson 5

getRandomNumber() {
    const numberRandom = Math.floor(Math.random() * 10) + 1;
    console.log(numberRandom);
}
getRandomNumber();

// lesson 6

function getRandomArray(n) {
    const length = Math.floor(n / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (n + 1)));
    }

    return randomArray;
}

console.log(getRandomArray(10));

// lesson 7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 15));

// lesson 8

const currentDate = new Date();
const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric'
};
currentDate.toLocaleDateString('ru-RU', options);

// lesson 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// lesson 10

function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDate(now)); 