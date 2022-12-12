//array of numbers

console.log("arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11");
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumbers);

console.log(" Array доторх тоонуудын нийлбэрийг ол");
let sum = 0;
let min = arrayOfNumbers[0];
let max = 0;
for(let i = 0; i < arrayOfNumbers.length; i++){
    if(max < arrayOfNumbers[i]){
        max = arrayOfNumbers[i];
    }
    if(min > arrayOfNumbers[i]){
        min = arrayOfNumbers[i];

    }
    sum += arrayOfNumbers[i]
}
console.log(sum);

console.log("Хамгийн их тоог ол.");
console.log(max);

console.log("Хамгийн бага тоог ол.");
console.log(min);

console.log("Array - ийн төгсгөлд дурын 1 тоог нэм.");
arrayOfNumbers.push(8);
console.log(arrayOfNumbers);

console.log("Array - ийн эхэнд дурын 1 тоог нэм.");
arrayOfNumbers.unshift(8);
console.log(arrayOfNumbers);