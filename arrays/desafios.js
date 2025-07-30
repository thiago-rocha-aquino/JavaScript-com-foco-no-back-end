//Crie uma função que receba dois arrays e os concatene em um único array.
const funcao = (lista, lista2)=> {
   return lista.concat(lista2);
}
array = [1, 2, 3];
array2 = [4, 5, 6];
console.log(funcao(array, array2)); 


// Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

numeros = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
parteNumeros = numeros.slice(3, 8); //o final ele sempre tira o número do índice 8, então ele vai até o 7.
console.log(parteNumeros); 


// Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja','Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego'); //o primeiro parâmetro é o índice que queremos começar a remover, o segundo é quantos elementos queremos remover, e depois os elementos que queremos adicionar com base no primeiro parametro..
console.log(frutas); 
 
// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante.
// Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Arroz', 'Feijão', 'Carne', 'Frango'];
const menuDeSobremesas = ['Pudim', 'Bolo', 'Sorvete'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);


//Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
const matriz = [];
for (i=0; i<3; i++){
    matriz[i] = [];
    for (j = 0; j < 3; j++){
        matriz[i][j]= (i * 3) + j + 1; //multiplicamos o i por 3, para cada linha, e somamos o j, que é o índice da coluna, e somamos mais 1 para começar de 1.

    }
}
console.log(matriz);//ou

// modo menos verboso, mas para quem tem mais experiencia/conhecimento, podemos usar o Array.from para criar a matriz de forma mais concisa.
const matriz2 = Array.from({ length: 3 }, (_, i) => 
    Array.from({ length: 3 }, (_, j) => (i * 3) + j + 1)
);
console.log(matriz2);



//Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1][2]); 

//Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
matriz[2].splice(1,0, 7.5)

console.log(matriz);