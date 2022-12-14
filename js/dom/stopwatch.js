
let body = document.getElementsByTagName("body")[0];
body.style.marginLeft = '40%'
body.style.marginTop = "400px"
body.style.fontFamily = "Audiowide";
const watch = () => {
    let p = document.getElementsByTagName("p")[0];
    let now = new Date();
    let minutes = now.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    let doli = Math.floor(now.getMilliseconds()/10);
    if(doli < 10){
        doli = "0" + doli;
    }
    p.textContent = `${minutes}:${seconds}:${doli}`;
    p.style.fontSize = "70px";
}
setInterval(watch, 10);

