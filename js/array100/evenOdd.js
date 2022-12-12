// even and odd

let arrN = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
console.log(arrN);
let tegshToo = 0;
let sondgoiToo = 0;
for (let i = 0; i < arrN.length; i++){
    if(arrN[i]%2 === 0){
        tegshToo++;
    } else {
        sondgoiToo++;
    }
}
console.log("Tegsh too = " + tegshToo);
console.log("Sondgoi too = " + sondgoiToo);