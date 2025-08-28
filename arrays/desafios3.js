function arrays(array, array2){
    array3 = [...array, ...array2];
    return array3;
}

console.log(arrays([1,2,3], [4,5,6] ));

//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
function unirArrays(...arrays) {
    return arrays.flat(); //o flat "achata" o array, ou seja, ele transforma um array de arrays em um array único.
}   
console.log(unirArrays([1, 2], [3, 4], [5, 6]));


//2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function somador(lista_notas){
    const soma = lista_notas.reduce((soma, elementos) => soma + elementos, 0);
    return soma;
}
console.log(somador(valores));

// 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
//Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

function unircor(...cores) {
    const coresunidas = new Set(cores.flat());
    return [...coresunidas];
}
console.log(unircor(coresLista1, coresLista2));

//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const pares = [1, 2 , 5, 6 , 9 , 12, 15, 18];
function numerospares(array){
       const pares = array.filter((pares)=> pares % 2 ===0);
       return pares;
}
console.log(numerospares(pares));


//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const numerosmultiplo5 = [5,10, 12,14, 4, 7,3, 30];
function filtro(numeros){
    const multiplos = numeros.filter((numeros)=>{
        if(numeros % 5 ===0 && numeros >5){
            return numeros;
        }
        
    })
    return multiplos;
}
console.log(filtro(numerosmultiplo5));


//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const elementos = [1,2,3,4,5,8,9];
function somaelementos(array){
    const somatudo = array.reduce((soma, elementos) => soma + elementos, 0);
    return somatudo;
}
console.log(somaelementos(elementos));
