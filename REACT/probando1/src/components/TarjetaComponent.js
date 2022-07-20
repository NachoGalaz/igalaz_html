import React from "react";

const TarjetaComponent = ({ usuario, tarjetaDelete, setUsuarioEditado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{usuario.nombre} {usuario.apellido}</h3>
                <p>{usuario.rut}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary mr-2" onClick={() => setUsuarioEditado(usuario)}>Editar</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => tarjetaDelete(usuario.key)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

const TarjetaAuto = ({ auto, tarjetaDelete, setAutoEditado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{auto.marca} {auto.modelo}</h3>
                <p>Velocidad: {auto.velocidad}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setAutoEditado(auto)}>Editar</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => tarjetaDelete(auto.id)}>Eliminar</button>
                </div>
            </div>
        </div>)
}

const TarjetaPreguntas = ({ reporte, reporteDelete, setReporteEditado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{reporte.mensajeAyer}</h3>
                <p>PREG AYER: {reporte.mensajeAyer}</p>
                <p>PREG HOY: {reporte.mensajeHoy}</p>
                <p>OBSTACULOS: {reporte.mensajeObstaculo}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setReporteEditado(reporte)}>Editar</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => reporteDelete(reporte.id)}>Eliminar</button>
                </div>
            </div>
        </div>)
}

export { TarjetaComponent, TarjetaAuto, TarjetaPreguntas };
