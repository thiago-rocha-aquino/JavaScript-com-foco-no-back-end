//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
array = [1, 2, 3, 4, 5];
for(i of array){
    console.log(i);
}

//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const funcao = function(){
    array = [1, 2, 3, 4, 5];
    let resultado = '';
    for(let i = 0; i < array.length; i++){
        resultado += `o indice é: ${i} e o elemento é: ${array[i]}\n`;
    }
    return resultado;
}
console.log(funcao());

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const soma =()=> {
    let array = [1, 2, 3, 4, 5];
    let soma = 0;
    for(valor of array){
        soma += valor; 
    }
    return `A soma dos elementos do array é: ${soma}`;
}
console.log(soma());

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const menorNumero = ()=>{
    let array = [5, 2, 8, 1, 4];
    let menor = array[0];
    let maior = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }else{
            if(array[i] > maior){
                maior = array[i];
            }
        }
    } 
    return `O menor número do array é: ${menor}, e o maior número é: ${maior}`;
}
console.log(menorNumero());

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`O número ${numeros[i]} é par.`);
    } 
}

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const calcularMedia = (notas) => { 
    let soma = 0;
    let media = 0;
    for (let i = 0; i < notas.length; i++){
        soma = soma + notas[i];  
    }
    media = soma / notas.length;
    return `A média é: ${media}`;
}
console.log(calcularMedia([5, 10, 8])); 