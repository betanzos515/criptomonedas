import React, { useEffect, useState } from 'react'
import { consultarAPI, MONEDAS } from '../helpers'
import useCriptomoneda from '../hooks/useCriptomoneda'
import useMoneda from '../hooks/useMoneda'
import { Boton } from '../StylesComonents/FormularioStyles'
import { Error } from './Error'


export const Formulario = ({guardarData}) => {

    const [ criptomonedas, guardarCriptomonedas ] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, Seleccionar ] = useMoneda('Elige tu moneda','',MONEDAS);
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda','',criptomonedas);


    useEffect( () => {
        consultarAPI().then(data=> guardarCriptomonedas(data.Data));
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            setError(true);
            return null;
        }
        setError(false);
        guardarData({
            moneda,
            criptomoneda
        })
    };

    return (
        
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <Seleccionar />
            <SelectCripto/>
            <Boton
                type='submit'
                value='Calcular'
            />
        </form>
    )
}
