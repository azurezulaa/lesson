//hoyr massive-n urjwer

let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let length;
if(arr1.length >= arr2.length){
    length = arr1.length;
} else {
    length = arr2.length;
}
let array1 = [];
for (let i = 0; i < length; i++){
    let multi = arr1[i] ? arr1[i] : 1  * arr2[i] ? arr2[i] : 1;
    array1.push(i);
    array1[i] = multi;
}
console.log(array1);