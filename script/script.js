'use strict';

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function game() {
    const randomNumber = Math.ceil(Math.random() * 100) + 1;
    console.log(randomNumber);
    function gameRandomNumber() {
        const answer = prompt('Угадай число от 1 до 100');

        if (answer === null) {
            alert('Игра окончена');
            return;
        } else if (!isNumber(answer) || answer > 100 || answer < 0) {
            alert('Введите число!');
            gameRandomNumber();
        } else if (randomNumber < answer) {
            alert('Загаданное число меньше');
            gameRandomNumber();
        } else if (randomNumber > answer) {
            alert('Загаданное число больше');
            gameRandomNumber();
        } else if (answer == randomNumber) {
            return alert('Поздравляю, Вы угадали!!!');
        } else if (!isNumber(answer) || answer > 100 || answer < 0) {
            alert('Введите число!');
            gameRandomNumber();
        } else {
            alert('Что-то пошло не так');
            return;
        }
    }
    return gameRandomNumber();
}
game();




