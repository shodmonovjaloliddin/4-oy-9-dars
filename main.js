// 1. Massivdagi barcha elementlarning yig'indisini hisoblash
let numbers1 = [1, 2, 3, 4, 5, 6, 7];
let sum = numbers1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 28

// 2. Sonni stringga aylantirish
let num = 256;
let str = num.toString();
console.log(str); // "256"

// 3. Berilgan musbat sonni manfiy qilib qaytarish (agar allaqachon manfiy bo'lsa, o'zini qaytaradi)
function toNegative(n) {
    return n > 0 ? -n : n;
}
console.log(toNegative(7)); // -7
console.log(toNegative(-8)); // -8

// 4. Massivdagi barcha musbat sonlarning yig'indisini qaytarish
let numbers2 = [1, 2, -3, 4, 5, -6, -7];
let positiveSum = numbers2.filter(n => n > 0).reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum); // 12

// 5. Berilgan sonning juft yoki toq ekanligini aniqlash
function evenOrOdd(n) {
    return n % 2 === 0 ? "Juft son" : "Toq son";
}
console.log(evenOrOdd(5)); // "Toq son"
console.log(evenOrOdd(6)); // "Juft son"

// 6. Berilgan sonning qarama-qarshisini qaytarish
function opposite(n) {
    return -n;
}
console.log(opposite(9)); // -9
console.log(opposite(-9)); // 9

// 7. Massivdagi true qiymatlarini hisoblash
let arr = [true, 1, true];
let trueCount = arr.filter(Boolean).length;
console.log(trueCount); // 2

// 8. Massivdagi eng katta va eng kichik qiymatlarni topish
let numbers3 = [2, 5, 9, 4];
let max = Math.max(...numbers3);
let min = Math.min(...numbers3);
console.log("Eng katta - " + max + ", eng kichik - " + min); // Eng katta - 9, eng kichik - 2

// 9. Boolean qiymatni "Yes" yoki "No" qatoriga aylantirish
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true)); // "Yes"
console.log(boolToWord(false)); // "No"

// 10. Berilgan qatorni katta harflarga aylantirish
let str1 = "Salom qalesan";
let upperStr = str1.toUpperCase();
console.log(upperStr); // "SALOM QALESAN"

// 11. 1 dan n gacha bo'lgan sonlarning yig'indisini hisoblash
function sumUpTo(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumUpTo(5)); // 15

// 12. Qator ichidagi so'zlarni teskari tartibda joylashtirish
let str2 = "QWERTY";
let reversedStr = str2.split('').reverse().join('');
console.log(reversedStr); // "YTREWQ"


