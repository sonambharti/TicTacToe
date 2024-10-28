let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn"); 

// We will have 2 player: playerX, playerO
let playerX = "X";
let playerO = "O";

let turn = playerX;

let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        if (box.textContent === "") {
            console.log("Button clicked");
            box.textContent = turn;
            checkForWin();
            turn = turn === playerX ? playerO : playerX;   
        }
        });
});

resetbtn.addEventListener("click", () => {
    
})