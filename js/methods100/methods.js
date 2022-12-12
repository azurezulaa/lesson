
//car 

//brandiin ehnii usgeer haih
let input = "a";
let carBrands =[
["Aston Martin Lagonda Ltd", "UK", 2016], 
["Audi", "Germany", 2016], 
["BMW", "Germany", 2016], 
["Chevrolet", "USA", 2016], 
["Dodge", "USA", 2016], 
["Ferrari", "Italy", 2016], 
["Honda", "Japan", 2016], 
["Jaguar", "UK", 2016], 
["Lamborghini", "Italy", 2016]
];
for(let i = 0; i < carBrands.length; i++){
    let x = carBrands[i][0].split('').at(0);
        if( x.toLowerCase() === input){
            console.log("brand: " + carBrands[i][0]);
            console.log("country: " + carBrands[i][1]);
            console.log("year: " + carBrands[i][2]);
        }
}
// uildwerlegdsen ulsaar haih
let country = "USA"
for(let i = 0; i < carBrands.length; i++){
    let x = carBrands[i][1];
        if( x.toUpperCase() === country){
            console.log(carBrands[i][0] + ", " + carBrands[i][1] + ", " + carBrands[i][2]);
        }
}
//ymar ulsiin mashin hed bna
let totalData = carBrands.length;
console.log("Niit mur Data = " + totalData);
let uls = [];
for(let i = 0; i < carBrands.length; i++){
    if(!uls.includes(carBrands[i][1])){
        uls.push(carBrands[i][1]);
    }
}
for(let i = 0; i < uls.length; i++){
    let same = 0;
    for(let j = 0; j < carBrands.length; j++){
        if(uls[i] === carBrands[j][1]){
            same++;
        }
    }
    console.log(uls[i], same);
}

//simple 1

let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ];
console.log(array.sort());//Sort the array using  method
console.log(array.reverse());//Reverse the array using  method
array.shift();//Remove the first IT company from the array
console.log(array);
array.pop();//Remove the middle IT company or companies from the array
console.log(array);
array.splice(2, 1);//Remove the last IT company from the array
console.log(array);
array.splice(0, array.length);//Remove all IT companies
console.log(array);

//shopping cart

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift("Meat");//add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart);
shoppingCart.push("Sugar");//add Sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart);
shoppingCart.splice(-2, 1);//remove 'Honey' if you are allergic to honey
console.log(shoppingCart);
shoppingCart.splice(-2, 1, "Green Tea");//modify Tea to 'Green Tea'
console.log(shoppingCart);

//reverse a number

let input1 = 45361;
let output = Number(String(input1).split('').reverse().join(''));
console.log(output);

//parameterize a string

let str = "This Is Where I Begin";
console.log(str.split(' ').join('-'));

//Oochir

let queueLine = ["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар"];
let egch1 = "egch1";
let egch2 = "egch2";
let index = queueLine.indexOf("Гончигсумлай");
queueLine.splice(index, 0, egch1, egch2);
console.log(queueLine.slice(0, 10));

//palindromic checker

let input2 = "1221";
function palindromic(str){
    if(str.split('').reverse().join('') === str){
        return true;
    } else { 
        return false;
    }
}
console.log(input2 + " gesen utga palindromic mun: " + palindromic(input2));

//array-s todorhoi elementiig ustgah

let array1 = [2, 1, 6, 5, 8, 1];
function remove(arr, a){
    let index = arr.indexOf(a);
    while(index >= 0){
        arr.splice(index, 1);
        index = arr.indexOf(a);
    }
    return arr;
}
console.log(remove(array1, 1));

// registeriin dugaar

let register = "СР96032502";
function getBirthRegion(str){
    let data;
        switch(str[0]){
            case "А":
            data = "Архангай";
            break;
            case "Б":
            data = "Баян-Өлгий";
            break;
            case "В":
            data = "Баянхонгор";
            break;
            case "Г":
            data = "Булган";
            break;
            case "Д":
            data = "Говь-Алтай";
            break;
            case "Е":
            data = "Дорноговь";
            break;
            case "Ж":
            data = "Дорнод";
            break;
            case "З":
            data = "Дундговь";
            break;
            case "И":
            data = "Завхан";
            break;
            case "Й":
            data = "Өвөрхангай";
            break;
            case "К":
            data = "Өмнөговь";
            break;
            case "Л":
            data = "Сүхбаатар";
            break;
            case "М":
            data = "Сэлэнгэ";
            break;
            case "Н":
            data = "Төв";
            break;
            case "О":
            data = "Увс";
            break;
            case "П":
            data = "Ховд";
            break;
            case "Р":
            data = "Хөвсгөл";
            break;
            case "С":
            data = "Хэнтий";
            break;
            case "Т":
            data = "Дархан-Уул";
            break;
            case "Ф":
            data = "Орхон";
            break;
            case "Х":
            data = "Говьсүмбэр";
            break;
            case "У":
            data = "Улаанбаатар";
            break;
            case "Ц":
            data = "Улаанбаатар";
            break;
        }
        return data;
}
function getGender(str){
    let data;
    if(str[8]%2 === 0){
        data = "эмэгтэй";
    } else {
        data = "эрэгтэй";
    }
    return data;
}
function getBirthDay(str){
    let birthDay;
    if(Number(str.slice(4,6)) > 20 && Number(str.slice(4,6)) < 33){
        let birthYear = `20` + str.slice(2, 4);
        let birthMonth = Number(str.slice(4,6)) - 20;
        let birthD = str.slice(6,8);
        birthDay = `${birthYear} оны ${birthMonth} сарын ${birthD}`;
    } else if(Number(str.slice(4,6)) < 13){
        let birthYear = `19` + str.slice(2, 4);
        let birthMonth = Number(str.slice(4,6));
        let birthD = str.slice(6,8);
        birthDay = `${birthYear} оны ${birthMonth} сарын ${birthD}`;
    }
    return birthDay;
}
function isCorrectReg(str){
    let data = [];
    if(isNaN(Number(str[0])) && isNaN(Number(str[1]))){
        if(!isNaN(Number(str.substring(2)))){
            if(Number(str.slice(6,8)) <= 31 && Number(str.slice(6,8)) > 0){ 
                if(Number(str.slice(4,6)) > 12 && Number(str.slice(4,6)) < 21){
                    return "Сарын утга буруу";
                } else if(Number(str.slice(4, 6)) > 32 || Number(str.slice(4, 6)) === 0){
                    return "Сарын утга буруу";
                } else {
                    return "Регистерийн дугаар зөв";
                }  
            } else {
            return "Өдрийн утга буруу";
            }
        }else {
        return "Уучлаарай сүүлийн 8 утга тоо байх ёстой";
        }
    } else {
        return "Уучлаарай эхний 2 утга үсэг байх ёстой";
    }
} 
console.log(isCorrectReg(register));
console.log(getBirthRegion(register));
console.log(getGender(register));
console.log(getBirthDay(register));

function getInfo (str){
    let data = [];
    data.birthRegion = getBirthRegion(str);
    data.gender = getGender(str);
    data.birthDay = getBirthDay(str);
    return data;
}
console.log(getInfo(register));

