let summary = (num1: number, num2: number, num3: number) => { return num1+num2+num3; }
const result = summary(2,4,6);
console.log(result);

let bool: boolean = true;
let num: number = 13;
let numList: number[] = [1,3,5,7,9];

const greeting: string = "Hello world!";
const random: any = ["Clinically", "insane"];
const nothing: null = null;

console.log(bool,num,numList,greeting,random,nothing);

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}
const data: ToJsonStringify = {
    id: 3,
    e1: 21333,
    e2: "Поле полюшко поле 1",
}
const jsonString = JSON.stringify(data);
console.log(jsonString);
