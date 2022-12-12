
//temtseen

let teamA1 = 96;
let teamA2 = 108;
let teamA3 = 118;
console.log("A team: ", teamA1, teamA2, teamA3);

let teamB1 = 96;
let teamB2 = 103;
let teamB3 = 123;
console.log("B team: ", teamB1, teamB2, teamB3);

let teamA = (teamA1 + teamA2 + teamA3)/3;
let teamB = (teamB1 + teamB2 + teamB3)/3;

let ylagch;

if(teamA/100 >= 1 || teamB/100 >=1){
    if(teamA > teamB){
        ylagch = "Team A won";
    } else if(teamB > teamA){
        ylagch = "Team B won";
    } else {
        ylagch = "2 баг тэнцлээ";
    }
} else {
    ylagch = " Багууд шаардлага хангасангүй ";
}
console.log(ylagch);