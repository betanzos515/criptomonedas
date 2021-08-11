import React, { Fragment, useState } from 'react'
import { Label, Select } from '../StylesComonents/useMonedaStyle';

const useMoneda = ( label,initialState, opciones )=>{

    const [ state, actualizarState ] = useState(initialState);
    const Seleccionar = ()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e=> actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>--Seleccione una opción--</option>
                {opciones.map(item=>(
                    <option value={item.codigo} key={item.codigo}>{item.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )

    //retornar state, interfaz y fn que modifica el state.
    return [ state, Seleccionar, actualizarState ];
}

export default useMoneda;
