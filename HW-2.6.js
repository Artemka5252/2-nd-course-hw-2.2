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
for (let i = 0; i < 3; i++) {
    numbers.push(2)
}
console.log(numbers);

// lesson 6

let alse = [9, 8, 7, 'a', 6, 5];
alse.sort((a, b) => a - b);
let newAlse = [];
for (let i = alse.length; i > 0; i--) {
    let element = alse.pop();
    if (typeof element === 'number') {
        newAlse.unshift(element);
    }
}
console.log(newAlse);

// lesson 7

const arr = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число от 5 до 9:");
const userNumber = Number(userInput);
let isGuessed = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === userNumber) {
        isGuessed = true;
        break;
    }
}
if (isGuessed) {
    alert("Угадал");
} else {
    alert("Не угадал");
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
let flat.Number[];
for (let i = 0; i = number.length; i++) {
    flatNumber = flatNumber.concat(number(i));
};
console.log(flatNumber);

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

function getWordLengths(str) {
    const words = str.split(" ");
    return words.map(word => word.length);
}
const sentence = "apple banana cherry kiwi";
console.log(getWordLengths(sentence));

// lesson 13

function getNegativeNumbers(arr) {
    const negativeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const splitElement = arr[i].toString().split('');
        if (arr[i] < 0) {
            negativeNumbers.push(arr[i]);
        }
    }
    return negativeNumbers;
}
const numbers = [1, -2, 3, -4, 5, -6];
console.log(getNegativeNumbers(numbers));

// lesson 14

const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
}
const evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}
console.log("Исходный массив:", arr);
console.log("Массив четных чисел:", evenNumbers);

// lesson 15

const arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

const average = sum / arr.length;
console.log("Массив:", arr);
console.log("Среднее арифметическое:", average);