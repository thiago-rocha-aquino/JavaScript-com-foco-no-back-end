function exibirMensagem(mensagem) {
    mensagem = mensagem || "Nenhuma mensagem fornecida.";
    console.log(mensagem);
}

exibirMensagem("Bem-vindo ao módulo de funções!");


function infoEstudantes(nome, nota, nota2, idade){

return `O estudante: ${nome} tem notas: ${nota} e ${nota2}, e tem: ${idade} anos.`;
}
console.log(infoEstudantes("Thiago", 8, 9, 24));

function calcularMedia(nota1, nota2, media) {
   media = (nota1 + nota2) / 2;
   console.log(`A média é: ${media}`);
}   

calcularMedia(8, 9);