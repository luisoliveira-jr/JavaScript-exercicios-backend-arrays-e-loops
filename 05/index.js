const original = [1, 4, 12, 21, 53, 88, 112];

let pares = [];

//Cria variavel indice, define que para indice menor que array numeros, soma 1 a indice.
for (let indice = 0; indice < original.length; indice++) {
    //Se o mod do número for igual a zero, ele é par.
    if (original[indice] % 2 == 0) {
        //Armazena os numeros pares
        pares.push(original[indice]);
    }
}

//Imprime o resultado.
if (pares == "") {
    console.log(`Não foram encontrados números pares no array original`);
} else {
    console.log(`Os número pares são ${pares} do array original`)
}
