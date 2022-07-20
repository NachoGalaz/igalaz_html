import React, { useState, useEffect } from "react";

const initialValues = [
    {
        key: 0,
        nombre: '',
        apellido: '',
        rut: '',
        fechaNacimiento: '',
        correo: '',
        password: '',
        fotoPerfil: ''
    }
]
const autoValues = [
    {
        id: '',
        marca: '',
        modelo: '',
        velocidad: '',
        color: ''
    }
]

const reporteValues = [
    {
        id: '',
        mensajeAyer: 'hola',
        mensajeHoy: 'buenas',
        mensajeObstaculo: 'tardes'
    }
]



const FormularioComponent = ({ usuarioAdd, usuarioEditado, usuarioEdit, setUsuarioEditado }) => {
    const [values, setValues] = useState(initialValues);
    const { key, nombre, apellido, rut, fechaNacimiento, correo, password } = values;

    //useEffect declrar despues de constantes. Cada vez q la pagina se actualiza el useEffect corre
    //revisa si el estado asignado cambia para ver si teiene q volver a corer

    useEffect(
        () => {   //creando funcion interna
            if (usuarioEditado !== null) {
                setValues(usuarioEditado)
            } else {
                setValues({
                    key: 0,
                    nombre: '',
                    apellido: '',
                    rut: '',
                    fechaNacimiento: '',
                    correo: '',
                    password: '',
                    fotoPerfil: ''
                })
            }
        }
        , [usuarioEditado]); //estado asignado = usuarioEditado. si este cambia se va realizar la funcion 

    const handleInputChange = (e) => {
        //permite recepcionar cuando se hagan cambios dentro de los input
        //estas funciones de cambio siempre parte con handle lo de InputChange es el nombre creado pero buena practica
        // la e dentro de handleinputchange viene de event, hay que llamar a los eventos o cambios realizados
        const changedFormValue = {
            //permite tomar el arreglo que estaba con el cambio
            //que nosotros queremos 
            //manteniendo lo que ingrese y cambiando lo que estoy haciendo
            ...values, //hace que no se actualice cada vez que escribes en una constante, guarda todo lo q vas ingresando antes 
            [e.target.name]: e.target.value
            //del evento trame el target(id nombre apellido edad etc)
            //y luego ingresa el evento en value correspondiente({id}{nombre}{apellido}etc)
        }
        setValues(changedFormValue)

    }
    const handleSubmit = (e) => { //funcion para darle funcionalidad al boton submit
        e.preventDefault(); //not null(?)
        if (usuarioEditado !== null) {
            usuarioEdit(values)
        } else
            usuarioAdd(values)

    }

    return (
        <form onSubmit={handleSubmit}> {/* permite darle funcionalidad al boton submit*/}
            <h1>{usuarioEditado ? 'Editar Usuario' : 'Registrar Usuario'}</h1>
            {/* usuarioEditado es nulo? si NO muestra editar usuario, si es nulo muestra ingresar usuario */}
            <div className="form-group">

                <input
                    type="hidden"
                    className="form-control"
                    id="key"
                    placeholder="Key"
                    value={key}
                    name='key'
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre..."
                    value={nombre}
                    name='nombre'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido..."
                    value={apellido}
                    name='apellido'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="rut"
                    placeholder="RUT: 11.111111-1"
                    value={rut}
                    name='rut'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Fecha de nacimiento:</label>
                <br />
                <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    placeholder=""
                    value={fechaNacimiento}
                    name='fechaNacimiento'
                    onChange={handleInputChange}
                ></input>
                <br />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="Email"
                    value={correo}
                    name='correo'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    name='password'
                    onChange={handleInputChange}
                />
                <br />
            </div>

            <div>
                <button type="submit" className="btn btn-outline-primary me-2">{usuarioEditado ? 'Editar' : 'Registrar'}</button>
                {/* boton dinamico si estamos en editar dice editar y si estamos en crear dice crear */}
                {usuarioEditado ? (<button type="button" className="btn btn-outline-warning" onClick={() => { setUsuarioEditado(null) }}>Cancelar</button>) : ''}
                {/* si usuarioEditado no es nulo vamos a mostrar el boton cancelar, si es nulo vamos a mostrar nada */}
            </div>

        </form>
    );
}

