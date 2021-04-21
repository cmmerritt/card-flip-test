let cardToFlipContainer0 = document.querySelectorAll('.flip-container')[0];
let cardToFlip0 = document.querySelectorAll('.inner-flip-container')[0];

cardToFlipContainer0.addEventListener('click', () => {
    cardToFlip0.classList.toggle('flip');
});

let cardToFlipContainer1 = document.querySelectorAll('.flip-container')[1];
let cardToFlip1 = document.querySelectorAll('.inner-flip-container')[1];

cardToFlipContainer1.addEventListener('click', () => {
    cardToFlip1.classList.toggle('flip');
});

let cardToFlipContainer2 = document.querySelectorAll('.flip-container')[2];
let cardToFlip2 = document.querySelectorAll('.inner-flip-container')[2];

cardToFlipContainer2.addEventListener('click', () => {
    cardToFlip2.classList.toggle('flip');
});
