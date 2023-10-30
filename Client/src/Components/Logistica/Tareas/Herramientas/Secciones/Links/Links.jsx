import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function PlanillasyLinks() {
  return (
    <div className='conteinerNav mt-5 justify-content-center'>
      <div class="tab-content " id="nav-tabContent">
        <div className='tab-content d-flex flex-row mt-3 m-auto '>
          <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
            <TableHeader>
              <TableColumn className="border border-dark bg-danger text-light">TAREA</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">AREA</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">LINK</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">PLANILLA</TableColumn>
            </TableHeader>
            <TableBody >
              <TableRow key="1" className="border border-dark bg-light text-black">
                <TableCell>Derivación General</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <a href="https://redsos-my.sharepoint.com/:x:/g/personal/framirez_redsos_com_ar/EWOq5sAqsPxBp5j2y5ExzmoB3ingUpKlTBOTCt0M03dyng?e=D8U9Mc" target='_blank'><button type='button' className='btn btn-danger'>Grilla de Dimensiones</button></a>
                </TableCell>
                <TableCell><a href="https://redsos-my.sharepoint.com/:x:/r/personal/jmolinari_redsos_com_ar/Documents/Prestadores%20con%20GAP%20Lite/PRESTADORES%20GAP%20Lite.xlsx?d=w03ab3d1ddfe14e43a534d851f9e06532&csf=1&web=1&e=zWm82z" target='_blank'><button type='button' className='btn btn-danger'>Planilla Prestadores GapLite</button></a></TableCell>
              </TableRow>
              <TableRow key="2" className="border border-dark bg-light text-black">
                <TableCell>Torre de Conexión</TableCell>
                <TableCell></TableCell>
                <TableCell><a href="http://cba-mstr02:8080/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=8C6D331949623CB6CE573F818C42E8E6&Server=CBA-MSTR02&Project=SOS%20BI&Port=0&share=1" target='_blank' rel='noopener noreferrer'>
                  <button type='button' className='btn btn-danger'>MicroStrategy</button>
                </a></TableCell>
                <TableCell> <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7B5421D102-2397-4907-B6DB-5BD402591161%7D&file=REDUCCI%25u00d3N%20DE%20COSTOS%202023.xlsx&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer">
                  <button type="button" class="btn btn-danger">Planilla Torre de conexion</button>
                </a></TableCell>
              </TableRow>
              <TableRow key="3" className="border border-dark bg-light text-black">
                <TableCell>Extranjero</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/Documents/Extranjeros.xlsx?d=w865d5b4f42cc47ff9c639815123182a0&csf=1&web=1&e=IyKZWu" target="_blank" rel="noopener noreferrer">
                  <button type='button' class="btn btn-danger">Planilla Extranjero</button>
                </a></TableCell>
              </TableRow>
              <TableRow key="4" className="border border-dark bg-light text-black">
                <TableCell>Extranjero</TableCell>
                <TableCell>Uruguay</TableCell>
                <TableCell><a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales" target='_blank'><button type='button' class="btn btn-danger">Horarios Pasos Fronterizos</button></a> <a href="https://www.caru.org.uy/web/servicios/tarifas-de-los-puentes/" target='_blank'><button type='button' class="btn btn-danger">Valor del Peaje</button></a></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key="5" className="border border-dark bg-light text-black">
                <TableCell>Extranjero</TableCell>
                <TableCell>Brasil</TableCell>
                <TableCell><a href="https://www.bna.com.ar/Personas" target='_blank'><button type='button' class="btn btn-danger">Cotización Divisa</button></a> </TableCell>
                <TableCell><a href="https://redsos.sharepoint.com/:x:/r/sites/SGC/_layouts/15/Doc.aspx?sourcedoc=%7B47D48EF1-5CBC-4214-A314-1E45CA0C0361%7D&file=FL-08%20Red%20Nacional%20-%20Planilla%20de%20Cierre%20de%20Servicio%20-%20Brasil%2CRev04.xlsx&action=default&mobileredirect=true" target='_blank'><button type='button' class="btn btn-danger">Planilla de Cierre de Servicio</button></a></TableCell>
              </TableRow>
              <TableRow key="6" className="border border-dark bg-light text-black">
                <TableCell>Extranjero</TableCell>
                <TableCell>Chile</TableCell>
                <TableCell><a href="https://www.bna.com.ar/Personas" target='_blank'><button type='button' class="btn btn-danger">Verificar dólar oficial</button></a></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key="7" className="border border-dark bg-light text-black">
                <TableCell>Extranjero</TableCell>
                <TableCell>Paraguay</TableCell>
                <TableCell><a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales" target='_blank'><button type='button' class="btn btn-danger">Verificar Pasos Fronterizos</button></a></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key="8" className="border border-dark bg-light text-black">
                <TableCell>ATP</TableCell>
                <TableCell></TableCell>
                <TableCell><a href="https://login.chattigo.com/" target="_blank" rel="noopener noreferrer">
                  <button type='button' class="btn btn-danger">Chattigo</button>
                </a></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key="9" className="border border-dark bg-light text-black">
                <TableCell>Transportin</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><a href="https://redsos-my.sharepoint.com/:x:/g/personal/lpierna_redsos_com_ar/EYIESn0usSxBo8vNI2MIRsIBv6Bljn5VrWUiaSC-8IGhcg?e=lkcLdm" target="_blank" rel="noopener noreferrer">
                  <button type='button' class="btn btn-danger">Planilla Transportin</button>
                </a>
                  <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lugomez_redsos_com_ar/Documents/PRESTADORES%20TRANSPORTIN.xlsx?d=w278b4127b8954618aa1b2f6ee37a1d0f&csf=1&web=1&e=ogxaMj" target="_blank" rel="noopener noreferrer">
                    <button type='button' class="btn btn-danger">Planilla Bases de Guarda Transportin</button>
                  </a>
                </TableCell>
              </TableRow>
              <TableRow key="10" className="border border-dark bg-light text-black">
                <TableCell>Viajero</TableCell>
                <TableCell></TableCell>
                <TableCell><a href="https://www.centraldepasajes.com.ar" target='_blank'>
                  <button type='button' class="btn btn-danger">Central de Pasajes</button>
                </a>
                  <a href="https://www.plataforma10.com.ar" target='_blank'>
                    <button type='button' class="btn btn-danger">Plataforma 10</button>
                  </a>
                  <a href="https://www.telexplorer.com.ar/" target='_blank'>
                    <button type='button' class="btn btn-danger">Telexplorer</button>
                  </a>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key="11" className="border border-dark bg-light text-black">
                <TableCell>Terminales y Pesados</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/Documents/Bases%20de%20pesados.xlsx?d=wa06ab9e22ee94df5a42630b6d4faf7ca&csf=1&web=1&e=OybvVu" target="_blank" rel="noopener noreferrer">
                  <button type='button' class="btn btn-danger">Planilla de bases de pesados</button>
                </a></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>



  )
}
