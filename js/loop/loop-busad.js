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

let a1 = 10; // let a1 = Number(prompt("too oruulna uu"));
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

//dawhar dawtalt

let inp = 5;
let array = [];
for (let i = 1; i <= inp; i++){
    array.push(i)
    console.log(array);
}
for (let i = inp; i >= 1; i--){
    console.log(array);
    array.pop(i)
}
//Guess the number

// let targetNumber = Math.floor(Math.random() * 10) + 1;
// console.log(targetNumber);
// let erh = 3;
// while(erh !== 0){
//     let randomNumber = Number(prompt("1-10 hoorond toog taanyy"));
//     if(randomNumber === targetNumber){
//         alert("Bayar hurgey");
//         break;
//     } else if(randomNumber < targetNumber){
//         alert("tanii oruulsan too baga bna");
//     } else {
//         alert("tanii oruulsan too ih bna");
//     }
//     erh--;
//     if (erh===0){
//         alert("uuchlaarai ta taasangui");
//     }
// }

//number digits

let input = 768587; //let input = Number(prompt("too oruulna uu"));
let oron = 0;
while (input !== 0){
    input = Math.floor(input/10)
    oron++;
}
console.log(oron);

//isn't it prime number?

let n = 11; //let n = Number(prompt("100s baga anhnii too oruulna uu"));
let anhniiToo = true;
if (n <= 1){
    console.log("anhnii too bish");
} else if(n === 2){
    console.log("anhnii too mun");
} else {
    let i = 2;
    while(i < n){
        if(n % i === 0){
            anhniiToo = false;
        }
        break;//if dotor eswel while dotor baihiig asuuh
    }
    i++;
    if(anhniiToo){
        console.log("anhnii too mun");
    } else {
        console.log("anhnii too bish");
    }

}
//factorial

let facToo = 4; //let facToo = Number(prompt("toonii factorial bodoh"));
let index = 1;
let factorial = 1;
while(index <= facToo){
    factorial = factorial * index;
    index++;
}
console.log(factorial);

//convert string

let input1 = "Hello World"
let convert = "";

for( let i = 0; i < input1.length; i++){
    let letters = input1[i];
    if(letters === letters.toUpperCase()){
        convert = convert + letters.toLowerCase();
    } else {
        convert = convert + letters.toUpperCase();
    }
}
console.log(convert);
//pyramid

let od = "*";
let i = 10;
let text = "";
while(i !== 0){
    text = text + od;
    i--;
}
console.log(typeof(convert) == "String");



