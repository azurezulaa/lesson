//easy

//1
console.log("-----------------------------task1");
let n = 88;
console.log("Дүн: " + n);

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
console.log("Үнэлгээ: " + unelgee);

//2
console.log("-----------------------------task2");
let udur;
let sar = 9;
console.log(sar + "-р сар")
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
console.log(udur + " өдөртэй");

//3
console.log("-----------------------------task3");
let ugugdsnToo = 14;
console.log("өгөгдсөн тоо " + ugugdsnToo + " нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу");
if (ugugdsnToo%3 === 0 && ugugdsnToo%7 === 0){
    ugugdsnToo = "3, 7-ын үржвэр";
} else if(ugugdsnToo%7 === 0){
    ugugdsnToo = "7-ын үржвэр";
} else if(ugugdsnToo%3 === 0){
    ugugdsnToo = "3-ын үржвэр";
} else{
    ugugdsnToo = "3, 7-ын үржвэр биш";
}
    
console.log(ugugdsnToo);

//4
console.log("-----------------------------task4");
let n1 = 5;
console.log(n1 + " нь эерэг эсвэл сөрөг?");
if(n1<0){
    n1 = "negative";
} else {
    n1 = "positive";
}
console.log(n1);

//5
console.log("-----------------------------task5");
let weight = 50;
console.log("Жин: " + weight + " кг");
let height = 163;
console.log("Өндөр: " + height + " см");
let BMI = weight/((height/100)**2);

if (BMI<18.5){
    BMI = "Жингийн дутагдалтайi";
} else if(BMI<25){
    BMI = "Хэвийн жинтэй";
} else if(BMI<30){
    BMI = "Илүүдэл жинтэй";
} else {
    BMI = "Хэт таргаллалттай";
}
console.log(BMI);

//6
console.log("-----------------------------task6");
let too = 4;
console.log(too);

if (too%2 === 0){ 
    too = "Тэгш тоо";
} else {
    too = "Сондгой тоо";
}
console.log(too);

//7
console.log("-----------------------------task7");
let n2 = 5;
console.log(n2);
if(n2<0){
    n2 = "Сөрөг тоо";
} else {
    n2 = "Эерэг тоо";
}
console.log(n2);

//8
console.log("-----------------------------1996task8");
let yearOfBirth;
yearOfBirth = Number(prompt("Төрсөн оноо оруулна уу"));
console.log("Төрсөн он 200" + yearOfBirth);
let old = 2022 - yearOfBirth;
if (0 <= old && old <= 1){
    old = "Infant";
} else if(1 < old && old <= 3){
    old = "Toddler";
} else if(3 < old && old <= 5){
    old = "Preschool";
} else if(5 < old && old <= 12){
    old = "Gradeschooler";
} else if(12 < old && old <= 18){
    old = "Teen";
} else if(18 < old && old <= 21){
    old = "Young adult";
} else if(21 < old){
    old = "Adult";
};

console.log(old);

