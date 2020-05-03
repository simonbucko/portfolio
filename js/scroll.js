const buttonDown = document.getElementById('down');
const buttonMiddle = document.getElementById('middle');
const buttonUp = document.getElementById('up');
const sections = document.querySelectorAll('section');
const firstContent = document.querySelector('.scrollAnimation');
const secondContent = document.querySelector('.technologiesTables');
const thirdContent = document.querySelector('.technologiesAnimation');
const fourthContent = document.querySelector('.projectsContent');

let buttons = [buttonUp, buttonMiddle, buttonDown];
let contentsToAnimate = [firstContent, secondContent, thirdContent, fourthContent];

function toogleContentAnimation(index) {
    contentsToAnimate.forEach((content, i) => {
        if (i === index) {
            content.classList.add('showContent');
            if (index === 2)
                contentsToAnimate[1].classList.add('showContent');
        }
        else content.classList.remove('showContent');
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(toogleContentAnimation(0), 1000);
});

function activeButtons(buttonsLocal, index) {
    buttonsLocal.forEach((button, i) => {
        button.classList.remove('activeButton');
        if (i == index) {
            button.classList.add('activeButton');
        }
    })
}
activeButtons(buttons, 0);

//Buttons clicks scrolling
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: "smooth" });
    })
})
//Scrolling onClick
sections.forEach(section => {
    section.addEventListener('click', function () {
        const id = this.getAttribute('id');
        sections[id].scrollIntoView({ behavior: 'smooth' });
    })
})

window.addEventListener('scroll', () => {
    let firstElementMiddle = (sections[0].offsetTop + sections[1].offsetTop) / 2;
    let secondElementMiddle = (sections[1].offsetTop + sections[2].offsetTop) / 2;
    if (window.pageYOffset <= firstElementMiddle) {
        activeButtons(buttons, 0);
        toogleContentAnimation(0);
    }
    else if (window.pageYOffset > firstElementMiddle && window.pageYOffset < secondElementMiddle) {
        activeButtons(buttons, 1);
        toogleContentAnimation(1);
        toogleContentAnimation(2);
    }
    else {
        activeButtons(buttons, 2);
        toogleContentAnimation(3);
    }
})