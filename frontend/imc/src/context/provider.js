// ./src/context/Provider.js
import React, { useState,useEffect } from 'react';
import AppContext from './context';

function Provider({ children }) {
  const [altura, setAltura] = useState();
  const [peso, setpeso] = useState();
  const [nome, setNome] = useState();
  const [IMC, setIMC] = useState();
  const [disabled, setdisabled] = useState(true);

  useEffect(() => {
  
      if (peso && altura && nome) {
        setdisabled(false);
        calculation(peso, altura)
      }
  }, [peso,altura,nome]);

  const calculation = (peso, altura) => {
    const alturaInmetro = altura / 100
    const alturaAoQuadrado = alturaInmetro ** 2
    const resul = (peso / alturaAoQuadrado).toFixed(2);
    setIMC(resul)
  }
  
  const contextValue = {
    altura,
    setAltura,
    peso,
    setpeso,
    disabled,
    nome, setNome,
    IMC, setIMC
  };


  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
