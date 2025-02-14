// index.js

// Стрелочная функция для вычисления разности двух чисел
const difference = (a, b) => a - b;

// Вызов функции для проверки корректности
console.log(difference(10, 5)); // Ожидаемый вывод: 5

// Различные типы данных
const numberValue = 42; // число
let stringValue = "Hello, World!"; // строка
const booleanValue = true; // логический тип
let arrayValue = [1, 2, 3]; // массив
const objectValue = { key: "value" }; // объект
const nullValue = null; // null
let undefinedValue; // undefined
const symbolValue = Symbol('unique'); // символ

// Вывод всех значений в консоль
console.log(numberValue, stringValue, booleanValue, arrayValue, objectValue, nullValue, undefinedValue, symbolValue);

// Определение объекта data
const data = {
    id: 5,
    e1: 12345,
    e2: 999,
};

// Преобразование объекта в формат JSON
const jsonString = JSON.stringify(data);
console.log(jsonString); // Вывод в консоль