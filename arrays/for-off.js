const notas = [10, 8.5, 5, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (nota of notas) {
    console.log(`Nota: ${nota}`);
    somaDasNotas += nota; // somaDasNotas = somaDasNotas + nota;
}
const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);



const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;
const precosComDesconto = [];

for (let preco of precos) {
    const precoComDesconto = preco * desconto;
    precosComDesconto.push(precoComDesconto);
}
console.log("Preços originais:", precos);
console.log("Preços com desconto:", precosComDesconto);