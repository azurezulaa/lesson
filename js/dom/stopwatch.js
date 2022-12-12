
let body = document.getElementsByTagName("body")[0];
console.log(body);
let newDiv = document.createElement("div");
body.appendChild(newDiv);
console.log(body);
let now = new Date();
console.log(now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());
