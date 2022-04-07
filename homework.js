// Задача 1
// Area = length X width

/* let x1 = -5,
    y1 = 8,
    x2 = 10,
    y2 = 5; // 45
let x1 = 5,
    y1 = 8,
    x2 = 5,
    y2 = 5; // 0
let x1 = 8,
    y1 = 1,
    x2 = 5,
    y2 = 1; // 0
let x1 = 2,
    y1 = 3,
    x2 = 10,
    y2 = 5; // 16
let x1 = 10,
    y1 = 5,
    x2 = 2,
    y2 = 3; // 16
*/

let length = Math.abs(x1 - x2);
let width = Math.abs(y1 - y2);
console.log(Math.sqrt(
    Math.pow(length, 2) * Math.pow(width, 2)
))

// Задача 2
/*
a = 13.890123,
b = 2.891564,
n = 2 дробные части: 89, 89.

a = 13.890123,
b = 2.891564,
n = 3 дробные части: 890, 891.

let a = 13.123456789;
let b = 2.123;
let n = 5; // дробные части: 12345, 12300.
*/
// целая часть
let aFloor = Math.floor(13.890123);
console.log(aFloor);
let bFloor = Math.floor(2.891564);
console.log(bFloor);


//дробная часть
let aFraction = Math.trunc(13.890123 % 1 * Math.pow(10, 3));
console.log(aFraction);
let bFraction = Math.trunc(2.891564 % 1 * Math.pow(10, 3));
console.log(bFraction);


// нормалайзд
let aFractionNormalized = aFraction * Math.pow(10, 4);
console.log(aFractionNormalized);
let bFractionNormalized = aFraction * Math.pow(10, 4);
console.log(bFractionNormalized);


//результаты сравнения >, <, ≥, ≤, ===, ≠
console.log('a > b', aFractNormalized > bFractNormalized);
console.log('a < b', aFractNormalized < bFractNormalized);
console.log('a >= b', aFractNormalized >= bFractNormalized);
console.log('a <= b', aFractNormalized <= bFractNormalized);
console.log('a === b', aFractNormalized === bFractNormalized);
console.log('a ≠ b', aFractNormalized !== bFractNormalized);

// Задача 3

/*
n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.
*/

console.log(Math.round(Math.random() * (m - n) / 2 + n) * 2 + 1);
