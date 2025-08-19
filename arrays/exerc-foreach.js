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
let numeroo = 4;
posicao = -1;

for(let i = 0; i<numeros.length; i++){
    if(numeros[i] === numeroo){
        posicao = i;
        break;
    }
}

console.log(posicao);


//4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
//Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
//Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos.
//Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunos = todasAsTurmas.find(nome => nome === 'Clarinha' );
console.log(alunos? `Aluno encontrado: ${nome}` : "Aluno não encontrado");


// Considere um array de números inteiros. const numeros = [6, 9, 12, 15, 18, 21];
// Copiar código Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação.
// Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

 const numeross = [6, 9, 12, 15, 18, 21];
 const copiar = numeross.forEach((elemento) =>{
    const numeross = elemento * 3;
    console.log(numeross)   
 });
const indice = numeross.findIndex(indic => indic == 18);
console.log(indice);