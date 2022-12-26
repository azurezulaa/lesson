let numbersBtn = document.querySelectorAll(".number");
let screen = document.getElementById("screen");
let operatorsBtn = document.querySelectorAll("operator");
let ac = document.getElementById("delete");
let equal = document.getElementById("equal");
let firstNum = null;
let secondNum = null;
let uildel = null;
let result = "";

const mul = (a, b)=>{
    return a * b;
}
const add = (a, b)=>{
    return a + b;
}
const div = (a, b)=> {
    return a / b;
}
const sub = (a, b)=>{
    return a - b;
}
const clear=(e)=>{
    screen.textContent = "";
}
numbersBtn.forEach((number) => {
    number.addEventListener("click",(e)=>{
        screen.textContent += e.target.textContent;
    })
});
operatorsBtn.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        uildel = e.target.textContent;
        firstNum = screen.textContent;
        
    })
})

ac.addEventListener("click", clear);



