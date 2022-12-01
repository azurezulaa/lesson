
//Loop

//1
let count = 1;
while (count <= 10){
    console.log(count);
    count++;
}
//2
let countS = 1;
while (countS <= 10){
    if(countS%2 !== 0){
        console.log(countS);
    }
    countS++;
}
//3
let countT = 1;
while (countT <= 10){
    if(countT%2 === 0){
        console.log(countT);
    }
    countT++;
}
//4
let teg = 0;
let niilber = 0;
while (teg <= 100){ 
    niilber = teg + niilber;
    teg++;
}
console.log(niilber);
//5
let n = 1;
let sum = 0;
while (n <= 100){ 
    sum = n + sum;
    console.log(n++);
}
console.log(`niilber = ${sum}`);
//6
let a = 9;
let isPrime = true;
if(a === 2){
    console.log(`${a} bol anhnii too`)
}else{
    let i = 2;
    while(i < a){
        if(a % i === 0){
            isPrime = false;
            break;
        }
        i++;
    }
    if(isPrime){
        console.log(`${a} bol anhnii too mun`)
    } else {
        console.log(`${a} bol anhnii too bish`)
    }
}
//7
let ugugdul1 = 100;
let  anhniiToo= true;
let y = 2;
while(y <= ugugdul1){
  
    if(y === 2){
        console.log(`${y} bol anhnii too mun`);
    }else{
        let i = 2;
        while(i < y){
            if(y % i === 0){
                anhniiToo = false;
                break;
            }
            i++;
        }
        if(anhniiToo){
            console.log(`${y} bol anhnii too mun`);
        }else{
            anhniiToo = true;
        }
    }
    y++;
}
//8
let ugugdsuntoo = 5;
let ii = 2;
let multi = 1;
while (ii <= ugugdsuntoo){ 
    multi = ii * multi;
    ii++;
}
console.log(multi);
//9
let ugugdsunToo = "02498";
let oron = ugugdsunToo.length;
let i2 = 0;
let start = 0;
while (i2 < oron){
    start = Number(ugugdsunToo[i2]) + start;
    i2++;
}
console.log(start);
//10,11
let ugugdsunToo1 = 10;
let startSondgoi = 0;
let startTegsh = 0;
let i3 = 1;
let i4 = 0;

while(i3 <= ugugdsunToo1){
    if(i3%2 !== 0){
        startSondgoi = startSondgoi + i3;
    }
    i3++;
}
console.log(startSondgoi);

while(i4 <= ugugdsunToo1){
    if(i4%2 === 0){
        startTegsh = startTegsh + i4;
    }
    i4++;
}
console.log(startTegsh);
//12
let ugugdsunToo2 = "6458674";
// console.log(ugugdsunToo2.substring(6,7))
console.log(`${ugugdsunToo2.substring(2, 5)}${ugugdsunToo2.substring(0, 2)}`)



