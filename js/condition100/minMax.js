//ugugdsun toonuudiin hamgiin ih bolon baga utgiig ol

console.log("3-н хувьсагч зарлана уу.");
let aa = 4;
let bb = 5;
let cc = 1;
let dd = 1;
console.log("aa: " + aa);
console.log("bb: " + bb);
console.log("cc: " + cc);
console.log("dd: " + dd);


let hamgiinIhToo;

if (aa>bb){
    hamgiinIhToo = aa;
} else {
    hamgiinIhToo = bb;
}

if (hamgiinIhToo>cc){
    hamgiinIhToo = hamgiinIhToo;
} else {
    hamgiinIhToo = cc;
}
if (hamgiinIhToo>dd){
    hamgiinIhToo = hamgiinIhToo;
} else {
    hamgiinIhToo = dd;
}
console.log("хамгийн их утга.");
 console.log(hamgiinIhToo);

 let hamgiinBagaToo;

 if (aa<bb){
    hamgiinBagaToo = aa;
} else {
    hamgiinBagaToo = bb;
}

if (hamgiinBagaToo<cc){
    hamgiinBagaToo = hamgiinIhToo;
} else {
    hamgiinBagaToo = cc;
}
if (hamgiinBagaToo<dd){
    hamgiinBagaToo = hamgiinIhToo;
} else {
    hamgiinBagaToo = dd;
}
console.log("хамгийн бага утга.");
 console.log(hamgiinBagaToo);