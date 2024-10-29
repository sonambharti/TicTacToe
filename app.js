let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn"); 
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// We will have 2 player: playerX, playerO
let playerX = "X";
let playerO = "O";
let turn = playerX;
let turnO = true;

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

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


// Function to check if a player has won
const showWinner = (winner) => {
    console.log(`winner is ${winner}`)
    msg.textContent = `Congratulations🎉🎊, Player ${winner} wins!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};



const checkForWin = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                if (pos1val === playerX) {
                    // alert("Player X wins!");
                    showWinner(pos1val);
                } else if (pos1val === playerO) {
                    // alert("Player O wins!");
                    showWinner(pos1val)
                }
                gameOver = true;
            }
        }
        if(gameOver){
             
            
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        
        // if (turnO) {
        //     // playerO
        //     box.textContent = "O";
        //     turnO = false;
        // } else {
        //     // playerX
        //     box.textContent = "X";
        //     turnO = true;
        // }
        // box.disabled = true;
        // checkForWin();
        
        if (box.textContent === "") {
            console.log("Button clicked");
            box.textContent = turn;
            box.disabled = true;
            checkForWin();
            turn = turn === playerX ? playerO : playerX;   
        }


        });
});


resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        // turnO = true;
        box.disabled = false;
    });
    
    turn = playerX;
    gameOver = false;
    
});

newGamebtn.addEventListener("click", () =>{
    boxes.forEach((box) => {
        box.textContent = "";
        // turnO = true;
        box.disabled = false;
    });
    turn = playerX;
    gameOver = false;
    msgContainer.classList.add("hide");
})