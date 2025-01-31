function mensagemOla(){
    console.log('Olá, mundo!');
}

mensagemOla();

function mensagemOlaNome(nome) {
    console.log(`Ola, ${nome}`);  
}
mensagemOlaNome('Gustavo');

function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(8);
  console.log(resultadoDobro);

function caucularMedia(a, b, c, d, e){
    return (a + b + c + d + e) / 4;
}

let Media = caucularMedia(1, 5, 7, 4, 9)
    console.log(Media);

function encontrarMaior(a, b, c){
    return a > b ? a : b
}

let maiorNumero = encontrarMaior (20, 4)
console.log(maiorNumero)

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(11);
  console.log(resultado); 