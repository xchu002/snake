export let snakeBody = [
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11},
    
];
export let gameBoard = document.querySelector("#game-board");





export function body() {

    snakeBody.forEach(segment =>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snakeBlock");
        gameBoard.appendChild(snakeElement);

    })

}


