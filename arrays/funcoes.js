const alunos = ['João', 'Ana', 'Caio'];
const notas = [7.5, 8.0, 9.0];
            //[ []      []  ]
const lista = [alunos, notas];

console.log(`Lista de alunos e notas: ${lista[0] [1]} - ${lista[1][1]}`); //para acessar alunos o indice é 0, e para acessar as notas o inidice é 1. Então se declararmos [0][1] acessamos o segundo aluno, e se declararmos [1][1] acessamos a segunda nota.


const nomeAluno = (nome) => {
   if (lista[0].includes(nome)) {
       const indice = lista[0].indexOf(nome);
       return `${nome} tem nota ${lista[1][indice]}`;
   } else {
       return `${nome} não está na lista.`;
   }
}

console.log(nomeAluno('Ana')); // O aluno Ana tem nota 8.0
