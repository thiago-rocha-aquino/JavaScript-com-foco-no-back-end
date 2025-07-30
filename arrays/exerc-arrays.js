//Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
//Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).
//Imprima no console o array e também a informação de comprimento do array.

esparso = [];
esparso[4] = "valor1";

console.log(esparso);


//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array.
//Em seguida, exiba o array antes e depois da alteração.

const array = [1, 2, 3, 4, 5];
array.unshift(10); // adiciona um valor no indice 0 do array 
console.log(`Array antes da alteração: ${array}`);

//Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push().
//Imprima no console os itens presentes no array para verificar se os números foram adicionados.
//Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
meuArray = [];
meuArray.push(2,4,5);
console.log(`meu array é: ${meuArray}`);
meuArray.unshift(meuArray[0]*2);
console.log(`meu array atualizado é: ${meuArray}`);

//Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push().
//Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const numeros = [];
numeros.push(1, 2, 3);
console.log(`Os números são: ${numeros}`);


//Desenvolva um programa em Node.js que simule uma clínica veterinária.
//Crie um array vazio chamado clinica que representará a fila de animais na clínica.
//Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
//Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];
clinica.push("Cachorro", "Gato", "Coelho");
console.log(`Animais na clínica: ${clinica}`);

/*while (clinica.length > 0) {
    console.log(`Animal atendido: ${clinica[0]}`);
    clinica.shift(); // remove o primeiro elemento
    console.log(`Animais restantes na clínica: ${clinica}`);
}*/

for (let i = clinica.length - 1; i >= 0; i--){
    console.log(`Animal atendido: ${clinica[0]}`);
    clinica.shift(); // remove o primeiro elemento
    console.log(clinica[0] ? `Animais restantes na clínica: ${clinica}` : "Nenhum animal restante na clínica");
}

console.log(clinica[0] ? `Lista final: ${clinica[0]}` : "Nenhum animal na clínica");


