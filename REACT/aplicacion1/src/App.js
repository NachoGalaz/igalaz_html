import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuarioComponent from "./components/UsuarioComponent";
import AutoComponent from "./components/AutoComponent";

//Al ser componente va con mayuscula, recat=componentes mayuscula
//Componente principal
//Arrow function, la q mas se utiliza
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsuarioComponent />}></Route>
        <Route path='/autos' element={<AutoComponent />}></Route>
      </Routes>
    </BrowserRouter>

  );
};
//Para hacerlo funcionar hay que exportar la funcion
//EL COMPONENTE SOLO PUEDE EXPORTAR 1 ETIQUETA, POR ESTO SE HACE UN <div> que englobe todo
//o esta etiqueta "falsa" <></>
export default App;
//para poder usarla desde cualquier parte importandola, la estamos habilitando
