import React, { useState } from 'react';
import '../estilos/estilos.css'

function Reintegro() {
  const [comp, setComp] = useState('o');
  const [veh, setVeh] = useState('a');
  const [zon, setZon] = useState('r');
  const [kms, setKms] = useState('');
  const [trasladoChecked, setTrasladoChecked] = useState(true);
  const [mecanicaChecked, setMecanicaChecked] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [copiado, setCopiado] = useState(false);

  const calc_reintegro1 = () => {
    const compValue = comp;
    const vehValue = veh;
    const zonValue = zon;
    const kmsValue = parseFloat(kms) * 2;


    const valores = {

      // Valores para Otras Compañías
      o: {
        // Valores para Resto del País
        r: {
          a: { valor: 5700, km: 202 },
          l: { valor: 6400, km: 210 },
          ca: { valor: 21000, km: 485 },
        },
        // Valores para Patagonia
        p: {
          a: { valor: 7600, km: 235 },
          l: { valor: 7900, km: 255 },
          ca: { valor: 22500, km: 565 },
        },
      },
      // Valores para Federación Patronal
      f: {
        // Valores para Resto del País
        r: {
          a: { valor: 5700, km: 227 },
          l: { valor: 6400, km: 227 },
          ca: { valor: 21000, km: 227 },
        },
      },
    };

    let montototal = 0;

    if (
      setCopiado(false),
      ((trasladoChecked || mecanicaChecked) &&
        (Math.sign(kmsValue) === 1 || Math.sign(kmsValue) === 0)) ||
      mecanicaChecked
    ) {
      const valor = valores[compValue][zonValue][vehValue];

      if (trasladoChecked) {
        montototal += valor.valor + kmsValue * valor.km;
      }
      //VALORES DE MECANICA
      if (mecanicaChecked) {

        let valorMecanica = 0;

        if (vehValue === 'a') {
          if (zonValue === 'r') {
            valorMecanica = 2850; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 3800; // Patagonia
          }
        } else if (vehValue === 'l') {
          if (zonValue === 'r') {
            valorMecanica = 3200; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 3950; // Patagonia
          }
        } else if (vehValue === 'ca') {
          if (zonValue === 'r') {
            valorMecanica = 10500; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 11250; // Patagonia
          }
        }

        montototal += valorMecanica;
      }

      setResultado(
        `SPEECH: Sr/a. Le informamos que se le va a cubrir el monto de $${Math.floor(montototal)/* .toFixed(
          0
        ) */} correspondiente a ${trasladoChecked ? 'traslado' : ''} ${trasladoChecked && mecanicaChecked ? 'y' : ''
        } ${mecanicaChecked ? 'mecánica' : ''} de ${kmsValue} kms totales`
      );
    } else {
      setResultado('<strong>NO SE PUEDEN INGRESAR NÚMEROS NEGATIVOS</strong>');
    }
  };


  const handleCopy = () => {
    if (resultado) {
      navigator.clipboard.writeText(resultado).then(() => {
        setCopiado(true);
        console.log('Resultado copiado al portapapeles: ' + resultado);
      }).catch((error) => {
        console.error('Error al copiar al portapapeles: ' + error);
      });
    }
  }

  const handleRestet = () => {
    setComp('o');
    setVeh('a');
    setZon('r');
    setKms('');
    setTrasladoChecked(true);
    setMecanicaChecked(false);
    setResultado(null);
    setCopiado(false);
  }

  return (
    <div className="container text-center mt-5 py-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-secondary rounded-5 p-4">
            <h1 className='text-center mb-3'>CALCULO DE REINTEGRO</h1>
            <p className="bg-danger text-white p-2 border border-danger label-style">
              <b>Importante!!</b> Recordar informar que debe ser una factura fiscal y el socio debe adjuntarla con sus datos bancarios en www.redsos.com.ar
            </p>
            <div className="d-flex justify-content-center">
              <div className="mr-4">
                <div className="form-check">
                  <input
                    className="form-check-input  rounded-circle mx-1"
                    type="checkbox"
                    checked={trasladoChecked}
                    onChange={() => {
                      setTrasladoChecked(!trasladoChecked);
                      if (mecanicaChecked) {
                        setMecanicaChecked(false);
                      }
                    }}
                  />
                  <label className="form-check-label">Traslado</label>
                </div>
              </div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input  rounded-circle mx-1"
                    type="checkbox"
                    checked={mecanicaChecked}
                    onChange={() => {
                      setMecanicaChecked(!mecanicaChecked);
                      if (trasladoChecked) {
                        setTrasladoChecked(false);
                      }
                    }}
                  />
                  <label className="form-check-label">Mecánica</label>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label>
                Compañía:
                <select className="form-select container-style" value={comp} onChange={(e) => setComp(e.target.value)}>
                  <option value="o">Otras Compañías</option>
                  <option value="f">Federación Patronal</option>
                </select>
              </label>
            </div>
            <div className="mt-3">
              <label>
                Vehículo:
                <select className="form-select container-style" value={veh} onChange={(e) => setVeh(e.target.value)}>
                  <option value="a">Auto/Moto</option>
                  <option value="l">Liviano Excedido</option>
                  <option value="ca">Camiones</option>
                </select>
              </label>
            </div>
            <div className="mt-3">
              <label>
                Zona:
                <select className="form-select container-style" value={zon} onChange={(e) => setZon(e.target.value)}>
                  {comp === 'f' ? (
                    <option value="f">País</option>
                  ) : (
                    <option value="r">Resto del País</option>
                  )}
                  {comp === 'o' && <option value="p">Patagonia</option>}
                </select>
              </label>
            </div>

            {mecanicaChecked ? (
              <div className="mt-3">
                <label>
                  Kilómetros <b>Lineales:</b>
                  <input
                    type="text"
                    className="form-control input-style"
                    value={kms}
                    onChange={(e) => setKms(e.target.value)}
                    disabled
                  />
                </label>
              </div>
            ) : (
              <div className="mt-3">
                <label>
                  Kilómetros <b>Lineales:</b>
                  <input
                    type="text"
                    className="form-control input-style"
                    value={kms}
                    onChange={(e) => setKms(e.target.value)}
                  />
                </label>
              </div>
            )}
            <div className='d-flex flex-row justify-content-center'>
              <button className="btn btn-danger mt-3 mx-4" onClick={calc_reintegro1}>Calcular</button>
              <button className={`btn btn-${copiado ? 'success' : 'danger'} mt-3 mx-2`} onClick={copiado ? null : handleCopy}>
                {copiado ? 'Copiado' : 'Copiar'}
              </button>
              <button className="btn btn-danger mt-3 mx-4" onClick={handleRestet}>Limpiar</button>
            </div>
            {resultado && (
              <div className="mt-3 py-4" dangerouslySetInnerHTML={{ __html: resultado }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Reintegro;
