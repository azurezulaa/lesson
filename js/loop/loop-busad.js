
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

//number digits

let input = 768587; //let input = Number(prompt("too oruulna uu"));
let oron = 0;
while (input !== 0){
    input = Math.floor(input/10)
    oron++;
}
console.log(oron);

//Urwuu Too

let ugugdsunTooN = 1234567890;
urwuuTooN = 0;
while (ugugdsunTooN !== 0){
    unit = ugugdsunTooN % 10;
    urwuuTooN = urwuuTooN * 10 + unit;
    ugugdsunTooN = Math.floor(ugugdsunTooN/10);
}
console.log(urwuuTooN);

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

//tsifr hurtel

let output = "";
for(let i = 0; i < 4; i++){
    output += " " + i
}
console.log(output);

for(let i = 5; i <= 9; i++){
    console.log(i);
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

//fibonacci

let n2 = 100;
let output2 = "";
let a = 0;
let b = 1;
let c = 1;
while(c <= n2){
    output2 += " " + c;
    c = a + b;
    a = b;
    b = c;
    
}
console.log(output2)

//palindromic-number

let input3 = 110;
let y = input3;
let rev = 0;
while(y !== 0){
    x = y % 10;
    rev = rev * 10 + x;
    y = Math.floor(y/10);
}
if(rev === input3){
    console.log(input3 + " bol palindromic too mun");
} else {
    console.log(input3 + " bol palindromic too bish");
}

// square

let nToo = 5;

for(let i = 1; i <= nToo; i++){
    let text = "";
    for(let j = 1; j <= nToo; j++){
        if(i === 1){
            text += "*";
        } else if(j === 1 || j === nToo){
            text += "*";
        } else if(i === nToo){
            text += "*";
        } else {
            text += " ";
        }
    }
    console.log(text);
}

//pyramid




