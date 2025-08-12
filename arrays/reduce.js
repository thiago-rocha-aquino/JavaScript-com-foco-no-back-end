const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcular_media(lista_notas){
    /*const soma_notas = lista_notas.reduce((acumulador, nota) =>{
        return acumulador + nota;
    }, 0);*/
    const soma_notas = lista_notas.reduce((acumulador, nota) => acumulador + nota , 0);
    const media = soma_notas / lista_notas.length;
    return media;
}

console.log(calcular_media(salaJS));
console.log(calcular_media(salaJava));
console.log(calcular_media(salaPython));
