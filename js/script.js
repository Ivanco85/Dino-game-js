const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

window.onkeydown = jumpDino;

console.log(window);


function jumpDino(event) {

    if (event.code === 'Space') {
        dino.classList.add('jump');
        setTimeout(function () {
            dino.classList.remove('jump');
        }, 1000)
    }
}
// setTimeout(function () {
//     console.log('cactus', cactus.offsetLeft);
// }, 100)

// setTimeout(function () {
//     console.log('cactus', cactus.offsetLeft);
// }, 200)

// setTimeout(function () {
//     console.log('cactus', cactus.offsetLeft);
// }, 300)
console.log(dino);

let stop = true

function jampalert() {
    // console.log('cactus', cactus.offsetLeft);
    // console.log('dino', dino.offsetLeft);
    if (cactus.offsetLeft <= 292) {
        if (dino.offsetTop > 140) {
            if (stop === true) {
                alert('Game over');
            }
        }
    }
}

setInterval(jampalert, 2);

