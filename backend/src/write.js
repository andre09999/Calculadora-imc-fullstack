const fs = require('fs').promises;
const path = require('path');

const dir = path.join(__dirname, '../data/registroDoPeso.txt');

async function main(resul, nome, peso, alturaInmetro) {
  const r = await fs.readFile(dir);
  const resolve = JSON.parse(r);
  const rs = JSON.stringify([
    `O imc do ${nome} foi ${resul}. peso ${peso} altura ${alturaInmetro}mt na data ${new Date()}`,
    ...resolve,
  ]);
  try {
    await fs.writeFile(dir, rs);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

module.exports = {
  main,
};
