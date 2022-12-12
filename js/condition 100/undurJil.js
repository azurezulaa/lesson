//undur jiliig olno uu

let undurJil = 2024;
console.log(undurJil);
if(undurJil%400 === 0){
    undurJil = "mun";
} else if (undurJil%100 === 0){
    undurJil = "bish";
} else if (undurJil%4 === 0){
    undurJil = "mun";
} else {
    undurJil = "bish";
}
console.log(undurJil);