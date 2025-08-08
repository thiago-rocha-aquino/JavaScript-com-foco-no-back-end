//1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const array = [6, 7, 3, 4, 5];
array.forEach((element, index)=>{
    console.log(`Elemento: ${element}, Índice: ${index}`); 
})


//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática.
//Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const executaOperacaoEmArray = (array, callback) => {
    array.forEach((element) => {
        const resultado = callback(element);
        console.log(`Resultado da operação: ${resultado}`);
    });
}
executaOperacaoEmArray([1, 2, 3, 4], (num) => num * 2); 

//3 - Você recebeu um array numeros contendo valores numéricos.
// Crie um programa que verifique se um número específico está presente nesse array.
//  Se estiver, o programa deve retornar a posição (índice) desse número.
// Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

numeros = [1,3,4,5]
numero = 4;
posicao = -1;

for(let i = 0; i<numeros.length; i++){
    if(numeros[i] === numero){
        posicao = i;
        break;
    }
}

console.log(posicao);


