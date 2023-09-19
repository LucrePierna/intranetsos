import React, { useState } from 'react';
import '../estilos/estilos.css'

function Reintegro() {
  const [comp, setComp] = useState('o');
  const [veh, setVeh] = useState('a');
  const [zon, setZon] = useState('r');
  const [kms, setKms] = useState('');
  const [trasladoChecked, setTrasladoChecked] = useState(false);
  const [mecanicaChecked, setMecanicaChecked] = useState(false);
  const [resultado, setResultado] = useState(null);

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
          a: { valor: 4100, km: 145 },
          l: { valor: 4600, km: 151 },
          ca: { valor: 15000, km: 350 },
        },
        // Valores para Patagonia
        p: {
          a: { valor: 5380, km: 167 },
          l: { valor: 5652, km: 181 },
          ca: { valor: 16000, km: 400 },
        },
      },
      // Valores para Federación Patronal
      f: {
        // Valores para Resto del País
        r: {
          a: { valor: 4100, km: 183.33 },
          l: { valor: 4600, km: 183.33 },
          ca: { valor: 15000, km: 183.33 },
        },
        // Valores para Patagonia
        p: {
          a: { valor: 5380, km: 183.33 },
          l: { valor: 5652, km: 183.33 },
          ca: { valor: 16000, km: 183.33 },
        },
      },
    };

    let montototal = 0;

    if (
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
            valorMecanica = 2050; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 2690; // Patagonia
          }
        } else if (vehValue === 'l') {
          if (zonValue === 'r') {
            valorMecanica = 2300; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 2826; // Patagonia
          }
        } else if (vehValue === 'ca') {
          if (zonValue === 'r') {
            valorMecanica = 7500; // Nacional
          } else if (zonValue === 'p') {
            valorMecanica = 8000; // Patagonia
          }
        }

        montototal += valorMecanica;
      }

      setResultado(
        `SPEECH: Sr/a. Le informamos que se le va a cubrir el monto de <strong>$${montototal.toFixed(
          2
        )}</strong> correspondiente a ${trasladoChecked ? 'traslado' : ''} ${trasladoChecked && mecanicaChecked ? 'y' : ''
        } ${mecanicaChecked ? 'mecánica' : ''} de ${kmsValue} kms totales`
      );
    } else {
      setResultado('<strong>NO SE PUEDEN INGRESAR NÚMEROS NEGATIVOS</strong>');
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-secondary rounded-5 p-4">
            <h1>CALCULO DE REINTEGRO</h1>
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
                  <option value="r">Resto del País</option>
                  <option value="p">Patagonia</option>
                </select>
              </label>
            </div>
            {mecanicaChecked ? (
              <div className="mt-3">
                <label>
                  Kilómetros <b>Lineales:</b>
                  <input
                    type="number"
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
                    type="number"
                    className="form-control input-style"
                    value={kms}
                    onChange={(e) => setKms(e.target.value)}
                  />
                </label>
              </div>
            )}
            <button className="btn btn-danger mt-3" onClick={calc_reintegro1}>Calcular</button>
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
