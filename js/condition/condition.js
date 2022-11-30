//huwisagch

let a = 85;
let b = 75;
let c = 96;
let d = 69;
let hariu = 0;
if (a > 80){
    hariu = hariu + a;
}
if (b > 80){
    hariu = hariu + b;
}
if(c > 80){
    hariu = hariu + c;
}
if(d > 80){
    hariu = hariu + d;
}
console.log(hariu);

// assignment-1

let i = 4 > 3; //true
let iii = 4 > 3; // false
let ii = 4 >= 3; // true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(v);


//undur jiliig olno uu

let undurJil = 2023;

if(undurJil%400 === 0){
    undurJil = "mun";
} else if (undurJil%100 === 0){
    undurJil = "bish"
} else if (undurJil%4 === 0){
    undurJil = "mun"
} else {
    undurJil = "bish"
}
console.log(undurJil)

//ugugdsun toonuudiin hamgiin ih bolon baga utgiig ol

let aa = 4;
let bb = 5;
let cc = 1;
let dd = 1;

let hamgiinIhToo;

if (aa>bb){
    hamgiinIhToo = aa;
} else {
    hamgiinIhToo = bb;
}

if (hamgiinIhToo>cc){
    hamgiinIhToo = hamgiinIhToo;
} else {
    hamgiinIhToo = cc;
}
if (hamgiinIhToo>dd){
    hamgiinIhToo = hamgiinIhToo;
} else {
    hamgiinIhToo = dd;
}
 console.log(hamgiinIhToo);

 let hamgiinBagaToo;

 if (aa<bb){
    hamgiinBagaToo = aa;
} else {
    hamgiinBagaToo = bb;
}

if (hamgiinBagaToo<cc){
    hamgiinBagaToo = hamgiinIhToo;
} else {
    hamgiinBagaToo = cc;
}
if (hamgiinBagaToo<dd){
    hamgiinBagaToo = hamgiinIhToo;
} else {
    hamgiinBagaToo = dd;
}
 console.log(hamgiinBagaToo);

//4 toonii baga

let aaa = 120;
let bbb = 33;
let ccc = 10;
let ddd = 12;

let bagaToo;

if (aaa<bbb){
    bagaToo = aaa;
} else {
    bagaToo = bbb;
} 
if (bagaToo<ccc){
    bagaToo = bagaToo;
} else {
    bagaToo = ccc;
} 
if (bagaToo<ddd){
    bagaToo = bagaToo;
} else {
    bagaToo = ddd;
} 
console.log(bagaToo);

//suragchdiin shalgaltiin dvn

let ner = "BAT";
let onoo = 67;
let unelgee;


if(onoo < 60){
    unelgee = "mash muu";
}
if(60 <= onoo && onoo < 70){
    unelgee = "hangalttai";
}
if(70 <= onoo && onoo < 80){
    unelgee = "dund";
}
if(80 <= onoo && onoo < 90){
    unelgee = "sain";
}
if(90 <= onoo && onoo < 100){
    unelgee = "mash sain";
}

console.log("Ner-" + ner + " Awsan onoo-" + onoo + " Unelgee-" + unelgee )

//easy

//1
let n = 88;

if(n < 60){
    unelgee = "F";
}
if(60 <= n && n < 70){
    unelgee = "D";
}
if(70 <= n && n < 80){
    unelgee = "C";
}
if(80 <= n && n < 90){
    unelgee = "B";
}
if(90 <= n && n < 100){
    unelgee = "A";
}
console.log(unelgee);

//2
let udur;
let sar = 9;
// sar=Number(prompt("Saraa Oruulna uu"));
switch (sar){
    case 1:
        udur = 31;
        break;
    case 2:
        udur = "28 or 29";
        break;
    case 3:
        udur = 31;
        break;
    case 4:
        udur = 30;
        break;
    case 5:
        udur = 31;
        break;
    case 6:
        udur = 30;
        break;
    case 7:
        udur = 31;
        break;
    case 8:
        udur = 31;
        break;
    case 9:
        udur = 30;
        break;
    case 10:
        udur = 31;
        break;
    case 11:
        udur = 30;
        break;
    case 12:
        udur = 31;
        break;
}
console.log(udur);

//3
let ugugdsnToo = 14;

if (ugugdsnToo%3 === 0 && ugugdsnToo%7 === 0){
    ugugdsnToo = "3 bolon 7giin urjwer";
} else if(ugugdsnToo%7 === 0){
    ugugdsnToo = "7giin urjwer";
} else if(ugugdsnToo%3 === 0){
    ugugdsnToo = "3iin urjwer";
} else{
    ugugdsnToo = "3 bolon 7giin urjwer bish"
}
    
console.log(ugugdsnToo)

//4
let n1 = 5;
if(n1<0){
    n1 = "negative"
} else {
    n1 = "positive"
}
console.log(n1)

//5
let weight = 50;
let height = 163;
let BMI = weight/((height/100)**2);

if (BMI<18.5){
    BMI = "Jingiin  dutagdaltai"
} else if(BMI<25){
    BMI = "Hewiin jintei"
} else if(BMI<30){
    BMI = "Iluudel jintei"
} else {
    BMI = "Het targalalttai"
}
console.log(BMI)

//6

let too = 4;

if (too%2 === 0){ 
    too = "tegsh too"
} else {
    too = "sondgoi too"
}
console.log(too)

//7
let n2 = 5;

if(n2<0){
    n2 = "surug too"
} else {
    n2 = "eyreg too"
}
console.log(n2)

//8

let yearOfBirth;
yearOfBirth = Number(prompt("Төрсөн оноо оруулна уу"));
let old = 2022 - yearOfBirth;
if (0 <= old && old <= 1){
    old = "Infant";
} else if(1 < old && old <= 3){
    old = "Toddler";
} else if(3 < old && old <= 5){
    old = "Preschool"
} else if(5 < old && old <= 12){
    old = "Gradeschooler"
} else if(12 < old && old <= 18){
    old = "Teen"
} else if(18 < old && old <= 21){
    old = "Young adult"
} else if(21 < old){
    old = "Adult"
}

console.log(old);

//temtseen

let teamA1 = 96;
let teamA2 = 108;
let teamA3 = 0;

let teamB1 = 96;
let teamB2 = 103;
let teamB3 = 0;

let teamA = (teamA1 + teamA2 + teamA3)/3;
let teamB = (teamB1 + teamB2 + teamB3)/3;

let ylagch;

if(teamA/100 >= 1 || teamB/100 >=1){
    if(teamA > teamB){
        ylagch = "Team A won";
    } else if(teamB > teamA){
        ylagch = "Team B won";
    } else {
        ylagch = "2 bag tentslee";
    }
} else {
    ylagch = " baguud shaardlaga hangasangui ";
}
console.log(ylagch)

//tip

let tulbur = 100000;

// if(tulbur >= 5000 && tulbur <=30000){
//     tulbur = tulbur + (tulbur * 0.15);
// } else {
//     tulbur = tulbur + (tulbur * 0.2);                                                                                                                                                         
// }

tulbur >= 5000 && tulbur <=30000 ? tulbur = tulbur + (tulbur * 0.15) : tulbur = tulbur + (tulbur * 0.2);
console.log(tulbur)









