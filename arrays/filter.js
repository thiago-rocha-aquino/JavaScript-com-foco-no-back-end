const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { //como não posso quebrar a order, uso '_' para marcar e consrguir utilizar o indice
    return medias[indice] < 7;

});

console.log(reprovados);



const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);// é um booleano, então ele guarda aquilo que for true, e descarta o false
console.log(aprovados);