const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
console.log(listaEstudantes.length);

//O indice do array termina no indice 9, por isso não lista carlos. Quuando tem [inicio, fim] o fim não está incluido
const sala1 = listaEstudantes.slice(0,listaEstudantes.length / 2); // divide a lista ao meio e cria uma nova lista com os primeiros 10 elementos

//já quando é utilizado no começo do parametro ele pega o primeiro indice que é o 10(carlos)e vai até o final. Quando só temos o parametro [inicio], ele pega até o final do array
const sala2 = listaEstudantes.slice(listaEstudantes.length/2); // divide a lista ao meio e cria uma nova lista com os últimos 10 elementos

console.log(`Quantidade de alunos na sala 1: ${sala1.length}`);
console.log(`Lista da sala 1: ${sala1}\n`);

console.log(`Quantidade de alunos na sala 2: ${sala2.length}`);
console.log(`Lista da sala 2: ${sala2}`);   

// a função slice() cria uma cópia do array original, ou seja, não altera o array original, apenas cria um novo array com os elementos selecionados
