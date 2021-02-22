
// Al ejecutar "tsc index.ts" se crea el archivo index.js"
// Para unir con js, usamos npm install ts-node : para ejecutarlo "ts-node index.ts"

function sumar(valor1, valor2) {
    return valor1 + valor2;
}

let valor1: number;
let valor2: number;

valor1 = 2;
valor2 = 4;

console.log(sumar(valor1, valor2));