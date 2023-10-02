import React, { useState } from 'react';
import ivaImagen from '../../../../Image/Imagenes/iva.png'

function Extraccion() {
  const [tipoResponsable, setTipoResponsable] = useState('responsableInscripto');
  const [importeCotizado, setImporteCotizado] = useState(0);
  const [coberturaCliente, setCoberturaCliente] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [mensajeCubierto, setMensajeCubierto] = useState(null);

  const handleTipoResponsableChange = (event) => {
    setTipoResponsable(event.target.value);
  };

  const handleImporteCotizadoChange = (event) => {
    setImporteCotizado(parseFloat(event.target.value));
  };

  const handleCoberturaClienteChange = (event) => {
    setCoberturaCliente(parseFloat(event.target.value));
  };

  const calcularValor = () => {
    if (tipoResponsable === 'responsableInscripto') {
      const iva = 0.21;
      let valorFinal = 0;

      if (importeCotizado > coberturaCliente) {
        valorFinal = importeCotizado - coberturaCliente
      } else {
        valorFinal = (importeCotizado / (1 + iva)) - coberturaCliente;

        if (valorFinal <= 0) {
          setResultado(0);
          setMensajeCubierto('CUBIERTO PARA CLIENTE');
          return;
        }
      }

      if (valorFinal <= 0) {
        setResultado(0);
        setMensajeCubierto('CUBIERTO PARA CLIENTE');
      } else {
        setResultado(valorFinal);
        setMensajeCubierto(null);
      }
    } else {
      const valorFinal = importeCotizado - coberturaCliente;

      if (valorFinal <= 0) {
        setResultado(0);
        setMensajeCubierto('CUBIERTO PARA CLIENTE');
      } else {
        setResultado(valorFinal);
        setMensajeCubierto(null);
      }
    }
  };


  const calcularImporteCorregido = () => {
    if (tipoResponsable === 'responsableInscripto') {
      const iva = 0.21;
      if (coberturaCliente < importeCotizado) {
        return (coberturaCliente / (1 + iva)).toFixed(0);
      } else {
        return (importeCotizado / (1 + iva)).toFixed(0);
      }
    } else {
      return coberturaCliente;
    }
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
        <img src={ivaImagen} alt="ivaImg" className="imgExtraccion" />
      </div>
      <div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              name="tipoResponsable"
              value="responsableInscripto"
              checked={tipoResponsable === 'responsableInscripto'}
              onChange={handleTipoResponsableChange}
              className='mx-1 '
              style={{ backgroundColor: tipoResponsable === 'responsableInscripto' ? 'red' : 'transparent' }}
            />
            Responsable Inscripto
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              name="tipoResponsable"
              value="monotributista"
              checked={tipoResponsable === 'monotributista'}
              onChange={handleTipoResponsableChange}
              className='mx-1'
              style={{ backgroundColor: tipoResponsable === 'monotributista' ? 'red' : 'transparent' }}
            />
            Monotributista
          </label>
        </div>
      </div>
      <div className="d-flex flex-column">
        <label className="mx-4 mt-3 fw-bold">
          Importe Cotizado:
        </label>
        <input type="number" value={importeCotizado} onChange={handleImporteCotizadoChange} className="inputCustom" />
        <label className="mt-3 fw-bold">
          Cobertura de Cliente:
        </label>
        <input type="number" value={coberturaCliente} onChange={handleCoberturaClienteChange} className="input-custom" />
        <div className="mt-3">
          <button className="btn btn-danger buttonExt" onClick={calcularValor}>Calcular</button>
        </div>
        <div>
          {resultado !== null && <h2 className="my-3 text-bg-danger">IMPORTE CORREGIDO: ${calcularImporteCorregido()}</h2>}
          {resultado !== null && <h2 className="my-3 text-bg-danger">CLIENTE DEBE ABONAR: ${resultado}</h2>}
          {mensajeCubierto && <p className="text-center text-bg-success">{mensajeCubierto}</p>}
        </div>
      </div>
    </div>
  );
}

export default Extraccion;