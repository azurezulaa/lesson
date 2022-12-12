// simple array - 2

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log("Array - аас эхний 3 компанийг хайчилж ав");
let first3 = itCompanies.slice(0,3);
console.log(first3);

console.log("Array - аас сүүлийн 3 компанийг хайчилж ав");
let last3 = itCompanies.slice(-3);
console.log(last3);

console.log("Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав");
for(let i = 0; i < itCompanies.length; i++){
            if(itCompanies[i] === "Oracle"){
                console.log("index:" + i, itCompanies[i])
            }
}

console.log("Сүүлийн мэдээллийн технологийн компанийг array - аас хас");
itCompanies.pop()
console.log(itCompanies);

console.log("Эхний мэдээллийн технологийн компанийг array - аас хас");
itCompanies.shift()
console.log(itCompanies);
