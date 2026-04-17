/*
A-TASK (NodeJS)

Shunday 2 parametrli function tuzing, 
hamda birinchi parametrdagi letterni ikkinchi parametrdagi
sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

//Solution

function countLetter(letter, text) {
    letter = letter.toLowerCase();
    text = text.toLowerCase();

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log(countLetter("a", "United States of America"));
