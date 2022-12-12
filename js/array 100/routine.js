//routine

console.log(" activities гэсэн multidimensional array үүсгэн мэдээллүүдийг оруулна уу.")
let activities0 = [["ajil", 10], ["ideh", 1], ["yriltsah", 2], ["togloh", 3], ["untah", 8]];
console.log(activities0);

console.table(activities0);

console.log("")
let activities = [... activities0];
for( let i = 0; i < activities.length; i++){
    activities[i].push(Math.round((activities[i][1] * 100)/24) + "%");
}
console.log(activities);