const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const estudante = 'Thiago';
const aprovado = true;

rl.question('Digite a nota do estudante: ', (input) => {
  const nota = parseFloat(input);

  if (aprovado) {
    console.log(`O estudante ${estudante} foi aprovado com a nota ${nota}`);
  } else {
    console.log(`O estudante ${estudante} não foi aprovado com a nota ${nota}`);
  }

  rl.close(); 
});
