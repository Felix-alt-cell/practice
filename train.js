/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, 
hamda osha stringda qatnashgan raqamlarni sonini 
bizga return qilsin.

MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

//Solution

function countDigits(text) {
    let count = 0;

    for (let x = 0; x < text.length; x++) {
        if (text[x] >= '0' && text[x] <= '9') {
            count++;
        }
    }

    return count;
}
console.log(countDigits("y0u4c0d1sp9ssw0r6d"))












// /*
// A-TASK (NodeJS)

// Shunday 2 parametrli function tuzing, 
// hamda birinchi parametrdagi letterni ikkinchi parametrdagi
// sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// */

// //Solution

// function countLetter(letter, text) {
//     letter = letter.toLowerCase();
//     text = text.toLowerCase();

//     let count = 0;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countLetter("a", "United States of America"));


// /*

// */