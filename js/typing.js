const texts = ['WEB developer', 'HUMAN',]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let letterBackWard = '';

function pause(duration) {
    let time = new Date().getTime();
    let currentTime = 0;
    while (currentTime - time < duration) {
        currentTime = new Date().getTime();
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
    document.querySelector('#profilTextBox').textContent = letter;

    //deleting letters
    if (letter.length === currentText.length) {
        pause(3000);
        let indexBackward = letter.length;
        for (let i = 0; i < indexBackward; i++) {
            letter = letter.slice(0, -1);
            pause(400);
            console.log(letter);
            document.querySelector('#profilTextBox').textContent = letter;
        }
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();