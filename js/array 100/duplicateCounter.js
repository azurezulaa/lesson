//duplicate counter
let input = 12341;
let too = [];
for(let i = 0; i < String(input).length; i++){
    too.push(String(input)[i]);
}
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