const FormularioAuto = ({ autoAdd, autoEditado, autoEdit, setAutoEditado }) => {
    const [values, setValues] = useState(autoValues);
    const { marca, modelo, velocidad, color } = values;

    useEffect(
        () => {
            if (autoEditado !== null) {
                setValues(autoEditado)
            } else {
                setValues({
                    id: '',
                    marca: '',
                    modelo: '',
                    velocidad: 0,
                    color: '',
                    valor: 0
                })
            }
        }
        , [autoEditado]);

    const handleInputChange = (e) => {

        const changedFormValue = {
            ...values,
            [e.target.name]: e.target.value
            //key:key
        }
        setValues(changedFormValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        autoAdd(values);
        // if (autoEditado !== null) {
        //     autoAdd(values)
        // } else {
        //     autoAdd(values)
        // } 
        //Esto tambien es correcto pero da un if innecesario
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Auto</h1>
            <div className="form-group">
                <label>Marca</label>
                <input
                    type="text"
                    className="form-control"
                    id="marca"
                    placeholder="Marca"
                    value={marca}
                    name='marca'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Modelo</label>
                <input
                    type="text"
                    className="form-control"
                    id="modelo"
                    placeholder="Modelo"
                    value={modelo}
                    name='modelo'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Velocidad</label>
                <input
                    type="numeric"
                    className="form-control"
                    id="velocidad"
                    placeholder="Velocidad"
                    value={velocidad}
                    name='velocidad'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Color</label>
                <input
                    type="text"
                    className="form-control"
                    id="color"
                    placeholder="Color"
                    value={color}
                    name='color'
                    onChange={handleInputChange}
                ></input>
                <br />
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary me-2">{autoEditado ? 'Editar' : 'Crear'}</button>
                {autoEditado ?
                    (<button type="button" className="btn btn-outline-warning" onClick={() => { setAutoEditado(null) }}>Cancelar</button>) : ''}

            </div>

        </form>
    );
}

const FormularioReporteDiario = ({ reporteAdd, reporteEditado, reporteEdit, setReporteEditado }) => {
    const [values, setValues] = useState(reporteValues);
    const { mensajeAyer, mensajeHoy, mensajeObstaculo } = values;

    useEffect(
        () => {
            if (reporteEditado !== null) {
                setValues(reporteEditado)
            } else {
                setValues({
                    id: '',
                    mensajeAyer: '',
                    mensajeHoy: '',
                    mensajeObstaculo: ''
                })
            }
        }
        , [reporteEditado]);

    const handleInputChange = (e) => {

        const changedFormValue = {
            ...values,
            [e.target.name]: e.target.value
            //key:key
        }
        setValues(changedFormValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reporteAdd(values);
        // if (autoEditado !== null) {
        //     autoAdd(values)
        // } else {
        //     autoAdd(values)
        // } 
        //Esto tambien es correcto pero da un if innecesario
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>PREGUNTAS</h1>
            <div className="form-group">
                <label>Pregunta Ayer</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="mensajeAyer"
                    placeholder="mensajeAyer"
                    value={mensajeAyer}
                    name='mensajeAyer'
                    onChange={handleInputChange}
                ></textarea>
                <br />
            </div>
            <div className="form-group">
                <label>Pregunta HOY</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="mensajeHoy"
                    placeholder="mensajeHoy"
                    value={mensajeHoy}
                    name='mensajeHoy'
                    onChange={handleInputChange}
                    ></textarea>
                <br />
            </div>
            <div className="form-group">
                <label>OBSTACULOS</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="mensajeObstaculo"
                    placeholder="mensajeObstaculo"
                    value={mensajeObstaculo}
                    name='mensajeObstaculo'
                    onChange={handleInputChange}
                    ></textarea>
                <br />
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary me-2">{reporteEditado ? 'Editar' : 'Crear'}</button>
                {reporteEditado ?
                    (<button type="button" className="btn btn-outline-warning" onClick={() => { setReporteEditado(null) }}>Cancelar</button>) : ''}

            </div>

        </form>
    );

}

export { FormularioComponent, FormularioAuto, FormularioReporteDiario };