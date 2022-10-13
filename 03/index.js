const numeros = [54, 22, 14, 87, 284];

let posicao = [];

//Cria variavel indice, define que para indice menor que array numeros, soma 1 a indice.
for (let indice = 0; indice < numeros.length; indice++) {
    //Se encontrar o 10, posição registra o indice.
    if (numeros[indice] == 10) {
        posicao.push(indice);
    }
}

//Imprime o resultado.
if (posicao == "") {
    console.log(`-1`);
} else {
    console.log(`O número 10 está posicionado no(s) espaço(s) ${posicao} do array`)
}
