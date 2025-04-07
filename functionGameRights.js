
const correctAnswer = "марка";

function startGame() {
    let userAnswer = prompt("Что может путешествовать по свету, оставаясь в одном и том же углу?").toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Поздравляем, вы угадали! Это действительно марка!");
    } else {
        userAnswer = prompt("Неправильно. Первая подсказка: Это что-то маленькое, что можно наклеить. Попробуйте снова.").toLowerCase();
        if (userAnswer === correctAnswer) {
            alert("Поздравляем, вы угадали! Это действительно марка!");
        } else {
            userAnswer = prompt("Неправильно. Вторая подсказка: Это используется для отправки писем. Попробуйте снова.").toLowerCase();
            if (userAnswer === correctAnswer) {
                alert("Поздравляем, вы угадали! Это действительно марка!");
            } else {
                alert("Вы проиграли! Правильный ответ: марка.");
            }
        }
    }
}
document.getElementById("newButton").addEventListener("click", startGame);