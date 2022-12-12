// simple array - 1

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log("console.log() ашиглан array хэвлэх");
console.log(itCompanies);

console.log("Array дахь компаниудын length хэвлэх");
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].length);
}

console.log("Эхний компанийг хэвлэх");
console.log(itCompanies[0]);

console.log("Дунд компанийг хэвлэх");
if(itCompanies.length%2 === 0){
    console.log(itCompanies[itCompanies.length/2 - 1], itCompanies[itCompanies.length/2]);
} else {
    console.log(itCompanies[Math.floor(itCompanies.length/2)]);
}

console.log("Сүүлийн компанийг хэвлэх");
console.log(itCompanies[itCompanies.length-1]);

console.log("Компани бүрийг хэвлэх");
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}

console.log("Компанийн нэр тус бүрийг том үсгээр сольж хэвлэж гарга")
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase());
}

console.log("Array - г өгүүлбэр болгон хэвлэ");
console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд`);
