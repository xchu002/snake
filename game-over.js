import { snakeBody } from "./body.js";

export function checkDead() {
    console.log("is not dead")
   for (let i = 0; i < snakeBody.length - 1; i++){
       if (snakeBody[snakeBody.length - 1].x ==  snakeBody[i].x && snakeBody[snakeBody.length - 1].y == snakeBody[i].y) {
            alert("You Lose!")
            document.location.reload();
       }
       console.log(snakeBody[i])
   }
}