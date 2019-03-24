let squareDistance = 0;
let distanceForChangeColor = 0;
let squareSize = 50;
const MIN_SQUARE_SIZE = 50;
const MAX_SQUARE_SIZE = 100;
let fromLeft = true;
let redColor = 0;
let greenColor = 0;
let blueColor = 0;
const div = document.createElement('div');
document.body.appendChild(div);
div.style.position = 'absolute';
div.style.top = '50%';
div.style.left = `${squareDistance}px`;
div.style.transform = 'translate(0, -50%)';

const changeColor = () => {
    redColor = Math.floor(Math.random() * 100);
    greenColor = Math.floor(Math.random() * 100);
    blueColor = Math.floor(Math.random() * 100);
    div.style.backgroundColor = `rgb(${redColor}%, ${greenColor}%, ${blueColor}%)`;
}

const moveSquare = () => {
    setInterval(move, 10);

    function move() {
        if (distanceForChangeColor % 20 === 0) {
            changeColor();
            distanceForChangeColor = 0;
        }
        if (fromLeft) {
            if (div.style.left === `${window.innerWidth - MAX_SQUARE_SIZE}px`) {
                fromLeft = !fromLeft;
            } else {
                squareDistance++;
                if (squareSize < MAX_SQUARE_SIZE) {
                    squareSize += ((MAX_SQUARE_SIZE - MIN_SQUARE_SIZE) / (window.innerWidth - MAX_SQUARE_SIZE));
                }
            }
        } else {
            if (div.style.left === `0px`) {
                fromLeft = !fromLeft;
            } else {
                squareDistance--;
                if (squareSize > MIN_SQUARE_SIZE) {
                    squareSize -= ((MAX_SQUARE_SIZE - MIN_SQUARE_SIZE) / (window.innerWidth - MAX_SQUARE_SIZE));
                }
            }
        }
        distanceForChangeColor++;
        div.style.left = `${squareDistance}px`;
        div.style.width = `${squareSize.toFixed()}px`;
        div.style.height = `${squareSize.toFixed()}px`;
    }
}
moveSquare();