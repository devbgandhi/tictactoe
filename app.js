let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;//x or o
const winningPatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8],
    [0,4,8], 
    [2,4,6]
];

boxes.forEach((box) => {
   box.addEventListener("click", () =>{
    if(turnO === true){ //player 0 turn
        box.innerText = "O";
        turnO = false;
    } else { // player X turn
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
   }) 
})

