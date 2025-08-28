const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomeAtualizados = new Set(nomes); //o set cria um conjunto, ou seja, ele não aceita valores repetidos.

const listaNomes = [...nomeAtualizados]; //transformando o set em um array novamente.
listaNomes.push("Rafael"); //adicionando um novo nome ao array.
console.log(nomeAtualizados); 
console.log(listaNomes);