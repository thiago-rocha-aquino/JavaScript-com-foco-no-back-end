const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) /notas.length;//lengeth é o tamanho do array, ou seja, a quantidade de elementos que ele possui. 
                                                                        //length é uma propriedade do array que retorna o número de elementos contidos nele.
console.log(`A média é: ${media}`);


const calculo = () => {
const notasTotal = [10, 6, 8];
console.log(`as notas são: ${notasTotal}`);
notasTotal.push(7,5);
notasTotal.pop();// remove o último elemento do array
//notasTotal.shift();// remove o primeiro elemento do array
console.log(`as notas(corrigidas) são: ${notasTotal}`);
 mediaa = 0; 
for (nota in notasTotal) {
    mediaa += notasTotal[nota];
} 
mediaa /= notasTotal.length; 
return mediaa;
 
}
console.log(`A média é: ${calculo()}`);
