const filaDeDentro = ["Jose"];
const filaDeFora = ["Joana", "Roberta"];
let capacidade = 5;
let indice = 0;

for (indice; filaDeDentro.length < capacidade && filaDeFora.length != 0;) {
    filaDeDentro.push(filaDeFora[indice])
    filaDeFora.shift()
}

console.log(filaDeDentro)
console.log(filaDeFora)
