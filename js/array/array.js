
// // simple array - 1

// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);

// for (let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i].length);
// }
// console.log(itCompanies[0]);
// if(itCompanies.length%2 === 0){
//     console.log(itCompanies[itCompanies.length/2 - 1], itCompanies[itCompanies.length/2]);
// } else {
//     console.log(itCompanies[Math.floor(itCompanies.length/2)]);
// }
// console.log(itCompanies[itCompanies.length-1]);
// for (let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i]);
//     console.log(itCompanies[i].toUpperCase());
// }
// console.log(`${itCompanies} zereg medeelliin technologiin tomoohon companiud`);

// // simple array - 2

// let first3 = itCompanies.slice(0,3);
// console.log(first3);
// let last3 = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
// console.log(last3);
// for(let i = 0; i < itCompanies.length; i++){
//             if(itCompanies[i] === "Oracle"){
//                 console.log("index:"+i, itCompanies[i])
//             }
// }
// itCompanies.pop()
// console.log(itCompanies);



// //count word

// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
// let x = 0;
// let searchWord = "нүүрс";
// for(let i = 0; i < data.length; i++){
//     if(data[i] === searchWord){
//         x++;
//     }
// }
// console.log(searchWord + " gesen ug " + x + " udaa orson bna");

//duplicate counter

let too = ["2","2","2","3","0"];
console.log(too);
for(let tsifr = 0; tsifr <= 9; tsifr++){
    let count = 0;
    for(let i = 0; i < too.length; i++){
        if(too[i] == tsifr){
            count++;    
        }
        
    }
    console.log(tsifr + ":" + count);
}

//paskaliin gurwaljin

// let n = 5;
// let arr = [];
// for(let i = 0; i <= n; i++){
//     arr.push([]);
//     for (let j = 0; j <= n; j++ ){
//         arr[i].push(0);
//     }
// }
// arr [0][0] = 1;
// for(let i = 1; i <= n; i++){
//     let j=0;
//     for(let j = 1; j <= n; j++){
//         arr[i][j] = arr[i-1][j] + arr[i-1][j-1];
//     }
// }
// console.log(arr)
// let n1 = 5;
// let triangle = [];
// for(let i = 0; i < n1; i++){
//     triangle[i] = new Array(i);
//     for (let j = 0; j < i + 1; j++ ){
//         if(j === 0 || j === i){
//                 triangle[i][j] = 1;
//         } else {
//                 triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//     }
// }
// console.log(triangle);









