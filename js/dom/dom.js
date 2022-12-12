
let btn = document.querySelectorAll(".btn");
let body = document.getElementsByTagName("body")[0];
let divs = document.querySelectorAll(".div");
console.log(btn);
console.log(divs);
for(let i = 0; i < divs.length; i++){
    divs[i].style.width = "100px";
    divs[i].style.height = "100px";
    divs[i].style.display = "inline-block";
} 
function change(){
        for(let i = 0; i < divs.length; i++){
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let color = `rgb(${red},${green},${blue})`;
            console.log(color);
            divs[i].style.backgroundColor = color;
        }   
}
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", change);
}   