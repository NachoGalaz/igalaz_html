import React, { useState, useEffect } from "react";
import { TarjetaPreguntas } from "./TarjetaComponent";
import { FormularioReporteDiario } from "./FormularioComponent";
import {getAll,eliminarReporte,saveReporte} from "../service/ReporteService"



const initialReporte = [
    {
        id: '',
        mensajeAyer: 'hola',
        mensajeHoy: 'buenas',
        mensajeObstaculo: 'tardes'
    }
]


const ReporteComponent = () => {

    const [reportes, setReportes] = useState(initialReporte);
    {/* const state = useState(initialAuto);
    state[0]=initialAuto
    state[1]= funcion que nos permite hacer cambios */}
    const [reporteEditado, setReporteEditado] = useState(null);

    const obtenerReportes = async () => {
        setReportes(await getAll())
    }

    useEffect(
        () => { obtenerReportes() }
        , [])
    // []vacio pq no necesitamos que este pendiente de ningun cambio


    const reporteDelete = async (reporteId) => {
        await eliminarReporte(reporteId)
        setReportes(await getAll())
    }

    const reporteAdd = async (reporte) => {
        await saveReporte(reporte)
        setReportes(await getAll())
    }

    const reporteEdit = (reporteEditado) => {
        const changeReportes = reportes.map(reporte => (reporte.id === reporteEditado.key ? reporteEditado : reporte))
        setReportes(changeReportes)
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 ">
                    <h1>Lista</h1>
                    {
                        reportes.map(u =>
                            <TarjetaPreguntas
                                key={u.id}
                                reporte={u}
                                reporteDelete={reporteDelete}
                                setReporteEditado={setReporteEditado} />)
                    }

                </div>
                <div className="col">
                    <h1>Formulario Reporte</h1>
                    <FormularioReporteDiario
                        reporteAdd={reporteAdd}
                        reporteEditado={reporteEditado}
                        reporteEdit={reporteEdit}
                        setReporteEditado={setReporteEditado} />

                </div>
            </div>
        </div>
    );

}

export default ReporteComponent;