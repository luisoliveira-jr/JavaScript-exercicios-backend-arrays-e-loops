const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let selecionados = [];

for (let numero of original) {
    if (numero >= 10 && numero <= 20 || numero > 100) {
        selecionados.push(numero);
    }
}

console.log(selecionados)

