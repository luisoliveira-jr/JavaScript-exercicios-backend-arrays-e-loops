const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
/* 
let indice = 0;

//Cria variavel indice, define que para indice menor que array original, soma 1 a indice.
for (indice; indice < original.length; indice++) {
    //Se o mod do número for igual a zero, ele é par.
    if (original[indice] % 2 == 0) {
        //Armazena os numeros pares
        pares.push(original[indice]);
    } else {
        //Armazena os numeros impares
        impares.push(original[indice]);
    }
}

while (indice < original.length) {
    //Se o mod do número for igual a zero, ele é par.
    if (original[indice] % 2 == 0) {
        //Armazena os numeros pares
        pares.push(original[indice]);
    } else {
        //Armazena os numeros impares
        impares.push(original[indice]);
    }
    indice++
} */

for (let numero of original) {
    if (numero % 2 == 0) {
        //Armazena os numeros pares
        pares.push(numero);
    } else {
        //Armazena os numeros impares
        impares.push(numero);
    }
}

//Imprime o resultado.
console.log(original);
console.log(pares);
console.log(impares);
