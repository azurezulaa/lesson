
//simple function assignment

function name(){
    console.log("Munkhzul");
}
name();

function ner(firstname, lastname){
    return lastname + " ovogtoi " + firstname + ".";
}
console.log(ner("Munkhzul","Bayarkhuu"));

function sum(a, b){
    return a + b;
}
console.log(sum(4, 6));

function tegshUnTalbai(a, b){
    return a * b;
}
console.log("6x9 hemjeetei t/u-n talbai: " + tegshUnTalbai(6,9));

function tegshUnPeri(a, b){
    return (a + b) * 2;
}
console.log("6x9 hemjeetei t/u-n perimeter: " + tegshUnPeri(6,9));

//tegsh too, sondgoi too ologch

function tegshToo(a,b){
    let arrayTegsh = [];
    for(let i = a; i <= b; i++){
        if(i % 2 === 0){
            arrayTegsh.push(i);
        }
    }
    return arrayTegsh;
}
console.log(tegshToo(10, 20));
function sondgoiToo(a,b){
    let arraySondgoi = [];
    for(let i = a; i <= b; i++){
        if(i % 2 !== 0){
            arraySondgoi.push(i);
        }
    }
    return arraySondgoi;
}
console.log(sondgoiToo(10, 20));

//functions zohioh

//1
function max (a, b){
    let max;
    if(a > b){
        max = a;
    } else if (a < b){
        max = b;
    } else {
        max = "tentsuu too";
    }
    return max;
}
console.log(max(41, 8));
//2
let olonlog1 = [1, 3, 4, 6, 11];
let olonlog2 = [23, 45, 6, 8, 76, 10];
function searchNumber(array, num){
    for(let i = 0; i < array.length; i++){
        if(array[i] === num){
            return array + " array-n index " + i;
        } 
    }
    return -1;
}
console.log(searchNumber(olonlog1, 6));
console.log(searchNumber(olonlog2, 6));
//3
let olonlog3 = ["h", "a", "m", "l", "e"];
let olonlog4 = ["u", "i", "p", "q", "a"];
function searchSym(array,sym){
    for(let i = 0; i < array.length; i++){
        if(array[i] === sym){
            return array + " array-n index " + i;
        } 
    }
    return -1;
}
console.log(searchSym(olonlog3, "a"));
console.log(searchSym(olonlog4, "a"));
//4
function random(a, b){
   return (Math.round(Math.random() * (b - a))) + a;
}
console.log(random(2, 4));
//5
function middle(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let mid = sum / array.length;
    return mid;
}
console.log(middle(olonlog1));
//6
function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sum(olonlog1));
//7
function isPrime(num){
    let result;
    let anhniiToo = true;
    if(num < 2){
        result = "anhnii too bish";
    } else if (num === 2){
        result = "anhnii too mun";
    } else {
        for(let i = 2; i < num; i++){
            if(num%i === 0){
                anhniiToo = false;
                break;
            }
        }
        if(anhniiToo){
            result = "anhnii too mun";
        } else {
            result = "anhnii too bish";
        }
    }
    return result;
}
console.log(isPrime(5));
//8
function upperCase(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}
console.log(upperCase(olonlog3));
//9
function lowerCase(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toLowerCase();
    }
    return array;
}
console.log(lowerCase(olonlog3));

//tip

let price = [3000, 27500, 100000];
function nemegdel(arr){
    let une = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 30000 || arr[i] < 5000){
            une.push(arr[i] * 0.2);
        } else {
            une.push(arr[i] * 0.15);
        }
    
    }
    return une;
}
function total(arr){
    let niit = 0;
    let une = nemegdel(arr);
    for( let i = 0; i < arr.length; i++){
        niit += arr[i] + une[i];
    }
    return niit;
}
function mid(arr){
    let middle = total(arr)/arr.length;
    return middle;
}
console.log("hoolnii dundaj une: " + mid(price));
console.log("nemegdel: " + nemegdel(price));
console.log("niit tulbur: " + total(price));

//array sorter function

let array1 = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
let array2 = [...array1];
function arraySorter(arr){
    let sort = [];
    let i = 0;
    while(i < arr.length){
        let min = arr[0];
        for(let j = 0; j < arr.length; j++){
                if(arr[j] < min){
                min = arr[j];
                } 
             }
         index = arr.indexOf(min);
         sort.push(min);
         arr.splice(index, 1);
    }
    return sort;
}
console.log(arraySorter(array1));
array2.sort(function(a, b){
    if(a > b){
        return 1;
    } else return -1;
});
console.log(array2);
    












