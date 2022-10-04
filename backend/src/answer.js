const { main } = require('./write');

function answer(resul, nome, peso, alturaInmetro) {
  main(resul, nome, peso, alturaInmetro);
  if (resul < 18.5) console.log(`Seu peso esta baixo : ${resul}`)
  else if (resul < 25) console.log(`Peso normal: imc ${resul}`);
  else if (resul < 30) console.log(`Sobrepeso: IMC ${resul}`)
  else if (resul < 35) console.log(`Obesidade grau I: IMC ${resul}`);
  else if (resul < 40) console.log(`Obesidade grau II: IMC ${resul}`);
  else console.log(`Obesidade grau III: IMC ${resul}`);
}

module.exports = {
  answer,
};
