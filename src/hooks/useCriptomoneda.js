import React, { Fragment, useState } from 'react'
import { Label, Select } from '../StylesComonents/useMonedaStyle';

const useCriptomoneda = ( label,initialState, opciones )=>{

    const [ state, actualizarState ] = useState(initialState);

    const SelectCripto = ()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e=> actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>--Seleccione una opción--</option>
                {
                    opciones.map(cripto=>(
                        <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </Fragment>
    )

    //retornar state, interfaz y fn que modifica el state.
    return [ state, SelectCripto, actualizarState ];
}

export default useCriptomoneda;
