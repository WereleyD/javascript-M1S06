import { filtrarPares } from "./filtrarPares.js";
import { somaImpares } from "./somaImpares.js";

let array = [ 0, 3, 6, 9, 10 ];

console.log(`Números pares do Array: ${filtrarPares(array)}`);
console.log(`Soma dos números ímpares: ${somaImpares(array)}`);