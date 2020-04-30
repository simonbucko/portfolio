const texts = ['WEB developer', 'HUMAN',]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let letterBackWard = '';
let textField = document.querySelector('#profilTextBox');

function pause(duration) {
    let time = new Date().getTime();
    let currentTime = 0;
    while (currentTime - time < duration) {
        currentTime = new Date().getTime();
    }
}

function deleting(letter, length) {
    pause(3000);
    for (let i = 1; i < length + 1; i++) {
        letter = currentText.slice(0, -i);
        pause(400);
        // console.log(letter);
        textField.textContent = letter;
        console.log(textField.textContent);
    }
}

(function type() {
    //changing from the last word to first one
    if (count === texts.length) {
        count = 0;
    }
    //writting letters
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    textField.textContent = letter;

    //deleting letters
    if (letter.length === currentText.length) {
        deleting(letter, letter.length);

        // pause(3000);
        // let indexBackward = letter.length;
        // for (let i = 0; i < indexBackward; i++) {
        //     letter = letter.slice(0, -1);
        //     pause(400);
        //     console.log(letter);
        //     textField.textContent = letter;
        // }
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();