const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const estudante = 'Thiago';
const aprovado = true;

rl.question('Digite a nota do estudante: ', (input) => {
  const nota = parseFloat(input);

  if (nota >= 7) {
    console.log(`O estudante ${estudante} foi aprovado com a nota ${nota}`);
    console.log(`O estudante ${estudante} tem o status de aprovação: ${aprovado}`);
  } else {
    console.log(`O estudante ${estudante} não foi aprovado com a nota ${nota}`);
    console.log(`O estudante ${estudante} tem o status de aprovação: ${!aprovado}`);
  }
 
  rl.close(); 
});

