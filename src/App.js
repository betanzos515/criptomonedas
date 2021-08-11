import { Contenedor, Heading, Imagen } from "./StylesComonents/ContenedorStyle";
import imagen from "./cryptomonedas.png";
import { Formulario } from "./components/Formulario";
import { useState, useEffect } from "react";
import { consultarPrecio } from "./helpers";
import { Cotizacion } from "./components/Cotizacion";

function App() {
  const [data, guardarData] = useState({
    moneda: "",
    criptomoneda: "",
  });
  const [resultado, guardarResultado] = useState({});
  const { moneda, criptomoneda } = data;
  useEffect(() => {
    if (moneda === "") {
      return null;
    }
    consultarPrecio(criptomoneda, moneda).then((data) =>
      guardarResultado(data.DISPLAY[criptomoneda][moneda])
    ) 
  }, [moneda, criptomoneda]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Crypto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario guardarData={guardarData} />
        <Cotizacion
          resultado={resultado}
        />
      </div>
    </Contenedor>
  );
}

export default App;
