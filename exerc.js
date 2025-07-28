//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome) {
    return `Oooii ${nome}, como vai?`;
}

console.log(saudacao("Thiago"));


//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
const idade=(idade)=> (idade >= 18) ? "É maior de idade" : "É menor de idade";

console.log(idade(20));

//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function ehPalindromo(palavra) {
    const palavraInvertida = palavra;
    return palavra === palavraInvertida.split('').reverse().join(''); // como reverse só trabalhar com arrays, é necessário transformar a string em array, inverter e depois juntar novamente em uma string
}                                       //split transforma a string em array, reverse inverte a ordem dos elementos no array, join transforma o array de volta em string
console.log(ehPalindromo("arara")); 
console.log(ehPalindromo("teste")); 

//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else {
        return num3;
    }
} 
console.log(maiorNumero(10, 9, 15));   

//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (base, expoente) => Math.pow(base, expoente);// ou (base ** exponente)
console.log(calculaPotencia(2, 3)); 