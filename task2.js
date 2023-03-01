/* 2.Написать модуль, который способен выполнять операции 
с числами любой длины.
4 метода для сложения, умножения, вычитания и деления.
*/

// Сложение
function sum(firstNum, secondNum) {
    return action(firstNum, secondNum, (a, b) => a + b);
}

// Умножение
function mult(firstNum, secondNum) {
    return action(firstNum, secondNum, (a, b) => a * b);
}

// Вычитание
function sub(firstNum, secondNum) {
    return action(firstNum, secondNum, (a, b) => a - b);
}

// Деление
function div(firstNum, secondNum) {
    return action(firstNum, secondNum, (a, b) => a / b);
}

// Общая функция для всех видов операций
function action(firstNum, secondNum, actionFunc) {
    if (isNaN(firstNum) || isNaN(secondNum)) {
        try {
            return actionFunc(BigInt(firstNum), BigInt(secondNum));
        }
        catch {
            console.log("Несовместимые типы")
            return null;
        }
    }
    return actionFunc(+firstNum, +secondNum);
}

console.log(sum('3346346347547484845845854845845845854844', '1'));
console.log(mult('3', '2'));
console.log(sub('6', '0.5'));
console.log(div('10', '5'));