const estudante = {
    nome: 'Thiago',
    idade: 26,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    cpf: '12345678900'
}

estudante.telefone = '123131312';
console.log(estudante.telefone);

console.log(estudante);

//alterando uma propriedade que já existe
estudante.nome = 'joão';
console.log(estudante);