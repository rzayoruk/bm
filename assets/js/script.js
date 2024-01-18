let rangeInput = document.getElementById('volume');
let pseudoInput = document.getElementById('pseudo');

let pseudoMusic = document.getElementById('pseudo-music');
let musicBar = document.getElementById('music-bar');

rangeInput.addEventListener('input', function () {

    pseudoInput.style.width = pseudoInput.parentNode.offsetWidth * rangeInput.value / 100 + 'px';
});

function resize1() {
    pseudoInput.style.width = pseudoInput.parentNode.offsetWidth * rangeInput.value / 100 + 'px';
}

musicBar.addEventListener('input', function () {

    pseudoMusic.style.width = pseudoMusic.parentNode.offsetWidth * musicBar.value / 100 + 'px';
});

function resize2() {

    pseudoMusic.style.width = pseudoMusic.parentNode.offsetWidth * musicBar.value / 100 + 'px';
}

new ResizeObserver(resize1).observe(rangeInput);
new ResizeObserver(resize2).observe(musicBar);