const notaFinal=(notaFinal, faltas) => {// setinha '=>' faz declarar uma função/ uma declarção mais moderna 
    if (notaFinal >= 7 && faltas <= 4){
        return "Aprovado";
    }
    else if (notaFinal < 7 && faltas <= 4){
        return "Reprovado por nota";
    }
    else if (notaFinal>=7 && faltas > 4){
        return "Reprovado por faltas";
    }
    else {
        return "Reprovado por nota e faltas";
    }
}

console.log(notaFinal(6,3));
console.log(notaFinal(8,5));
console.log(notaFinal(9,2));
console.log(notaFinal(5,5));

const nota = (nota1, nota2) => (nota1 + nota2) /2 ; // função de calcular média com arrow function

console.log(nota(8, 9));