import React from 'react';
import ReactDOM from 'react-dom';
import App from './App' //ya que estamos en la misma carpeta

ReactDOM.render(
    //<h1>Aplicacion REACT</h1>
    //react render solo puede usar 2 parametros, no 3
    <App />,
    document.querySelector("#root")
);