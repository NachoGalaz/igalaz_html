import React, { useState, useEffect} from "react";
import { TarjetaAuto } from "./TarjetaComponent";
import { FormularioAuto } from "./FormularioComponent";
import {getAll,eliminarAuto,saveAuto} from "../service/AutoService"

const initialAuto = [
    {
        id: 1,
        marca: '',
        modelo: '',
        velocidad: 0,
        color: '',
        valor: 0
    }
]


const AutoComponent = () => {

    const [autos, setAutos] = useState(initialAuto);
    {/* const state = useState(initialAuto);
    state[0]=initialAuto
    state[1]= funcion que nos permite hacer cambios */}
    const [autoEditado, setAutoEditado] = useState(null);

    const obtenerAutos = async ()=>{
        setAutos(await getAll())
    }

    useEffect(
        ()=>{obtenerAutos()}
        ,[]) 
    // []vacio pq no necesitamos que este pendiente de ningun cambio


    const tarjetaDelete = async(autoId) => {
        await eliminarAuto(autoId)
        setAutos(await getAll())
    }

    const autoAdd = async(auto) => {
        await saveAuto(auto)
        setAutos(await getAll())
    }

    const autoEdit = (autoEditado) => {
        const changeAutos = autos.map(auto => (auto.id === autoEditado.key ? autoEditado : auto))
        setAutos(changeAutos)
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 ">
                    <h1>Lista</h1>
                    {
                        autos.map(u =>
                            <TarjetaAuto
                                key={u.id}
                                auto={u}
                                tarjetaDelete={tarjetaDelete}
                                setAutoEditado={setAutoEditado} />)
                    }

                </div>
                <div className="col">
                    <h1>Formulario</h1>
                    <FormularioAuto
                        autoAdd={autoAdd}
                        autoEditado={autoEditado}
                        autoEdit={autoEdit}
                        setAutoEditado={setAutoEditado} />

                </div>
            </div>
        </div>
    );

}

export default AutoComponent;