const buttonDown = document.getElementById('down');
const buttonMiddle = document.getElementById('middle');
const buttonUp = document.getElementById('up');
const buttonFooter = document.getElementById('footer');
const sections = document.querySelectorAll('section');
let buttons = [buttonUp, buttonMiddle, buttonDown, buttonFooter];

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
buttonFooter.addEventListener('click', () => {
    sections[3].scrollIntoView({ behavior: "smooth" });
})
buttonDown.addEventListener('click', () => {
    sections[2].scrollIntoView({ behavior: "smooth" });
})

buttonMiddle.addEventListener('click', () => {
    sections[1].scrollIntoView({ behavior: "smooth" });
})

buttonUp.addEventListener('click', () => {
    sections[0].scrollIntoView({ behavior: "smooth" });
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
    let thirdElementMiddle = (sections[2].offsetTop + sections[3].offsetTop) / 2;
    if (window.pageYOffset <= firstElementMiddle) activeButtons(buttons, 0);
    else if (window.pageYOffset > firstElementMiddle && window.pageYOffset < secondElementMiddle) activeButtons(buttons, 1);
    else if (window.pageYOffset > secondElementMiddle && window.pageYOffset < thirdElementMiddle) activeButtons(buttons, 2);
    else activeButtons(buttons, 3);
})