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
