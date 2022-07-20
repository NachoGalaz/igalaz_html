import React from "react";
import FormularioComponent from "./FormularioComponent";

const futbolistas = [
    {
        key: 1,
        nombre: 'CR7'
    },
    {
        key: 2,
        nombre: 'El Bicho'
    },
    {
        key: 3,
        nombre: 'Siuu'
    },
    {
        key: 4,
        nombre: 'Cristiano Ronaldo'
    },
    {
        key: 5,
        nombre: 'Messirve'
    },
]

const ListaComponent = () => {
    return (
        <div>
            <ul>
            {
                futbolistas.map(futRec => <FormularioComponent key={futRec.key} futbolista={futRec} />)
            }
            </ul>
        </div>
    );
}
export default ListaComponent;