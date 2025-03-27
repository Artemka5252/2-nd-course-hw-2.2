// lesson 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 10) break;
    console.log(numbs[i]);
}

// lesson 2

const numbs = [1, 5, 4, 10, 0, 3];
const index = numbs.indexOf(4);

console.log(index);

// lesson 3

let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(` `);
console.log(numbs);

// lesson 4

let num = [];
for (let i = 0; i < 3; i++) {
    const innerNum = [];
    for (let l = 0; l < 3; l++) {
        innerNum.push(1)
    }
    num.push(innerNum)
}

console.log(num);

// lesson 5

const numbers = [1, 1, 1];
numbers.push(2, 2, 2);
console.log(numbers);

// lesson 6

const alse = [9, 8, 7, 'a', 6, 5];
alse.sort();
const filteredAlse = alse.filter(alse => typeof alse === 'number');
console.log(filteredAlse);

// lesson 7

const number = [9, 8, 7, 6, 5];

const user = prompt('угадай число от 9 до 5')

if (number.includes(Number(user))) {
    alert("угадал");
} else {
    alert("не угадал");
}

// lesson 8

const line = 'abcdef';
const reversed = line.split('').reverse().join('');
console.log(reversed);

// lesson 9

const number = [
    [1, 2, 3],
    [4, 5, 6]
];
const unification = [...number[0], ...number[1]];
console.log(unification);

// lesson 10

const numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    console.log(sum);
}

// lesson 11

function getSquares(number) {
    return number.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares);


// lesson 12

function getStringLengths(line) {
    return line.map(str => str.length);
}

const words = ["apple", "banana", "kiwi", "orange"];
const lengths = getStringLengths(words);
console.log(lengths);

// lesson 13

function getNegativeNumbers(numbs) {
    return numbs.filter(num => num < 0);
}

const numbers = [1, -2, 3, -4, 5, -6];

const negativeNumbers = getNegativeNumbers(numbers);
console.log(negativeNumbers);

// lesson 14

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenNumbers = randomNumbers.filter(num => num % 2 === 0);
console.log("Исходный массив:", randomNumbers);
console.log("Массив с четными числами:", evenNumbers);

// lesson 15

const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const average = randomNumbers.reduce((sum, num) => sum + num, 0) / randomNumbers.length;
console.log("Массив случайных чисел:", randomNumbers);
console.log("Среднее арифметическое:", average);