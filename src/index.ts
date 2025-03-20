import { mean } from "./average.js";
import { add, subtract } from "./calculator.js";

console.log(`7 + 4 = ${add(7, 4)}`);
console.log(`7 - 4 = ${subtract(7, 4)}`);

const numbers = [4.5, 5.2, 3.9, 6.0];
console.log(`the mean of ${numbers} is ${mean(numbers)}`);
