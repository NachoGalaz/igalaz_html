import React, { useState, useCallback } from "react";
import { TarjetaComponent } from "./TarjetaComponent";
import { FormularioComponent } from "./FormularioComponent";
import { useNavigate } from 'react-router-dom'

// const usuario1 = {
//     nombre: 'Joseph',
//     apellido: 'Joestar',
//     edad: '18'
// }

// const usuario2 = {
//     nombre: 'Josuke',
//     apellido: 'Higashikata',
//     edad: 16
// }

//Arreglo de usuarios
const initialUsuarios = [

    {
        key: 0,
        nombre: 'Joseph',
        apellido: 'Joestar',
        edad: '18',
        password: '1234'
    },
]


const UsuarioComponent = () => {
    //const state = useState(initialUsuarios  -> formato, no se usa asi por lo general
    //const [state,setState] 
    //q trae state? lista usarios y lo llamo desde initialUsuarios

    const [usuarios, setUsuarios] = useState(initialUsuarios);
    //state[0] = initialUsuarios
    //state[1] = funcion q permite hacer cambios en initial usuarios
    //Nos entrega un arreglo con dos respuestas, la primera es el componente en si
    //la segunda, setState permite cambiar, en este caso, a los usuarios

    const [usuarioEditado, setUsuarioEditado] = useState(null);
    // creamos un estado de usuario editado,y le entreamos la funcion set a la tarjeta q es donde vamos a dar la opcion de editar
    //Hasta que yo le digo que quiero editar debe ser nulo, cuando presiono editar se llena la variable

    const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate('/autos', { replace: true }, [navigate]));


    const tarjetaDelete = (usuarioKey) => {
        //Vamos a deletear segun la key del usuario
        const changeUsuarios = usuarios.filter(u => u.key != usuarioKey)
        setUsuarios(changeUsuarios)
    }
    const usuarioAdd = (usuario) => {
        const addUsuarios = [
            ...usuarios,
            usuario
        ]
        setUsuarios(addUsuarios)
    }

    const usuarioEdit = (usuarioEditado) => {
        const changeUsuarios = usuarios.map(usuario => (usuario.key === usuarioEditado.key ? usuarioEditado : usuario))
        // por cada usuario q recorra (key) se verifica si es igual o no al usuario editado. si no son iguales ingresa usuario editado si son iguales ingresa usuario
        setUsuarios(changeUsuarios)
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col-8'>
                    {/* si usuarios no es nulo vamos a mostrar el boton cancelar, si es nulo vamos a mostrar nada */}
                    <h1>Lista</h1>
                    {
                        //dentro del array usuarios traeremos cada posicion del array
                        //usuarioRec es el nombre q le damos como referencia dentro del map
                        //va recorriendo la lista, es una referencia, misma logica foreach
                        usuarios.map(usuarioRec =>
                            <TarjetaComponent
                                key={usuarioRec.key}
                                usuario={usuarioRec}
                                tarjetaDelete={tarjetaDelete}
                                setUsuarioEditado={setUsuarioEditado} />) /*le entregamos como propiedad el setusuario*/
                    }
                    {/* <TarjetaComponent usuario={usuario1} />
                    <TarjetaComponent usuario={usuario2} /> */}
                    {/* ctrl k + ctrl c para comentar */}

                </div>

                <div className="col">
                    <h1>Formulario</h1>
                    <FormularioComponent
                        usuarioAdd={usuarioAdd}
                        usuarioEditado={usuarioEditado}
                        usuarioEdit={usuarioEdit}
                        setUsuarioEditado={setUsuarioEditado} />

                </div>
                <br />
                <div>
                    <button type="buttom" className="btn btn-outline-primary me-2" onClick={handleOnClick}>Ir a Autos</button>
                </div>
            </div>
        </div>
    );

}

export default UsuarioComponent;