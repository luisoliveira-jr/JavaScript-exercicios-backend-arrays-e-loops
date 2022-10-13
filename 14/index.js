const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

let indice = 0;

while (indice < arrayA.length) {
    if (arrayA[indice] < arrayB[indice]) {
        console.log(arrayA[indice])
    } else {
        console.log(arrayB[indice])
    }
    indice++
}
