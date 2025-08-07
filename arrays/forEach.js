const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
// forEach é um callback que executa uma função para cada elemento do array.
notas.forEach(function (nota){ // forEach itera sobre cada elemento do array, executando a função para cada um deles.                       
    console.log(`Nota: ${nota}`);
    somaDasNotas += nota; 
})
const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);


//forEach não retorna nada ele apenas executa a função para cada elemento do array, diferente do map que retorna um novo array com os valores modificados.