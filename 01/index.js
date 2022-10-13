const numeros = [2, 3, 4, 6];
let indice = 0; //Percorre o array
let total = 0; //Soma dos números do array

//Enquanto o indice for menor que o array...
while (indice < numeros.length) {
    // soma o número do array na posição indicada pelo indice a váriavel total
    total = total + numeros[indice];

    // Incrementa 1 ao indice, para avança uma posição do array
    indice++;
}

console.log(total)