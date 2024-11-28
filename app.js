let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");

let turn_0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// click box 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innerText = "XN"
    });
});