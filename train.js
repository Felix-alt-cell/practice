// H-TASK (NodeJS)

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }

    return result;
}

console.log(getPositive([1, -4, 2, 79, 0])); 













// F-TASK (NodeJS)

// Shunday findDoublers function tuzing, 
// unga faqat bitta string argument pass bolib, 
// agar stringda bir hil harf qatnashgan bolsa true, 
// qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi



// function findDoublers(str) {
//     let unique = new Set(str);
//     return unique.size !== str.length;
// }

// // Test
// console.log("Answer for 'MIT40TEAM':", findDoublers("MIT40TEAM")); 
// console.log("Answer for 'abc':", findDoublers("abc"));    




// E-TASK (NodeJS)

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// solution
// function getReverse(str) {
//     return str.split('').reverse().join('');
// }

// // test
// console.log(getReverse("MIT40.Group"));





// D-TASK (NodeJS)

// Shunday function tuzingki 
// unga integerlardan iborat array pass bolsin 
// va function bizga osha arrayning 
// eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) 
// return qiladi 1 sonini.

// // solution

// function getHighestIndex(list) {

//     let max = list[0];
//     let index = 0;

//     for (let a = 0; a < list.length; a++) {

//         if (list[a] > max) {
//             max = list[a];
//             index = a;
//         }

//     }

//     return index;
// }

// let list = [5, 90, 0, 5, 4];

// console.log(getHighestIndex(list));









// C-TASK (NodeJS)

// Shunday function tuzing, 
// u 2ta string parametr ega bolsin, 
// hamda agar har ikkala string bir hil 
// harflardan iborat bolsa true aks holda false qaytarsin


//     if (a.length !== b.length) {
//         return false;
//     }

//     let sorted1 = a.split("").sort().join("");
//     let sorted2 = b.split("").sort().join("");

//     return sorted1 === sorted2;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("Listen", "Silent"));

// // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(a, b) {









/*
MITASK B
Shunday function tuzing, u 1ta string parametrga ega bolsin, 
hamda osha stringda qatnashgan raqamlarni sonini 
bizga return qilsin.

MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

//Solution

// function countDigits(text) {
//     let count = 0;

//     for (let x = 0; x < text.length; x++) {
//         if (text[x] >= '0' && text[x] <= '9') {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countDigits("y0u4c0d1sp9ssw0r6d"))












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