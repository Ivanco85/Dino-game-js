const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

// window.onkeydown = jumpDino;

// function jumpDino(event) {

//     if (event.code === 'Space') {
//         dino.classList.add('jump');
//         setTimeout(function () {
//             dino.classList.remove('jump');
//         }, 1000)
//     }
// }

// let stop = true

// function jampalert() {
//     // console.log('cactus', cactus.offsetLeft);
//     // console.log('dino', dino.offsetLeft);
//     if (cactus.offsetLeft <= 292) {
//         if (dino.offsetTop > 140) {
//             if (stop === true) {
//                 alert('Game over');
//             }
//         }
//     }
// }

// setInterval(jampalert, 2);

document.addEventListener('keydown', function (event) {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function () {
        dino.classList.remove('jump')}, 300);
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over');
    }
}, 10);