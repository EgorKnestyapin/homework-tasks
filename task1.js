// 1. Написать модуль, который будет включать в себя следующие методы.
// 1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
function toLowerCaseFirstUpper(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(toLowerCaseFirstUpper("aBScD"));

// 1.2. Преобразование строки с целью правильно расстановки пробелов.
function correctSpacePlacement(str) {
    let arr = str.split("");
    let punctuation = [",", ".", "?", ":", "!"];

    for (i = 0; i < arr.length - 1; i++) {
        if (punctuation.includes(arr[i])) {
            if (arr[i + 1] != " ") {
                arr.splice(i + 1, 0, " ");
                i++; 
            }
        } else if (arr[i] == " ") {
            if (arr[i + 1] == " ") {
                arr.splice(i-- + 1, 1);
            } else if (punctuation.includes(arr[i + 1])) {
                arr.splice(i--, 1);
            }
        }
    }

    return arr.join("");
}

// 1.3. Посдчитывающие кол-во слов в строке.
function countWords(str) {
    let subWord;
    let notLetter = [".", ",", " ", "!", "?", ":"];
    let words = [];

    for (i = 0; i < str.length; i++) {
        if (!notLetter.includes(str[i])) {
            subWord += str[i];
        } else {
            if (subWord) words.push(subWord);
            subWord = "";
        }
        if (i == str.length - 1) words.push(subWord);
    }

    return words.length;
}
console.log(countWords("Вот пример строки,в которой     используются знаки препинания.После"));

// 1.4. Подсчитывающий, уникальные слова.
function countUniqueWords(str) {
    let uniqueWords = new Map();
    let notLetter = [".", ",", " ", "?", "!", ":"];
    let subWord = "";

    for (i = 0; i < str.length; i++) {
        if (!notLetter.includes(str[i])) {
            subWord += str[i];
        } else {
            if (subWord) {
                uniqueWords.set(subWord.toLowerCase(), (uniqueWords.get(subWord.toLowerCase()) ?? 0) + 1);
                subWord = "";
            }
        }
        if (i == str.length - 1) {
            uniqueWords.set(subWord.toLowerCase(), (uniqueWords.get(subWord.toLowerCase()) ?? 0) + 1);
        }
    }

    return uniqueWords;
}

function outputQuantityUniqueWords(uniqueWords) {
    for (let [word, quantity] of uniqueWords) {
        console.log(`Слово "${word}" встречается ${quantity} раз(а)`)
    }
}

outputQuantityUniqueWords(countUniqueWords(`Текст, в котором слово текст несколько раз встречается и слово тоже`));