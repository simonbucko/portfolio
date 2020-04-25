let sections = document.querySelectorAll('section');
let lastTime = 0;
let animationTime = 2000;
let index = 0;

window.addEventListener('wheel', (e) => {
    const delta = e.wheelDelta;
    console.log(delta);
    console.log("index", index);
    let currentTime = new Date().getTime();
    if (currentTime - lastTime < animationTime) {
        e.preventDefault();
        return;
    }
    console.log('scrolling');
    if (delta < 0) {
        if (index > 2) return;
        index++;
        sections.forEach((section, i) => {
            if (i === index) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        })
    } else {
        if (index < 1) return;
        index--;
        sections.forEach((section, i) => {
            if (i === index) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        })
    }
    lastTime = currentTime;
}, { passive: false })