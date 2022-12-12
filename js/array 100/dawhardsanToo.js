//ugugdsun massive dah dawhardsan utga

let input = [4, 2, 34, 4, 1, 12, 1, 4];
console.log(input);
let output = [];
for (let i = 0; i < input.length; i++){
    for (let j = i + 1; j < input.length; j++){
        if(input[i] === input[j]){
            if(!output.includes(input[i])){
                output.push(input[i]);
            }
        }
    }
}
console.log("dawhardsan too: " + output);