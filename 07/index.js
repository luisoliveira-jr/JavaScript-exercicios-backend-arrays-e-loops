const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let startA = [];

for (let nome of nomes) {
    for (let letra of nome) {
        if (letra[0] === "a" || letra[0] === "A") {
            startA.push(nome);
            break
        } break
    }
}

if (startA != "") {
    console.log(startA)
} else {
    console.log(`Não foram encontrados nomes com a inicial a/A`)
}
