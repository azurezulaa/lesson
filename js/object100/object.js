// accessing objects

let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 23,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 23,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 19,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
// function huis(obj) {
//   let male = 0;
//   let female = 0;
//   let retObj = {};
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].gender === "male") {
//       male++;
//     } else {
//       female++;
//     }
//   }
//   retObj.eregtei = male;
//   retObj.emegtei = female;

//   return retObj;
// }
// console.log(huis(students));

// function dundajNas(obj) {
//   let sum = 0;
//   for (let i = 0; i < obj.length; i++) {
//     sum += obj[i].age;
//   }
//   let mid = sum / obj.length;
//   return mid;
// }
// console.log("dundaj nas - " + dundajNas(students));

// let ovog = ["Bat", "Bold", "Tamir", "Tumur", "Chuluun"];
// for (let i = 0; i < students.length; i++) {
//   students[i].lastname = ovog[i];
// }
// console.log(students);

let sameAge = [];
//simple object

// let nohoi = {};
// console.log(nohoi);
// nohoi.uulder = "banhar";
// nohoi.ner = "bambar";
// nohoi.ungu = "bor";
// nohoi.nas = 2;
// nohoi.hairlamChanar = "bondgor";
// console.log(nohoi);

// console.log("Uulder: " + nohoi.uulder);
// console.log("Ner: " + nohoi.ner);
// console.log("Ungu: " + nohoi.ungu);
// console.log("Hul: " + nohoi.hul);
// console.log("Nas: " + nohoi.nas);
// console.log("Hair tatam chanar: " + nohoi.hairlamChanar);
// //animals
// let animal = prompt("What does the ..... say?");
// let animals = [
//   { type: "dog", sound: "woof" },
//   { type: "cow", sound: "moo" },
//   { type: "cat", sound: "meow" },
// ];
// for (let i = 0; i < animals.length; i++) {
//   if (animal === animals[i].type) {
//     alert(animals[i].sound);
//     break;
//   } else {
//     alert("Uuchlaarai dog, cow, cat -n ali negiig bichne uu");
//     break;
//   }
// }

// //suragchid

// let classmates = [
//   { name: "Гончигсумлай", birthOfYear: 1999, hobby: "морь", single: false },
//   { name: "Bilguun", birthOfYear: 2003, hobby: "game", single: true },
//   { name: "Dulguun", birthOfYear: 2004, hobby: "sags", single: false },
//   { name: "Muugii", birthOfYear: 1985, hobby: "book", single: false },
//   { name: "Tuguldur", birthOfYear: 2000, hobby: "car", single: true },
// ];
// function ageOver20(arr) {
//   let adult = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (2022 - arr[i].birthOfYear > 20) {
//       adult.push(arr[i].name);
//     }
//   }
//   return adult;
// }
// console.log(ageOver20(classmates));

// function ageOfStudents(arr) {
//   let age = [];
//   for (let i = 0; i < arr.length; i++) {
//     let nas = 2022 - arr[i].birthOfYear;
//     age.push(arr[i].name + "-n nas: " + nas);
//   }
//   return age;
// }
// console.log(ageOfStudents(classmates));

// function rel(arr) {
//   let single = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].single) {
//       single.push(arr[i].name);
//     }
//   }
//   return single;
// }
// console.log(rel(classmates));

// //MERN Object

// const users = [
//   {
//     name: "Alex",
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 45,
//     isLoggedIn: false,
//     points: 30,
//   },
//   {
//     name: "Job",
//     email: "job@job.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   {
//     name: "Brook",
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 39,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     name: "Daniel",
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 25,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     name: "John",
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     name: "Thomas",
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 18,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     name: "Paul",
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 40,
//   },
// ];
// // neg hereglegchiin buh utgiig hewleh
// console.log(users[0]);
// //hamgiin olon skilltei
// function proSkill(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (max < arr[j].skills.length) {
//         max = arr[j].skills.length;
//         ner = arr[j].name;
//       }
//     }
//   }
//   return ner;
// }
// console.log(proSkill(users));
// //newtersen hunii too
// let newtersenToo = 0;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isLoggedIn) {
//     newtersenToo++;
//   }
// }
// console.log(`newtersen hereglegch: ${newtersenToo}`);
// //50 onootoi
// let over50 = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].points >= 50) {
//     over50.push(users[i].name);
//   }
// }
// console.log("50 onootoi: " + over50);
// //MongoDB, Express, React, Node
// let skills = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].skills.includes("MongoDB", "Express", "React", "Node")) {
//     skills.push(users[i].name);
//   }
// }
// console.log(skills);
// //hamgiin ahmad 3
// let nas = [];
// for (let i = 0; i < users.length; i++) {
//   nas.push(users[i].age);
// }
// console.log(nas);

// nas.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else return 1;
// });
// console.log(nas);
// let ahmadNas = nas.slice(0, 3);
// console.log(ahmadNas);
// let ahmadData = [];
// for (let i = 0; i < ahmadNas.length; i++) {
//   for (let j = 0; j < users.length; j++) {
//     if (users[j].age === ahmadNas[i]) {
//       ahmadData.push(users[j]);
//     }
//   }
// }
// console.log(ahmadData);

// // delguuriin tailan

// const data = [
//   {
//     productName: "Bakery",
//     unitPrice: 2500,
//     amount: 200,
//     totalPrice: 500000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Chocolate",
//     unitPrice: 3000,
//     amount: 18,
//     totalPrice: 54000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Candy",
//     unitPrice: 1000,
//     amount: 155,
//     totalPrice: 155000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Cupcake",
//     unitPrice: 1500,
//     amount: 50,
//     totalPrice: 75000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Lolipop",
//     unitPrice: 500,
//     amount: 75,
//     totalPrice: 37500,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Muffin",
//     unitPrice: 500,
//     amount: 220,
//     totalPrice: 110000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Cookie",
//     unitPrice: 1000,
//     amount: 180,
//     totalPrice: 180000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Jelly",
//     unitPrice: 250,
//     amount: 100,
//     totalPrice: 250000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
// ];
// //niit borluulaltiin dun
// let niitDun = 0;
// for (let i = 0; i < data.length; i++) {
//   niitDun += data[i].totalPrice;
// }
// console.log("Niit borluulaltiin dun: " + niitDun);
// //niit borluulagdsan baraanii too
// let niitToo = 0;
// for (let i = 0; i < data.length; i++) {
//   niitToo += data[i].amount;
// }
// console.log("Niit borluulagdsan baraanii too: " + niitToo);
// //hamgiin ih zaragdsan 5 baraa (borluulaltiin dungeer)
// let borluulaltDun = [];
// for (let i = 0; i < data.length; i++) {
//   borluulaltDun.push(data[i].totalPrice);
// }
// console.log(borluulaltDun);
// borluulaltDun.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else return 1;
// });
// let ehnii5Dun = borluulaltDun.slice(0, 5);
// console.log(ehnii5Dun);
// let ehnii5DunData = [];
// for (let i = 0; i < ehnii5Dun.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j].totalPrice === ehnii5Dun[i]) {
//       ehnii5DunData.push(data[j]);
//     }
//   }
// }
// console.log(ehnii5DunData);
// //hamgiin ih zaragdsan 5 baraanii huwi hemjee (borluulaltiin dungeer)
// let huwiDunEhnii5 = [];
// for (let i = 0; i < ehnii5Dun.length; i++) {
//   for (let j = 0; j < data.length; j++)
//     if (ehnii5Dun[i] === data[j].totalPrice) {
//       a = Math.round((ehnii5Dun[i] * 100) / niitDun);
//       huwiDunEhnii5.push(data[j].productName + ": " + a + "%");
//     }
// }
// console.log(huwiDunEhnii5);
// //hamgiin ih zaragdsan 5 baraa (too hemjeegeer)
// let borluulaltToo = [];
// for (let i = 0; i < data.length; i++) {
//   borluulaltToo.push(data[i].amount);
// }
// console.log(borluulaltToo);
// borluulaltToo.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else return 1;
// });
// let ehnii5Too = borluulaltToo.slice(0, 5);
// console.log(ehnii5Too);
// let ehnii5TooData = [];
// for (let i = 0; i < ehnii5Too.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j].amount === ehnii5Too[i]) {
//       ehnii5TooData.push(data[j]);
//     }
//   }
// }
// console.log(ehnii5TooData);
// //hamgiin ih zaragdsan 5 baraanii huwi hemjee (too hemjeegeer)
// let huwiTooEhnii5 = [];
// for (let i = 0; i < ehnii5Too.length; i++) {
//   for (let j = 0; j < data.length; j++)
//     if (ehnii5Too[i] === data[j].amount) {
//       a = Math.round((ehnii5Too[i] * 100) / niitToo);
//       huwiTooEhnii5.push(data[j].productName + ": " + a + "%");
//     }
// }
// console.log(huwiTooEhnii5);
// //hamgiin baga zaragdsan 5 baraa (borluulaltiin dungeer)
// borluulaltDun.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else return -1;
// });
// let suuliin5Dun = borluulaltDun.slice(0, 5);
// console.log(suuliin5Dun);
// let suuliin5DunData = [];
// for (let i = 0; i < suuliin5Dun.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j].totalPrice === suuliin5Dun[i]) {
//       suuliin5DunData.push(data[j]);
//     }
//   }
// }
// console.log(suuliin5DunData);
// //hamgiin baga zaragdsan 5 baraanii huwi hemjee (borluulaltiin dungeer)
// let huwiDunsuuliin5 = [];
// for (let i = 0; i < suuliin5Dun.length; i++) {
//   for (let j = 0; j < data.length; j++)
//     if (suuliin5Dun[i] === data[j].totalPrice) {
//       a = Math.round((suuliin5Dun[i] * 100) / niitDun);
//       huwiDunsuuliin5.push(data[j].productName + ": " + a + "%");
//     }
// }
// console.log(huwiDunsuuliin5);
// //hamgiin baga zaragdsan 5 baraa (too hemjeegeer)
// borluulaltToo.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else return -1;
// });
// let suuliin5Too = borluulaltToo.slice(0, 5);
// console.log(suuliin5Too);
// let suuliin5TooData = [];
// for (let i = 0; i < suuliin5Too.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j].amount === suuliin5Too[i]) {
//       suuliin5TooData.push(data[j]);
//     }
//   }
// }
// console.log(suuliin5TooData);
// //hamgiin baga zaragdsan 5 baraanii huwi hemjee (too hemjeegeer)
// let huwiToosuuliin5 = [];
// for (let i = 0; i < suuliin5Too.length; i++) {
//   for (let j = 0; j < data.length; j++)
//     if (suuliin5Too[i] === data[j].amount) {
//       a = Math.round((suuliin5Too[i] * 100) / niitToo);
//       huwiToosuuliin5.push(data[j].productName + ": " + a + "%");
//     }
// }
// console.log(huwiToosuuliin5);
