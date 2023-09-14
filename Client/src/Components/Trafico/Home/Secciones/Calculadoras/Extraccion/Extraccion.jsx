import React, { useState } from "react";
import ivaImagen from '../../../../Image/iva.png'
import './Extraccion.css'

function Extraccion() {
  const [monto, setMonto] = useState(0);
  const [iva, setIva] = useState(false);

  const handleCalcular = () => {
    const cotizado = parseFloat(document.getElementById("cotizado").value);
    const cobertura = parseFloat(document.getElementById("cobertura").value);

    // Utiliza el valor actualizado de iva
    if (iva) {
      if (cobertura * 0.0001 > cotizado * 0.0001) {
        setMonto(cotizado);
        document.getElementById("resultado").style.color = "white";
        document.getElementById("resultado").innerHTML =
          "IMPORTE CORREGIDO: $" +
          Math.round(monto) +
          "<br/>-El socio no debe abonar nada-";
      } else {
        setMonto(cobertura);
        document.getElementById("resultado").style.color = "white";
        document.getElementById("resultado").innerHTML =
          "IMPORTE CORREGIDO: $" +
          Math.round(monto) +
          "<br/>-El socio debe abonar: $" +
          (cotizado - cobertura) +
          "-";
      }
    } else {
      // Utiliza el valor actualizado de iva en lugar de verificar nuevamente
      calculo(cotizado, cobertura, iva);
    }
  };

  const calculo = (cotizado, cobertura, iva) => {
    if (cobertura * 0.0001 > cotizado * 0.0001) {
      setMonto(cotizado / 1.21);
      document.getElementById("resultado").style.color = "white";
      document.getElementById("resultado").innerHTML =
        "IMPORTE CORREGIDO: $" +
        Math.round(monto) +
        "<br/>-El socio no debe abonar nada-";
    } else {
      setMonto(cobertura / 1.21);
      document.getElementById("resultado").style.color = "white";
      document.getElementById("resultado").innerHTML =
        "IMPORTE CORREGIDO: $" +
        Math.round(monto) +
        "<br/>-El socio debe abonar: $" +
        (cotizado - cobertura) +
        "-";
    }
  };

  const handleIvaChange = (e) => {
    setIva(e.target.id === "monot");
  };

  return (
    <div className="container text-center mt-3 h-70 w-50 bg-secondary rounded-5 p-2">
      <h1>Calculadora de Extracción</h1>
      <div className='bg-dark border border-black rounded-2'>
        <h2><b>Verificar Condición del IVA</b></h2>
        <p>
          Puede consultarse en la grilla del prestador, haciendo clic en el botón <b>Datos Fiscales</b>,
          que aparece en el lado derecho en <b>CONDICIÓN DE IVA</b>
        </p>
      </div>
      <div className='py-3'>
        <img src={ivaImagen} alt="ivaImg" height={200} width={450} />
      </div>
      <div className="mt-3 py-2">
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <div className="custom-checkbox">
              Responsable Incripto
              <input
                type="checkbox"
                id="respit"
                checked={!iva}
                onChange={handleIvaChange}
              />
              <span className="checkmark"></span>
            </div>
          </label>
          <label className="form-check-label mx-3">
            <div className="custom-checkbox">
              Monotributista
              <input
                type="checkbox"
                id="monot"
                checked={iva}
                onChange={handleIvaChange}
              />
              <span className="checkmark"></span>
            </div>
          </label>
        </div>
      </div>
      <div className="d-flex flex-column">
        <label>
          Inporte Cotizado:
          <input
            id="cotizado"
            type="text"
            style={{
              border: '1px solid black',
              boxShadow: '0 0 5px black',
              padding: '2px',
              marginTop: '10px',
              marginLeft: '5px',
            }} />
        </label>
        <label >
          Cobertura del cliente:
          <input
            id="cobertura"
            type="text"
            style={{
              border: '1px solid black',
              boxShadow: '0 0 5px black',
              padding: '2px',
              marginTop: '10px',
              marginLeft: '5px',
            }} />
        </label>
        <button className="btn btn-danger mt-4 my-3" onClick={handleCalcular}>Calcular</button>

        <div className="mt-1 py-3" id="resultado"></div>
      </div>
    </div>
  );
}

export default Extraccion;
