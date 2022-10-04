import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import AppContext from "./context/context";

function App() {
  const {
    altura,
    setAltura,
    peso,
    setpeso,
    disabled,
    nome,
    setNome,
    IMC,
  } = useContext(AppContext);
  const [obj, setobj] = useState(false);
  const [objRetorno, setobjRetorno] = useState([]);

  useEffect(() => {
    const retorno = async () =>
      await fetch("http://192.168.3.14:3001/imc", {
        method: "GET",
        withCredentials: true,
        crossorigin: true,
        mode: "cors",
      })
        .then((response) => response.json())
        .then((users) => setobjRetorno(users));
    retorno();
  },[]);

  const prepara = async (altura, peso, nome, IMC) => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dataAtual = mes + "/" + dia;
    const obj = {
      first_name: nome,
      IMC: IMC,
      Peso: peso,
      alturaInmetro: (altura / 100).toFixed(2),
      Data: dataAtual,
    };
    const envio = async (obj) =>
      await fetch("http://192.168.3.14:3001/imc", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      });
    envio(obj);
  };
  return (
    <div className="AppContainer">
      <form className="App">
        <h1>IMC</h1>
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={({ target }) => {
            setNome(target.value);
          }}
        />
        <input
          placeholder="Digite sua altura em cm"
          value={altura}
          onChange={({ target }) => {
            setAltura(target.value);
          }}
        />
        <input
          placeholder="Digite seu peso"
          value={peso}
          onChange={({ target }) => {
            setpeso(target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            prepara(altura, peso, nome, IMC)
            setobj(true)
          }}
          disabled={disabled}
        >
          Calcular
        </button>
        {obj ?
          <p> enviado </p> :
          <p/>
    }
      {objRetorno.map((a) => (
        <div className="results" key={a.id}>
          <h1>Historico de imc do {a.first_name} </h1>
          <p> IMC: {a.IMC}</p>
          <p> Peso: {a.Peso}</p>
          <p>Altura: {a.alturaInmetro}</p>
          <p>Data: {a.Data}</p>
        </div>
      ))}
      </form>
    </div>
  );
}

export default App;

