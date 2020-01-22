const speed = 6;
const worldSize = 10;
const startPoint = [5, 5];
const snake = [startPoint];
const key = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
};

let movingDirection;
let moveInterval;