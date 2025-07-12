let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

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

    checkWinner();
   });
});


const checkWinner = () => {
    for(let pattern of winningPatterns) {
            let posOne = boxes[pattern[0]].innerText; 
            let posTwo = boxes[pattern[1]].innerText; 
            let posThree = boxes[pattern[2]].innerText;
        
        if(posOne != "" && posTwo != "" && posThree != "") {
            if(posOne === posTwo && posTwo === posThree){
                console.log("winner", posOne);
                showWinner(posOne);
            
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");

}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

