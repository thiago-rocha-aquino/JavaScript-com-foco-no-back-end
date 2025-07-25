const nota1 = 5;
const nota2 = 7;
let media = (nota1 + nota2) / 2;

if (media >= 6) {   
    console.log(`aprovado com média ${media}`);
} else {
    console.log(`reprovado com média ${media}`);
}

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(`O resultado anual é: ${resultado}`);