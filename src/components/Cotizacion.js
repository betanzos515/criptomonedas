import React from 'react'
import { Info, Precio, ResultadoDiv } from '../StylesComonents/CotizacionStyles';

export const Cotizacion = ({ resultado }) => {
    if(Object.keys(resultado).length === 0) return null;

    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>        
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>        
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>        
            <Info>Variación útlimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>        
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>        
        </ResultadoDiv>
    )
}
