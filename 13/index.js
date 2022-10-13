const disjuntores = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
];

indice = 0;

for (indice; disjuntores[indice] <= disjuntores.length; indice++) {
    if (disjuntores[indice]) {
        console.log(indice)
    }
}