const typedTextSpan = document.querySelector("#profilTextBox");
const cursorSpan = document.querySelector("#cursor");

const textArray = ["a WEB developer", "a HUMAN", "use to do great things"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        cursorSpan.style.animationPlayState = 'paused';
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.style.animationPlayState = 'running';
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        cursorSpan.style.animationPlayState = 'paused';
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.style.animationPlayState = 'running';
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});