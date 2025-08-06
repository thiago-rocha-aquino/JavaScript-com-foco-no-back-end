const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (i = 0; i < notas.length; i++) {
    console.log(notas.length) // length é o tamanho do array, ou seja, a quantidade de elementos que ele possui.
    console.log(`Nota ${i + 1}: ${notas[i]}`);
}

let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]; // somaDasNotas = somaDasNotas + notas[i];
}
const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);



const numeros = [5, 10, 15, 20, 25];

for (let i = numeros.length - 1; i>=0; i--){
    console.log(`numero ${i +1}: ${numeros[i]}`);
}