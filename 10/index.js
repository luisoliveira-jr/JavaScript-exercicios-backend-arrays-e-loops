const numeros = [8, 11, 4, 1];

let prin = 0;
let coad = 0;

let diferenca = 0;
let maiorDiferenca = 0;

while (prin < numeros.length) {
    while (coad < numeros.length) {
        diferenca = numeros[prin] - numeros[coad]
        if (diferenca > maiorDiferenca) {
            maiorDiferenca = diferenca;

        }
        coad++
    }
    prin++
    coad = 0
}
console.log(maiorDiferenca);
