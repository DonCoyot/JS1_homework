const trafficLightEl = document.querySelector('#trafficLight');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');
const buttons = document.querySelector('form');

buttons.addEventListener('click' , makeGreen);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLight3.style.background = ('black');
    buttons.removeEventListener('click', makeGreen);
    buttons.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    buttons.removeEventListener('click', makeYellow);
    buttons.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight3.style.background = ('red');
    trafficLight2.style.background = ('black');
    buttons.removeEventListener('click', makeRed);
    buttons.addEventListener('click', makeGreen);
}




