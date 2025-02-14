"use strict";
let summary = (num1, num2, num3) => { return num1 + num2 + num3; };
const result = summary(2, 4, 6);
console.log(result);
let bool = true;
let num = 13;
let numList = [1, 3, 5, 7, 9];
const greeting = "Hello world!";
const random = ["Clinically", "insane"];
const nothing = null;
console.log(bool, num, numList, greeting, random, nothing);
const data = {
    id: 3,
    e1: 21333,
    e2: "Поле полюшко поле 1",
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
