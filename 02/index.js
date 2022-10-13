let letras = ["A", "e", "B", "C", "E", "z"];

let indice = 0; //Percorre o array
let total = 0; //Soma dos qtd de letras "e" do array

//Enquanto o indice for menor que o array...
while (indice < letras.length) {
    if (letras[indice] === "e" || letras[indice] === "E") {
        //Se a letra na posição indicada pelo indice for igual a "e"||"E", soma um ao total.
        total++;
    }
    //incrementa 1 ao indice, para avançar uma posição do array.
    indice++;
}

if (total == 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${total} letras "E" ou "e".`)
}
