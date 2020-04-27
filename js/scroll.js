let buttonDown = document.getElementById('down');
let buttonMiddle = document.getElementById('middle');
let buttonUp = document.getElementById('up');
let sections = document.querySelectorAll('section');
let buttons = [buttonUp, buttonMiddle, buttonDown];

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
buttonDown.addEventListener('click', () => {
    sections[2].scrollIntoView({ behavior: "smooth" });
    activeButtons(buttons, 2);
})

buttonMiddle.addEventListener('click', () => {
    sections[1].scrollIntoView({ behavior: "smooth" });
    activeButtons(buttons, 1);
})

buttonUp.addEventListener('click', () => {
    sections[0].scrollIntoView({ behavior: "smooth" });
    activeButtons(buttons, 0)
})
//Scrolling onClick
sections.forEach(section => {
    section.addEventListener('click', function () {
        const id = this.getAttribute('id');
        sections[id].scrollIntoView({ behavior: 'smooth' });
    })
})
//Scrolling onMouseEnter
// sections.forEach(section => {
//     section.addEventListener('mouseenter', function () {
//         const id = this.getAttribute('id');
//         buttions.forEach((button, i) => {
//             button.classList.remove('activeButton');
//             if (i == id) {
//                 button.classList.add('activeButton');
//             }
//         })
//     })
// })

window.addEventListener('scroll', () => {
    let firstElementMiddle = (sections[0].offsetTop + sections[1].offsetTop) / 2;
    let secondElementMiddle = (sections[1].offsetTop + sections[2].offsetTop) / 2;
    if (window.pageYOffset <= firstElementMiddle) activeButtons(buttons, 0);
    else if (window.pageYOffset > firstElementMiddle && window.pageYOffset < secondElementMiddle) activeButtons(buttons, 1);
    else activeButtons(buttons, 2);
})