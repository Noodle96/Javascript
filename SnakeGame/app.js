const playBoard = document.querySelector('.play-board');
let foodX, foodY, snakeX=10, snakeY=5;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const changeRandomFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const changeDirection = (e) => {
    // console.log(e);
    // change velocity value based on key press
    if(e.key === 'ArrowUp'){
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === 'ArrowDown'){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === 'ArrowLeft'){
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === 'ArrowRight'){
        velocityX = 1;
        velocityY = 0;
    }
}

const initGame = () => {
    console.log('initX:', snakeX, ",",snakeY);
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
    //Checking if the snake hit the food
    if(snakeX === foodX && snakeY == foodY){
        changeRandomFoodPosition();
        //pushing food position to snake body array
        snakeBody.push([foodX,foodY]);
    }
    //shifting forward the values of the elements in the snake body by one
    console.log('entrando for');
    for(let i = snakeBody.length -1; i > 0 ; i--){
        snakeBody[i] = snakeBody[i-1];
        console.log(i,"=>",snakeBody[i]);
    }

    //setting first element of snake body to current snake position 
    snakeBody[0] = [snakeX,snakeY];
    console.log('snakebody 0');
    console.log(0,"=>",snakeBody[0]);

    //Updating the snake'head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        //adding a div for each part of the snake'body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;    
    }
    playBoard.innerHTML = htmlMarkup;
}
changeRandomFoodPosition();
setInterval(initGame, 1000);
document.addEventListener('keydown',changeDirection);
