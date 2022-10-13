const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

//Cria variavel indice, define que para indice menor que array numeros, soma 1 a indice.
for (let indice = 0; indice < numeros.length; indice++) {
    //Se o mod do número for igual a zero, ele é par.
    if (numeros[indice] % 2 == 0) {
        //Armazena os numeros pares
        soma = soma + numeros[indice]
    }
}

//Imprime o resultado.
if (soma == 0) {
    console.log(`Não foram encontrados números pares no array números`);
} else {
    console.log(`A soma de números pares é ${soma}`)
}

