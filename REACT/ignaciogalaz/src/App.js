import React from 'react';
import FormularioComponent from './components/FormularioComponent';
import JuntoComponent from './components/JuntoComponent';
// import JuntoComponent from './components/JuntoComponent';

//Al ser componente va con mayuscula, recat=componentes mayuscula
//Componente principal
//Arrow function, la q mas se utiliza
const App = () => {
    return (
        <div>
            <FormularioComponent />
        </div>
    );
};
//Para hacerlo funcionar hay que exportar la funcion
//EL COMPONENTE SOLO PUEDE EXPORTAR 1 ETIQUETA, POR ESTO SE HACE UN <div> que englobe todo
//o esta etiqueta "falsa" <></>
export default App;
//para poder usarla desde cualquier parte importandola, la estamos habilitando
