const fs = require('fs').promises;
const path = require('path');

  const resul = async () => {
    const r = await fs.readFile(path.join(__dirname, '../data/registroDoPeso.txt'));
    const resolve = await JSON.parse(r);
    console.log(resolve);
  };
  
module.exports = {
  resul,
};