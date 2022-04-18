import { onSnake, growSnake} from "./snake.js"
import { randomGridPosition} from "./grid.js"

const growthRate = 3;
let apple = getRandomFoodPosition();
export function update(){
    if(onSnake(apple)){
        growSnake(growthRate);
        apple = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = apple.y;
    appleElement.style.gridColumnStart = apple.x;
    appleElement.classList.add("apple");
    gameBoard.appendChild(appleElement);
}

function getRandomFoodPosition(){
    let newApplePosition;
    while (newApplePosition == null || onSnake(newApplePosition)){
        newApplePosition = randomGridPosition();
    }
    return newApplePosition;
}