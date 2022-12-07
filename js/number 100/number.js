
//nearest number

let n = 2.49;
console.log(Math.round(n));

//numbers sum
let n1 = 123;
let str = String(n1);
console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));

//random number between

// let too1 = Number(prompt("too1 oruulna uu"));
// let too2 = Number(prompt("too2 oruulna uu"));

// console.log(Math.round(Math.random() * (too2 - too1) + too1));

//general triangle

let a = 4;
let b = 3;
let c = (3**2) + (4**2);

console.log(Math.pow(c, 0.5));

//simple assignment

//1
console.log(Math.round(Math.random() * 100));
//2
let ehniiToo = 50;
let suuliinToo = 55;
console.log(Math.round(Math.random() * (suuliinToo - ehniiToo) + ehniiToo));

// validate phone number

// let mobile = Number(prompt("utasnii dugaaraa oruulna uu"));
let mobile = Number("9fg");
console.log(isNaN(mobile));
if (mobile > 0){
    let mobileMon = `+${mobile}`;
    if(mobileMon.substring(0, 4) === "+976"){
        if(mobileMon.length === 12){
            console.log("12 orontoi mongol dugaar mun");
        } else {
            console.log("mongol dugaariin oron buruu");
        }
    } else {
        console.log("ulsiin dugaar buruu baina");
    }
} else {
    console.log("zuwhun dugaar oruulna uu");
}
//Register number

let register = prompt("registeriin dugaaraa oruulna uu");
if(register.length === 10){
    if(isNaN(Number(register[0])) && isNaN(Number(register[1]))){
        if(!isNaN(Number(register.substring(2)))){
            console.log("registriin dugaar zuw");
        } else {
            console.log("registriin dugaar toon utga buruu");
        }
    } else {
        console.log("registriin dugaariin usgen utga buruu");
    }
} else { 
    console.log("registriin dugaariin oron buruu");
}






