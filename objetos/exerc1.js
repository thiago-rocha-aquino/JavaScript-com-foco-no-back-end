//1 - Crie um arquivo chamado livro.js. Nesse arquivo,
//crie um objeto livro que represente as informações de um livro.
//O objeto deve conter as seguintes propriedades:
//titulo (string): título do livro.
//autor (string): nome do autor do livro.
//anoPublicacao (number): ano de publicação do livro.
//genero (string): gênero do livro.
//No final do arquivo livro.js,
// instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
const livros = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicado: 1954,
    genero: "fantasia"
}

console.log(livros.titulo);
console.log(livros.autor);
console.log(livros.anoPublicado);
console.log(`livros.genero\n`);



//2 - Crie uma nova variável chamada anoAtual
//e atribua a ela o ano atual (utilize new Date().getFullYear()).
//Crie um objeto chamado livro com as seguintes propriedades: título,
//autor, ano de publicação e gênero.
//Adicione a propriedade idadePublicacao diretamente ao objeto livro,
//representando há quantos anos o livro foi publicado.
//Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
//Crie uma string chamada mostrarDetalhes contendo os detalhes do livro,
//incluindo a informação da idade de publicação.
//Exiba a string mostrarDetalhes no console para verificar
//se as informações, incluindo a idade de publicação,
//são exibidas corretamente.
let anoAtual = new Date().getFullYear();

const livro = {
    titulo: "as crônicas de Nárnia",
    autor: "C.S. Lewis",
    anoPublicacao: 1950,
    genero: "fantasia",
}
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

//criar uma arrow function é escalavel
//const mostrarLivro = (objetoLivro) => {
//    return `O livro ${objetoLivro.titulo}, do autor ${objetoLivro.autor}, foi publicado em ${objetoLivro.anoPublicacao}, pertence ao gênero ${objetoLivro.genero} e tem ${objetoLivro.idadePublicacao} anos de publicação.`
//}
const Mostraslivro = `o livro ${livro.titulo}, do autor${livro.autor},foi publicado em ${livro.anoPublicacao}, pertence ao gênero ${livro.genero} e tem ${livro.idadePublicacao} anos de publicação.`
console.log(`${Mostraslivro}\n`);


//3 - Crie um objeto livro com as seguintes propriedades:
//título, autor, ano de publicação, gênero, idade de publicação.
//Depois, utilize colchetes para acessar diretamente as propriedades
//do objeto livro e imprimir no console os detalhes do livro.
const livrinhos ={
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937,
    genero: "fantasia",
    idadePublicacao: anoAtual - 1937
}
function mostrar(objeto, elementos){
    return objeto[elementos];
}
console.log(livrinhos["autor"]);
console.log(mostrar(livrinhos, 'titulo') + "\n");



//4 - Crie um objeto livro com as seguintes propriedades:
//título, autor, ano de publicação, gênero, idade de publicação.
//Depois, adicione uma nova propriedade chamada avaliacao.
//Esta propriedade deve ser inicializada como null.

//No final do arquivo livro.js, adicione uma avaliação ao objeto.

//Caso a propriedade avaliacao seja null,
// atribua a avaliação ao objeto livro.

//Caso contrário,
//imprima uma mensagem indicando que o livro já possui uma avaliação.
const livrao = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
    genero: "distopia",
    idadePublicacao: anoAtual - 1949
}
livrao.avaliacao = null;

function Avaliacao(nota){
    if(livrao.avaliacao === null){
        livrao.avaliacao = nota;
        return `A avaliação do livro ${livrao.titulo} é ${livrao.avaliacao}`;
    }else{
        return `O livro ${livrao.titulo} já foi avaliado com nota ${livrao.avaliacao}`;
    }
   
}
console.log(Avaliacao(5));
console.log(Avaliacao(4) + "\n");


//5 - Crie um objeto livro com as seguintes propriedades:
//título, autor, ano de publicação, gênero, idade de publicação.
//Depois altere o gênero do livro para "Aventura".
const alterarLivro = {
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    anoPublicacao: 2003,
    genero: "ficção",
    idadePublicacao: anoAtual - 2003
}

alterarLivro.genero = "thriller";
console.log(alterarLivro.genero);
console.log("\n");



//6 - Crie um objeto livro com as seguintes propriedades:
//título, autor, ano de publicação, gênero, idade de publicação.
//Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const deleteLivro = {
    titulo: "A Menina que Roubava Livros",
    autor: "Markus Zusak",
    anoPublicacao: 2005,
    genero: "ficção histórica",
    idadePublicacao: anoAtual - 2005,
    avaliacao: 6
}

delete deleteLivro.avaliacao;
console.log(deleteLivro);
console.log(deleteLivro.avaliacao); //undefined