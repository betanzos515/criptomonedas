import axios from "axios";

export const consultarAPI = async ()=>{
    const api = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
    const resultado = await axios.get(api);
    const data = await resultado.data;
    return data;
}

export const MONEDAS = [
    { codigo:'USD', nombre: 'Dolar Americano' },
    { codigo:'MXN', nombre: 'Peso Mexicano' },
    { codigo:'EUR', nombre: 'Euro' },
    { codigo:'GBP', nombre: 'Libra Esterlina' }
]

export const consultarPrecio = async ( cripto, moneda )=>{
    const urlAPI = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    const resultado = await axios.get(urlAPI);
    const respuesta = await resultado.data;
    return respuesta;
}