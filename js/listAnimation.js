const technologies = document.querySelectorAll('.animatedLi');
let isPaused = false;

for (var i = 0; i < technologies.length; i++) {
    var n = Math.random() * (15.0 - 0) + 0;
    technologies[i].style.animationDelay = n + "s";
    var n = Math.random() * (20.0 - 15.0) + 10.0;
    technologies[i].style.animationDuration = n + "s";
}

technologies.forEach(technology => {
    technology.addEventListener('mouseenter', e => {
        e.target.style.animationPlayState = 'paused'
    });
    technology.addEventListener('mouseleave', e => {
        e.target.style.animationPlayState = 'running'
    })
})