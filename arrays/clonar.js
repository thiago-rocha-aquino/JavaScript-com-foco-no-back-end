const notas = [7, 7, 8, 9];
const novasNotas = notas; // temos uma referencia ao mesmo array, que é notas, não uma cópia
//utilizando o operador spread operator
novasNotas.push(10); // adicionando um novo elemento ao array novasNotas
const novasNotas2 = [...notas]; // agora temos uma cópia do array notas
novasNotas2.push(11); // adicionando um novo elemento ao array novasNotas2

console.log(notas);
console.log(novasNotas);
console.log(novasNotas2);