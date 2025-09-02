const estudante = {
    nome: 'Thiago',
    idade: 26,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    cpf: '12345678900'
}

function exibirEstudante(estudanteobjeto, infoestudante ){
    //notação de colchetes []
    return estudanteobjeto[infoestudante];
} 

console.log(estudante['cpf']);
console.log(exibirEstudante(estudante, 'nome'));
console.log(exibirEstudante(estudante, 'idade'));
console.log(exibirEstudante(estudante, 'cidade'));
console.log(exibirEstudante(estudante, 'profissao'));
console.log(`os tres primeiros números do meu cpf são: ${exibirEstudante(estudante, 'cpf').substring(0,3)}`);