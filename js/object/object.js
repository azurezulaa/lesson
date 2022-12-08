
// accessing objects

let students = [
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 23,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 19,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

function huis(obj){
        let male = 0;
        let female = 0;
        let retObj = {};
    for(let i = 0; i < obj.length; i++){
        if(obj[i].gender === "male"){
        male++;
        } else {
        female++;
        }
    }
    retObj.eregtei = male;
    retObj.emegtei = female;

    return retObj;
}
console.log(huis(students));

function dundajNas(obj){
    let sum = 0;
    for(let i = 0; i < obj.length; i++){
        sum += obj[i].age;
    }
    let mid = sum / obj.length;
    return mid;
}
console.log("dundaj nas - " + dundajNas(students));

let ovog = ["Bat", "Bold", "Tamir", "Tumur", "Chuluun"];
for(let i = 0; i < students.length; i++){
    students[i].lastname = ovog[i];
}
console.log(students);

for(let i = 0; i < students.length-1; i++){
    for(let j = i + 1 ; j < students.length; j++)
    if(students[i].age === students[j].age){
        let same = [];
        same.push(students[i].name, students[j].name);
        console.log(same + " nar ni ijil " + students[i].age + " nastai");
    }
}

//simple object

let nohoi = {};
console.log(nohoi);
nohoi.uulder = "banhar";
nohoi.ner = "bambar";
nohoi.ungu = "bor";
nohoi.nas = 2;
nohoi.hairlamChanar = "bondgor"
console.log(nohoi);

console.log("Uulder: " + nohoi.uulder);
console.log("Ner: " + nohoi.ner);
console.log("Ungu: " + nohoi.ungu);
console.log("Hul: " + nohoi.hul);
console.log("Nas: " + nohoi.nas);
console.log("Hair tatam chanar: " + nohoi.hairlamChanar);

//animals

// let animals = [{type: "dog", sound: "woof"}, {type: "cow",sound: "moo"},{type: "cat",sound: "meow"}];
// function sound(obj){
//     for(let i = 0; i < obj.length; i++){
//         type = animals[i].type;
//         sound = animals[i].sound;
//     }
// }

//suragchid

let classmates = [
{name: "Гончигсумлай", birthOfYear: 1999, hobby: "морь", single: false},
{name: "Bilguun", birthOfYear: 2003, hobby: "game", single: true}, 
{name: "Dulguun", birthOfYear: 2004, hobby: "sags", single: false}, 
{name: "Muugii", birthOfYear: 1985, hobby: "book", single: false}, 
{name: "Tuguldur", birthOfYear: 2000, hobby: "car", single: true}
] 
function ageOver20(arr){
    let adult = [];
    for(let i = 0; i < arr.length; i++){
        if(2022 - arr[i].birthOfYear > 20){
            adult.push(arr[i].name);
        }
    }
    return adult;
}
console.log(ageOver20(classmates));

function ageOfStudents(arr){
    let age = [];
    for(let i = 0; i < arr.length; i++){
        let nas = 2022 - arr[i].birthOfYear;
        age.push(arr[i].name + "-n nas: " + nas);
    }
    return age;
}
console.log(ageOfStudents(classmates));

function rel(arr){
    let single = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].single){
            single.push(arr[i].name);
        }
    }
    return single;
}
console.log(rel(classmates));

//MERN Object

const users = [
    {
        name:   "Alex",
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   "Job",
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   "Brook",
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   "Daniel",
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   "John",
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   "Thomas",
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    "Paul",
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]
// neg hereglegchiin buh utgiig hewleh
console.log(users[0]);
//hamgiin olon skilltei
function proSkill(arr){
    let max = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(max < arr[j].skills.length){
                max = arr[j].skills.length;
                ner = arr[j].name
            }
        
        }
    }
    return ner;
}
console.log(proSkill(users));
//50s deesh onootoi
console.log(`newtersen hereglegch: ${users.length}`);
let over50 = [];
for(let i = 0; i < users.length; i++){
    if(users[i].points >= 50){
        over50.push(users[i].name);
    }
}
console.log(over50);
//MongoDB, Express, React, Node

















