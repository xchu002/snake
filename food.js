import { gameBoard, snakeBody } from "./body.js";

let x = Math.floor(Math.random() * 21 + 1);
let y = Math.floor(Math.random() * 21 + 1);

export function check_eat() {
    
    if (snakeBody[snakeBody.length - 1].x == x && snakeBody[snakeBody.length - 1].y == y) {
        x = parseInt(Math.random() * 21 + 1);
        y = parseInt(Math.random() * 21 + 1);
    }
    else {
        snakeBody.shift();
    }
}


export function food() {


    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = y;
    foodElement.style.gridColumnStart = x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);



}    

function grow() {

}
