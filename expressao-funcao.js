const notaFinal= function(notaFinal, faltas){
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