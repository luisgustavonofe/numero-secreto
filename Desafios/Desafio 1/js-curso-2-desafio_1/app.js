let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}
function exibirMensagemNoAlerta(){
    console.log('Eu amo js')
}
function promptCidadeDoBrasil() {
    let nomeCidade = prompt('Digite o nome da sua cidade favorita do Brasil')
    alert(`Visitei ${nomeCidade} e gostei muito!`)
}
function exibirMensagemNoSoma() {
    let primeiroNumero = parseInt(prompt('Digite um número'));
    let segundoNumero = parseInt(prompt('Digite mais um número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}