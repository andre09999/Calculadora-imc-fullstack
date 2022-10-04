const readline = require('readline-sync');
const { answer } = require('./answer');

function calculation() {
  const nome = readline.question('Qual e seu nome? ');
  const altura = readline.questionFloat('Digite sua altura em centimetros: ');
  const alturaInmetro = altura / 100;
  const alturaAoQuadrado = alturaInmetro ** 2;

  const peso = readline.questionFloat('Digite seu peso: ');

  const resul = (peso / alturaAoQuadrado).toFixed(2);

  answer(resul, nome, peso, alturaInmetro);
}

module.exports = {
  calculation,
};
