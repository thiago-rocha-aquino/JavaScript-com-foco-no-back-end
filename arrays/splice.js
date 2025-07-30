const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1,2, 'Rodrigo'); // a função splice pode receber até 3 parametros, o primero é o indice que sera alterado, o segundo a quantidade de elementos que serão excluidos,
//mas pode ser 0, para não excluir nenhum elemento, e o terceiro é o elemento que será inserido no lugar definido no primeiro parametro

console.log(listaEstudantes); // ['João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo']


// a função splice() altera o array original, ou seja, modifica o array original, diferente da função slice() que cria uma cópia do array original