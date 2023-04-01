const playBoard = document.querySelector('.play-board');
let foodX, foodY, snakeX=10, snakeY=5;
const changeRandomFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}
const initGame = () => {
    
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div>`;
    //Updating the snake'head position based on the current velocity
    
    htmlMarkup += `<div class="head" style="grid-area: ${snakeX}/${snakeY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeRandomFoodPosition();
initGame();
