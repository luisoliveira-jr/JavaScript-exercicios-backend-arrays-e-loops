const numeros = [3, 4, 1, 8, 11, 7, 5];

//indice e dNext serão usadas para definir as posições no arry, sendo que dNext sempre estará uma posição a frente
let indice = 0;
let dNext = indice + 1;

let maior = 0; // Será usado para armazenar o maior número entre indice e dNext
let maioral = 0; //Será usado para armazenar o maior número do array

//Inicia a partir de indice = 0
//Enquanto dNext for menor que o array...
//Incrementar 1 em dNext e indice, com todo o arry será varrido
for (indice; dNext < numeros.length; dNext++ && indice++) {
    //Se o número na posição indice for maior que o da posição dNext armazena-lo na vairavel "maior", se não, o que está na dNext deverá ser armazendo nela.
    if (numeros[indice] > numeros[dNext]) {
        maior = numeros[indice];
    } else {
        maior = numeros[dNext];
    }

    if (maior > maioral) {
        maioral = maior;
    }
}
console.log(maioral)