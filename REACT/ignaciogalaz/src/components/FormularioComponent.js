import React from "react";

const FormularioComponent = ({ futbolista }) => (
    <div className="container mt-4">
        <div className='row'>
            <div className='col-6'>
                <h1>Top 5 historico Futbolistas</h1>
                <ol>
                    <li>{futbolista.nombre}</li>
                </ol>
            </div>
            <div className='form-group col-6 border-left'>
                <h1>Formulario</h1>
                <label for="exampleFormControlInput1">Nombre del mejor jugador de la historia</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="hint: Cristiano"></input>
                <label for="exampleFormControlInput1">Dorsal mejor jugador de la historia</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="hint: 7"></input>
                <br></br>
                <label type="text" className='from-group'>
                    Es CR7 el mejor jugador de la historia?
                </label>
                <button type="button" class="list-group-item list-group-item-action">Si</button>
                <button type="button" class="list-group-item list-group-item-action">Si</button>
                <br></br>
                <button type="submit" class="btn btn-light">Enviar</button>
            </div>

        </div>
    </div>

)
export default FormularioComponent;