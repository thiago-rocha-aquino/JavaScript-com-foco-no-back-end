// objeto é dividido por chave e valor
//exemplo de chave e valor:
//chave: nome // valor: Thiago
//chave: idade // valor: 26
//chave: cidade // valor: São Paulo
//chave: profissao // valor: Desenvolvedor
const objetopessoal = {
    nome: 'Thiago',
    idade: 26,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    cpf: '12345678900'
}

//para acessar os valores do objeto, usamos a notação de ponto (.)
console.log(objetopessoal.nome);
console.log(objetopessoal.idade);
console.log(objetopessoal.cidade);
console.log(objetopessoal.profissao);
console.log(`os tres primeiros números do meu cpf são: ${objetopessoal.cpf.substring(0,3)}`);