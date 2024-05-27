//função que use reduce para calcular o produto de todos os números no array

function calcularProduto(numeros) {
    // Use reduce para multiplicar todos os números no array
    return numeros.reduce((produto, numero) => produto * numero, 1);
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // Output: 120