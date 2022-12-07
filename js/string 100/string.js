
//escape sequences

console.log(`Hello I am \"Name here"\. \nI am \'Age here'\ years old. \n\tThis is the new line with tab and some \\backslashes\\`);

//simple assignment

//1
let ovog = "bayarkhuu";
let ner = "munkhzul";
let a = ovog.length;
let b = ner.length;
let haritsaa = a/b;
console.log(haritsaa);
//2
let jijig = "hello world";
console.log(jijig.toUpperCase());
//3
let tom = "HELLO WORLD";
console.log(tom.toLowerCase());
//4
let a1 = "Pinecone academy-н";
let b1 = " leap хөтөлбөрт тавтай морилно уу";
let text = a1.concat(b1);
console.log(text)
//5
let firstname = "Bold";
let lastname = "Bat";
let country = "Hentii";
let city = "Chingis";
let age = 30;
let job = "jolooch";
console.log(`Namaig ${lastname}iin ${firstname} gedeg. Bi ${age} nastai, ${job} mergejiltei. Bi ${country} aimgiin ${city} hotod amidardag.`);
//6
let number = "12345";
console.log(`${number.substring(0, 5)}`);
console.log(`${number.substring(1, 5)}${number[0]}`);
console.log(`${number.substring(2, 5)}${number.substring(0, 2)}`);
console.log(`${number.substring(3, 5)}${number.substring(0, 3)}`);
console.log(`${number[4]}${number.substring(0, 4)}`);


//ognoo hewleh, operatoriig oloh

//1

let on = prompt("onoo oruulna uu");
let sar = prompt("saraa oruulna uu");
let udur = prompt("udruu oruulna uu");
if(sar.length < 2){
    sar = `0${sar}`;
}
if(udur.length < 2){
    udur = `0${udur}`;
}
console.log(`${on}-${sar}-${udur}`);

//2

let dugaar = prompt("dugaaraa oruulna uu");
if(dugaar[0] == 9 && (dugaar[1] == 5 || dugaar[1] == 4 || dugaar[1] == 9)){
    dugaar = "mobicom";
} else if(dugaar[0] == 9 && (dugaar[1] == 1 || dugaar[1] == 6 || dugaar[1] == 0)){
    dugaar = "skytel";
} else if(dugaar[0] == 8 && (dugaar[1] == 0 || dugaar[1] == 8 || dugaar[1] == 6)){
    dugaar = "unitel";
} else if(dugaar[0] == 9 && (dugaar[1] == 8 || dugaar[1] == 3)){
    dugaar = "g-mobile";
} else {
    dugaar = "buruu dugaar";
}
console.log(dugaar);