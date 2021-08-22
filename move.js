import { snakeBody, body, gameBoard } from "./body.js";
import { check_eat, food } from "./food.js";
import { checkDead } from "./game over.js";

let dir_up = false;
let dir_down = false;
let dir_left = false;
let dir_right = true;

export function move() {
    setInterval(update, 250)
    setInterval(body,250)
}

function update() {
    gameBoard.innerHTML = "";
    food();
    snakeMoveUp();
    snakeMoveDown();
    snakeMoveLeft();
    snakeMoveRight();
    check_eat();
    checkDead();
    
}
function snakeMoveUp() {
    if (dir_up == true){
        let newHead_X = snakeBody[snakeBody.length-1].x;
        let newHead_Y = snakeBody[snakeBody.length-1].y - 1;
        if (newHead_Y == 0) {
            newHead_Y = 21;
        }
        snakeBody.push({x:newHead_X, y:newHead_Y})
    }

}
function snakeMoveDown() {
    if (dir_down == true){
        let newHead_X = snakeBody[snakeBody.length-1].x;
        let newHead_Y = snakeBody[snakeBody.length-1].y + 1;
        if (newHead_Y == 22) {
            newHead_Y = 1;
        }
        snakeBody.push({x:newHead_X, y:newHead_Y})

    }

}
function snakeMoveLeft() {
    if (dir_left == true){
        let newHead_X = snakeBody[snakeBody.length-1].x - 1;
        let newHead_Y = snakeBody[snakeBody.length-1].y;
        if (newHead_X == 0) {
            newHead_X = 21;
        }
        snakeBody.push({x:newHead_X, y:newHead_Y})
    }
}
function snakeMoveRight() {
    if (dir_right == true) {
        let newHead_X = snakeBody[snakeBody.length-1].x + 1;
        let newHead_Y = snakeBody[snakeBody.length-1].y;
        if (newHead_X == 22) {
            newHead_X = 1;
        }
        snakeBody.push({x:newHead_X, y:newHead_Y})
    }

}






window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp" :
            if (dir_down == false){
                dir_up = true;
                dir_down = false;
                dir_left = false;
                dir_right = false;
            }
            break;
        case "ArrowDown" :
            if (dir_up == false) {
                dir_up = false;
                dir_down = true;
                dir_left = false;
                dir_right = false;
            }
            break;
        case "ArrowLeft" :
            if (dir_right == false){
                dir_up = false;
                dir_down = false;
                dir_left = true;
                dir_right = false;
            }
            break;
        case "ArrowRight" :
            if (dir_left == false) {
                dir_up = false;
                dir_down = false;
                dir_left = false;
                dir_right = true;
            }
            
    }
})
