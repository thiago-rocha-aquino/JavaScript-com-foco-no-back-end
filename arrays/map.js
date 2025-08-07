const notas = [10, 9.5, 8, 7, 6];
// metodo callback executa uma função dentro de uma função
const notasAtualizadas = notas.map((nota) =>  nota + 1 >= 10 ? 10 : nota + 1); // se a nota for maior que 10, retorna 10, caso contrário, retorna a nota + 1
console.log(`Notas atualizadas: ${notasAtualizadas}`);      



const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomeAtualizados = nomes.map((nome)=> nome.toUpperCase());
console.log(`Nomes atualizados: ${nomeAtualizados}`); 