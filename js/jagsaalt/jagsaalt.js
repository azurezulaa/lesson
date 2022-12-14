const h2 = document.getElementsByTagName("h2");
for(let i = 0; i < h2.length; i++){
    h2[i].style.textAlign = "center";
    h2[i].style.fontSize = "48px";
    h2[i].style.color = "rgb(39, 55, 107)";
    h2[i].style.marginBottom = "0";
}
h2[1].style.borderBottom = "2px solid rgb(39, 55, 107)";
h2[1].style.width = "380px";

const input = document.getElementById("task_top");
input.style.height = "40px";
input.style.backgroundColor = "#F2E5E5";
input.style.fontSize = "16px";
input.style.margin = "0";
input.style.border = "none";
input.style.borderBottom = "2px solid #FD841F";
input.style.width = "300px";
input.style.paddingLeft = "10px";

const btn = document.getElementById("btn");
btn.style.height = "44px";
btn.style.backgroundColor = "#FD841F";
btn.style.fontSize = "10px";
btn.style.color = "white";
btn.style.margin = "0";
btn.style.border = "none";

const flex = document.getElementById("flex");
flex.style.display = "flex";

const con = document.getElementById("container");
con.style.display = "flex";
con.style.justifyContent = "center";
con.style.alignItems = "center";
con.style.flexDirection = "column";

const date = document.getElementById("date");
date.textContent = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay().toString().padStart(2, 0);

const ognoo = document.getElementById("ognoo");
ognoo.style.color = "rgb(39, 55, 107)";

const listdiv = document.getElementById("listdiv");
function taskItem(){
    let text = input.value;
    const cardboard =`
    <div class="card">
        <input type="text" class="cardinput" readonly value="${text}"/>
        <div class="icon">
            <button onclick="edit(this)"><i class= "fas fa-pen"></i></button>
            <button onclick="check(this)"><i class= "fas fa-check"></i></button>
            <button onclick="ustgah(this)"><i class= "fas fa-trash"></i></button>
        </div>
    </div>`;
    if(text === ""){
        alert("Жагсаалтаа оруулна уу!");
    } else {
        listdiv.innerHTML += cardboard;
    }
    const cardstyle = document.getElementsByClassName("card");
    for(let i = 0; i < cardstyle.length; i++){
        cardstyle[i].style.width = "380px";
        cardstyle[i].style.height = "50px";
        cardstyle[i].style.backgroundColor = "#F1F1F1";
        cardstyle[i].style.border = "1px solid #FD841F";
        cardstyle[i].style.display = "flex";
        cardstyle[i].style.justifyContent = "space-between";
        cardstyle[i].style.alignItems = "center";
        cardstyle[i].style.margin = "5px";
        cardstyle[i].style.borderRadius = "5px";
        cardstyle[i].style.paddingLeft = "10px";
        cardstyle[i].style.paddingRight = "10px";
    }
    const inputs = document.getElementsByClassName("cardinput");
    for(let i = 0; i < inputs.length; i++){
        inputs[i].style.backgroundColor = "#F1F1F1";
        inputs[i].style.border = "none";
    }
    const icons = document.getElementsByClassName("icon");
    for(let i = 0; i < icons.length; i++){
        a = icons[i].querySelectorAll("button");
        a[1].style.color = "green";
        a[2].style.color = "red";
    }
    const action = document.getElementsByTagName("button");
    for(let i = 0; i < action.length; i++){
        action[i].style.border = "none";
    }
    
}
document.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        taskItem();
    }
})
btn.addEventListener("click", taskItem);
function check(e){
    let parent = e.parentNode.parentNode;
    const text = parent.querySelector("input");
    text.style.textDecoration = "line-through";
    text.style.color = "grey";
}
function ustgah(e){
    let parent = e.parentNode.parentNode.parentNode;
    let child = e.parentNode.parentNode;
    parent.removeChild(child);


}
function edit(e){
    let parent = e.parentNode.parentNode;
    let edit = parent.querySelector("input");
    edit.removeAttribute("readonly");
}
