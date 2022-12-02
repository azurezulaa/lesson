//Urwuu Too

let ugugdsunTooN = 1234567890;
urwuuTooN = 0;
while (ugugdsunTooN !== 0){
    unit = ugugdsunTooN % 10;
    urwuuTooN = urwuuTooN * 10 + unit;
    ugugdsunTooN = Math.floor(ugugdsunTooN/10);
}
console.log(urwuuTooN);

//Toonii niilber

// let a1 = Number(prompt("too oruulna uu"));
let a1 = 10; 
let n1 = 1;
let sum1 = 0;
while (n1 <= a1){ 
    sum1 = n1 + sum1;
    n1++;
}
console.log(`niilber = ${sum1}`);

//Tegsh toog oloh

let countT1 = 1;
while (countT1 <= 100){
    if(countT1%2 === 0){
        console.log(countT1);
    }
    countT1++;
}

//Guess the number

let targetNumber = Math.floor(Math.random() * 10) + 1;
console.log(targetNumber);
let erh = 3;
while(erh !== 0){
    let randomNumber = Number(prompt("1-10 hoorond toog taanyy"));
    if(randomNumber === targetNumber){
        alert("Bayar hurgey");
        break;
    } else if(randomNumber < targetNumber){
        alert("tanii oruulsan too baga bna");
    } else {
        alert("tanii oruulsan too ih bna");
    }
    erh--;
    if (erh===0){
        alert("uuchlaarai ta taasangui");
    }
}

//pyramid

let od = "*";
let i = 10;
let text = "";
while(i !== 0){
    text = text + od;
    




}



