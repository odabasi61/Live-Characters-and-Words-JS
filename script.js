'use strict';

const textArea = document.getElementById('content');
const charactersCount = document.getElementById('cCount');
const wordsCount = document.getElementById('wCount');

textArea.oninput = () => {
    let characters = textArea.value;
    charactersCount.textContent = characters.replace(/\s/g, '').length;

    let words = textArea.value.split(' ').filter((item) => {
        return item != '';
    });
    wordsCount.textContent = words.length;
}