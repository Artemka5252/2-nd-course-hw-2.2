document.getElementById("startButton").addEventListener("click", startGame);
function startGame() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert("Запомни фрукты: " + fruits.join(", "));
    setTimeout(() => {
        let firstGuess = prompt("Какой был первый фрукт?").toLocaleLowerCase();
        let lastGuess = prompt("Какой был последний фрукт?").toLocaleLowerCase();
        if (firstGuess === fruits[0].toLocaleLowerCase() && lastGuess === fruits[fruits.length - 1].toLocaleLowerCase()) {
            alert("Вы победили!");
        } else if (firstGuess === fruits[0].toLocaleLowerCase() || lastGuess === fruits[fruits.length - 1].toLocaleLowerCase()) {
            alert("Так близко!");
        } else {
            alert("Попробуйте ещё раз.");
        }
    }, 100);
}
