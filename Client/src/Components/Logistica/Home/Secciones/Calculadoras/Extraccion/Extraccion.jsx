import React, { useState } from "react";
import imgIva from '../../../../Image/Imagenes/iva.png'
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
    <div className="container text-center mt-3 h-50 w-50 bg-secondary rounded-5 p-4">
      <h1 className="text-center my-3">CALCULADORA DE EXTRACCIÓN</h1>
      <div className='bg-dark border border-black rounded-2 p-2 mt-3'>
        <h2 className="fs-5"><b>Verificar Condición del IVA</b></h2>
        <p className="fs-6">
          Puede consultarse en la grilla del prestador, haciendo clic en el botón <b>Datos Fiscales</b>,
          que aparece en el lado derecho en <b>CONDICIÓN DE IVA</b>
        </p>
      </div>
      <div className='py-3'>
        <img src={imgIva} alt="ivaImg" className="imgExtraccion" />
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
        <label className="mx-4">
          Importe Cotizado:
          <input
            id="cotizado"
            type="text"
            className="inputCustom" />
        </label>
        <label className="mt-3">
          Cobertura del cliente:
          <input
            id="cobertura"
            type="text"
            className="input-custom" />
        </label>
        <div className="mt-3">
          <button className="btn btn-danger buttonExt" onClick={handleCalcular}>Calcular</button>
        </div>
      </div>
    </div>
  );
}

export default Extraccion;
