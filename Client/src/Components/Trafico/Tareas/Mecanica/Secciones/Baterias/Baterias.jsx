import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Precios from '../../../../Image/Baterias.png'


export default function Agenda() {
  return (
    <div className='conteinerNav mt-5  ' >
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-precios-tab" data-bs-toggle="tab" data-bs-target="#nav-precios" type="button" role="tab" aria-controls="nav-precios" aria-selected="true">Precios</button>
          <button className="nav-link custom" id="nav-bases-tab" data-bs-toggle="tab" data-bs-target="#nav-bases" type="button" role="tab" aria-controls="nav-bases" aria-selected="false">Bases</button>
        </div>
      </nav>
      <div className="tab-content mt-3 px-5 m-auto text-start fs-5" id="nav-tabContent">
        <div className="tab-pane fade show active w-50 h-50 mt-5" id="nav-precios" role="tabpanel" aria-labelledby="nav-precios-tab" tabindex="0">
          <img src={Precios} alt="Precios" className='responsiveImg' />
        </div>
        <div className="tab-pane fade" id="nav-bases" role="tabpanel" aria-labelledby="nav-bases-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-batmza-tab" data-bs-toggle="tab" data-bs-target="#nav-batmza" type="button" role="tab" aria-controls="nav-batmza" aria-selected="true">Mendoza</button>
              <button class="nav-link sub" id="nav-batstafe-tab" data-bs-toggle="tab" data-bs-target="#nav-batstafe" type="button" role="tab" aria-controls="nav-batstafe" aria-selected="true">Santa Fe</button>
              <button class="nav-link sub" id="nav-batcba-tab" data-bs-toggle="tab" data-bs-target="#nav-batcba" type="button" role="tab" aria-controls="nav-batcba" aria-selected="false">Córdoba</button>
              <button class="nav-link sub" id="nav-batbsas-tab" data-bs-toggle="tab" data-bs-target="#nav-batbsas" type="button" role="tab" aria-controls="nav-batbsas" aria-selected="false">Buenos Aires</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active " id="nav-batmza" role="tabpanel" aria-labelledby="nav-batmza-tab" tabindex="0">
              <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
                <TableHeader>
                  <TableColumn className="border border-dark bg-danger text-light">RAZÓN SOCIAL</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">CALLE/DIRECCIÓN</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">PROVINCIA</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">LOCALIDAD</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">TELÉFONO</TableColumn>
                </TableHeader>
                <TableBody >
                  <TableRow key="1" className="border border-dark bg-light text-black">
                    <TableCell>Familia Metales</TableCell>
                    <TableCell>Pedro B Palacios 534</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Ciudad</TableCell>
                    <TableCell>2615538855</TableCell>
                  </TableRow>
                  <TableRow key="2" className="border border-dark bg-light text-black">
                    <TableCell>Izquierdo Carlos</TableCell>
                    <TableCell>San Miguel 1281</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Las Heras</TableCell>
                    <TableCell>2616531031</TableCell>
                  </TableRow>
                  <TableRow key="3" className="border border-dark bg-light text-black">
                    <TableCell>Mansilla Gustavo</TableCell>
                    <TableCell>San Juan 451</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Palmira</TableCell>
                    <TableCell>2616390321</TableCell>
                  </TableRow>
                  <TableRow key="4" className="border border-dark bg-light text-black">
                    <TableCell>Flores Mario</TableCell>
                    <TableCell>Av Libertador 1073</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Palmira</TableCell>
                    <TableCell>2634551747</TableCell>
                  </TableRow>
                  <TableRow key="5" className="border border-dark bg-light text-black">
                    <TableCell>Daguerre Rolando</TableCell>
                    <TableCell>España 621</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>San Martin</TableCell>
                    <TableCell>2634370116</TableCell>
                  </TableRow>
                  <TableRow key="6" className="border border-dark bg-light text-black">
                    <TableCell>Gutierrez Fernando</TableCell>
                    <TableCell>Sarmiento 489</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Rivadavia</TableCell>
                    <TableCell>2634212051</TableCell>
                  </TableRow>
                  <TableRow key="7" className="border border-dark bg-light text-black">
                    <TableCell>Aveiro Jacinto Gabriel</TableCell>
                    <TableCell>Pelegrini 278</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Tunuyan</TableCell>
                    <TableCell>2622445999</TableCell>
                  </TableRow>
                  <TableRow key="8" className="border border-dark bg-light text-black">
                    <TableCell>Miranda Rolando</TableCell>
                    <TableCell>Monseñor Fernandez 436</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Tupungato</TableCell>
                    <TableCell>2622679048</TableCell>
                  </TableRow>
                  <TableRow key="9" className="border border-dark bg-light text-black">
                    <TableCell>Toledano</TableCell>
                    <TableCell>Espinola 447</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>San Rafael</TableCell>
                    <TableCell>2604421770</TableCell>
                  </TableRow>
                  <TableRow key="10" className="border border-dark bg-light text-black">
                    <TableCell>Disan</TableCell>
                    <TableCell>Renato de la Santa 1435</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Godoy Cruz</TableCell>
                    <TableCell>261272015</TableCell>
                  </TableRow>
                  <TableRow key="11" className="border border-dark bg-light text-black">
                    <TableCell>Baterias Cortese</TableCell>
                    <TableCell>Sarmiento 813</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Maipu</TableCell>
                    <TableCell>2614978993</TableCell>
                  </TableRow>
                  <TableRow key="12" className="border border-dark bg-light text-black">
                    <TableCell>Baterias Vicent</TableCell>
                    <TableCell>Av San Martin y Pedraza</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Las Heras</TableCell>
                    <TableCell>2616392201</TableCell>
                  </TableRow>
                  <TableRow key="13" className="border border-dark bg-light text-black">
                    <TableCell>Herbo Mendoza</TableCell>
                    <TableCell>Pedro B Palacios 40</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Ciudad</TableCell>
                    <TableCell>2613036622</TableCell>
                  </TableRow>
                  <TableRow key="14" className="border border-dark bg-light text-black">
                    <TableCell>Baterias Vicent</TableCell>
                    <TableCell>Tirasso Esq. Lugones</TableCell>
                    <TableCell>Mendoza</TableCell>
                    <TableCell>Villa Nueva</TableCell>
                    <TableCell>2616392201</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="tab-pane fade" id="nav-batstafe" role="tabpanel" aria-labelledby="nav-batstafe-tab" tabindex="0">
              <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
                <TableHeader>
                  <TableColumn className="border border-dark bg-danger text-light">RAZÓN SOCIAL</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">CALLE/DIRECCIÓN</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">PROVINCIA</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">LOCALIDAD</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">TELÉFONO</TableColumn>
                </TableHeader>
                <TableBody >
                  <TableRow key="1" className="border border-dark bg-light text-black">
                    <TableCell>Gardeñes Oscar Jose</TableCell>
                    <TableCell>Rivadavia 1779</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Venado Tuerto</TableCell>
                    <TableCell>03462 424030 / 03462463442</TableCell>
                  </TableRow>
                  <TableRow key="2" className="border border-dark bg-light text-black">
                    <TableCell>Pasotti Osvaldo Ruben</TableCell>
                    <TableCell>Hipolito Irigoyen 1650</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Venado tuerto</TableCell>
                    <TableCell>03462420579 / 3462417160</TableCell>
                  </TableRow>
                  <TableRow key="3" className="border border-dark bg-light text-black">
                    <TableCell>Giagnoni Dario</TableCell>
                    <TableCell>Lamadrid 2544</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>3424541613</TableCell>
                  </TableRow>
                  <TableRow key="4" className="border border-dark bg-light text-black">
                    <TableCell>Bateria Thilco S.A</TableCell>
                    <TableCell>Marcial Candioti 2890</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>3424558399</TableCell>
                  </TableRow>
                  <TableRow key="5" className="border border-dark bg-light text-black">
                    <TableCell>Bateria Thilco S.A</TableCell>
                    <TableCell>Av Blas Paredas 6465</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>3424893514</TableCell>
                  </TableRow>
                  <TableRow key="6" className="border border-dark bg-light text-black">
                    <TableCell>Brachetta Marcelo Luis</TableCell>
                    <TableCell>27 de febrero 2427</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3414330041</TableCell>
                  </TableRow>
                  <TableRow key="7" className="border border-dark bg-light text-black">
                    <TableCell>Pinto Ezequiel Eduardo</TableCell>
                    <TableCell>H de la quintana 1235</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3416807785</TableCell>
                  </TableRow>
                  <TableRow key="8" className="border border-dark bg-light text-black">
                    <TableCell>Cramer Acumuladores S.R.L</TableCell>
                    <TableCell>Bv 27 de febrero 1160</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3414819575</TableCell>
                  </TableRow>
                  <TableRow key="9" className="border border-dark bg-light text-black">
                    <TableCell>Sanchez Marcelo Carlos</TableCell>
                    <TableCell>Av Sabin 262 bis</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3412737852</TableCell>
                  </TableRow>
                  <TableRow key="10" className="border border-dark bg-light text-black">
                    <TableCell>Gomez Gerardo Alberto</TableCell>
                    <TableCell>Arijon e Italia</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3416770475</TableCell>
                  </TableRow>
                  <TableRow key="11" className="border border-dark bg-light text-black">
                    <TableCell>Isanet SRL</TableCell>
                    <TableCell>Rodriguez y Braun</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Rosario</TableCell>
                    <TableCell>3413063508</TableCell>
                  </TableRow>
                  <TableRow key="12" className="border border-dark bg-light text-black">
                    <TableCell>Halfaman Antonio</TableCell>
                    <TableCell>Facundo Zuviria 8185</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>Santa Fe</TableCell>
                    <TableCell>3425488517</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="tab-pane fade" id="nav-batcba" role="tabpanel" aria-labelledby="nav-batcba-tab" tabindex="0">
              <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
                <TableHeader>
                  <TableColumn className="border border-dark bg-danger text-light">RAZÓN SOCIAL</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">CALLE/DIRECCIÓN</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">PROVINCIA</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">LOCALIDAD</TableColumn>
                  <TableColumn className="border border-dark bg-danger text-light">TELÉFONO</TableColumn>
                </TableHeader>
                <TableBody >
                  <TableRow key="1" className="border border-dark bg-light text-black">
                    <TableCell>Motta</TableCell>
                    <TableCell>Botello 4573</TableCell>
                    <TableCell>Córdoba</TableCell>
                    <TableCell>Córdoba</TableCell>
                    <TableCell>3515690984</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="tab-pane fade" id="nav-batbsas" role="tabpanel" aria-labelledby="nav-batbsas-tab" tabindex="0">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active " id="nav-batbs" role="tabpanel" aria-labelledby="nav-batbs-tab" tabindex="0">
                  <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
                    <TableHeader>
                      <TableColumn className="border border-dark bg-danger text-light">RAZÓN SOCIAL</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">CALLE/DIRECCIÓN</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">PROVINCIA</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">LOCALIDAD</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">TELÉFONO</TableColumn>
                    </TableHeader>
                    <TableBody >
                      <TableRow key="1" className="border border-dark bg-light text-black">
                        <TableCell>Batibat</TableCell>
                        <TableCell>Av. Triunvirato 2888</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Villa Ortuzar</TableCell>
                        <TableCell>4554-8326 / 11-6091-3771</TableCell>
                      </TableRow>
                      <TableRow key="2" className="border border-dark bg-light text-black">
                        <TableCell>Electromecánica J.J.</TableCell>
                        <TableCell>Av. Warnes 1150</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Villa Crespo</TableCell>
                        <TableCell>4854-6759</TableCell>
                      </TableRow>
                      <TableRow key="3" className="border border-dark bg-light text-black">
                        <TableCell>Centro de Baterías The Best</TableCell>
                        <TableCell>Av. Álvarez Thomas 393</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Colegiales</TableCell>
                        <TableCell>4553-9044</TableCell>
                      </TableRow>
                      <TableRow key="4" className="border border-dark bg-light text-black">
                        <TableCell>Centro de Baterías Novar</TableCell>
                        <TableCell>Av. Nazca 2501</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Villa del Parque</TableCell>
                        <TableCell>4502-8101</TableCell>
                      </TableRow>
                      <TableRow key="5" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Alcabat</TableCell>
                        <TableCell>Av. Garcia Del Río 2710</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Saavedra</TableCell>
                        <TableCell>4702-0300</TableCell>
                      </TableRow>
                      <TableRow key="6" className="border border-dark bg-light text-black">
                        <TableCell>Centro de Baterías Lotteri Hnos.</TableCell>
                        <TableCell>Av. Scalabrini Ortiz 1784</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Palermo</TableCell>
                        <TableCell>4831-4254 / 4832-4006</TableCell>
                      </TableRow>
                      <TableRow key="7" className="border border-dark bg-light text-black">
                        <TableCell>Más Baterías</TableCell>
                        <TableCell>Av. Rivadavia 9946</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Villa Luro</TableCell>
                        <TableCell>4684-1000</TableCell>
                      </TableRow>
                      <TableRow key="8" className="border border-dark bg-light text-black">
                        <TableCell>Lubricentro Castañares</TableCell>
                        <TableCell>Cañada de Gomez 4458</TableCell>
                        <TableCell>CABA</TableCell>
                        <TableCell>Villa Lugano</TableCell>
                        <TableCell>4602-8812</TableCell>
                      </TableRow>
                      <TableRow key="9" className="border border-dark bg-light text-black">
                        <TableCell>Centro de Baterías Wamax</TableCell>
                        <TableCell>Islas Malvinas 2605, Esquina Av. Pte. Perón</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>San Andrés</TableCell>
                        <TableCell>4752-3064 / 15-5841-0072</TableCell>
                      </TableRow>
                      <TableRow key="10" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Barma</TableCell>
                        <TableCell>Av. Bernardo Ader 802</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Boulogne</TableCell>
                        <TableCell>4735-3670</TableCell>
                      </TableRow>
                      <TableRow key="11" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Barma Jr.</TableCell>
                        <TableCell>Av. Andrés Rolón 2360</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Beccar</TableCell>
                        <TableCell>4723-4426</TableCell>
                      </TableRow>
                      <TableRow key="12" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Leo</TableCell>
                        <TableCell>Av. Nicolás Avellaneda 4476</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Virreyes</TableCell>
                        <TableCell>4714-4497</TableCell>
                      </TableRow>
                      <TableRow key="13" className="border border-dark bg-light text-black">
                        <TableCell>Autovoltaje</TableCell>
                        <TableCell>Av. Constitución 597</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Del Viso</TableCell>
                        <TableCell>02320-470787</TableCell>
                      </TableRow>
                      <TableRow key="14" className="border border-dark bg-light text-black">
                        <TableCell>Autoclima</TableCell>
                        <TableCell>Ruta Provincial 8 Nº976</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Pilar</TableCell>
                        <TableCell>0230-4421142</TableCell>
                      </TableRow>
                      <TableRow key="15" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Microbat</TableCell>
                        <TableCell>Av. 25 de Mayo 218</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Escobar</TableCell>
                        <TableCell>0348-4425449 / 0348-4430082</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="tab-pane fade" id="nav-batbsa" role="tabpanel" aria-labelledby="nav-batbsa-tab" tabindex="0">
                  <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
                    <TableHeader>
                      <TableColumn className="border border-dark bg-danger text-light">RAZÓN SOCIAL</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">CALLE/DIRECCIÓN</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">PROVINCIA</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">LOCALIDAD</TableColumn>
                      <TableColumn className="border border-dark bg-danger text-light">TELÉFONO</TableColumn>
                    </TableHeader>
                    <TableBody >
                      <TableRow key="16" className="border border-dark bg-light text-black">
                        <TableCell>Lubricentro José</TableCell>
                        <TableCell>San Martin 1172</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Los Cardales</TableCell>
                        <TableCell>0230-4493287</TableCell>
                      </TableRow>
                      <TableRow key="17" className="border border-dark bg-light text-black">
                        <TableCell>Morobat</TableCell>
                        <TableCell>Bv. Sarmiento 650</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Campana</TableCell>
                        <TableCell>03489 63-6896</TableCell>
                      </TableRow>
                      <TableRow key="18" className="border border-dark bg-light text-black">
                        <TableCell>Electrocar</TableCell>
                        <TableCell>Cornelio Saavedra 1626</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Baradero</TableCell>
                        <TableCell>03329-486596</TableCell>
                      </TableRow>
                      <TableRow key="19" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Carlos Sperzagni</TableCell>
                        <TableCell>Av. Rivadavia 16698</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Haedo</TableCell>
                        <TableCell>4460-0513</TableCell>
                      </TableRow>
                      <TableRow key="20" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Extreme</TableCell>
                        <TableCell>Av. Juan Manuel de Rosas 155</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Morón</TableCell>
                        <TableCell>4627-3603</TableCell>
                      </TableRow>
                      <TableRow key="21" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Moura Dany</TableCell>
                        <TableCell>Av. Presidente Juan Domingo Perón 3485</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>San Justo</TableCell>
                        <TableCell>4441-1660 / 11-5492-6364</TableCell>
                      </TableRow>
                      <TableRow key="22" className="border border-dark bg-light text-black">
                        <TableCell>Bateréas Cea</TableCell>
                        <TableCell>Av. Presidente Juan Domingo Perón 2797</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>San Miguel</TableCell>
                        <TableCell>4667-0285</TableCell>
                      </TableRow>
                      <TableRow key="23" className="border border-dark bg-light text-black">
                        <TableCell>Morobat</TableCell>
                        <TableCell>Av. Pellegrini 506</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Luján</TableCell>
                        <TableCell>11-3049-5083</TableCell>
                      </TableRow>
                      <TableRow key="24" className="border border-dark bg-light text-black">
                        <TableCell>Autopartes Chapa Mercedes</TableCell>
                        <TableCell>Av. 2(Italia) Nº 365</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Mercedes</TableCell>
                        <TableCell>02324-433633 / 02324-430256</TableCell>
                      </TableRow>
                      <TableRow key="25" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Dubini</TableCell>
                        <TableCell>Av. Molina Arrotea 1199</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Lomas de Zamora</TableCell>
                        <TableCell>4244-2663</TableCell>
                      </TableRow>
                      <TableRow key="26" className="border border-dark bg-light text-black">
                        <TableCell>Centro de Baterías</TableCell>
                        <TableCell>Av. Eva Perón 4140</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Florencio Varela</TableCell>
                        <TableCell>4255-0207 / 11-2286-3136</TableCell>
                      </TableRow>
                      <TableRow key="27" className="border border-dark bg-light text-black">
                        <TableCell>Start Stop Baterías</TableCell>
                        <TableCell>Av. La Plata 1941</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Quilmes</TableCell>
                        <TableCell>4200-0002</TableCell>
                      </TableRow>
                      <TableRow key="28" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Roca</TableCell>
                        <TableCell>Ruta 205 Esquina Las Margaritas</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Tristán Suarez</TableCell>
                        <TableCell>4386-2559 / 11-5049-8700</TableCell>
                      </TableRow>
                      <TableRow key="29" className="border border-dark bg-light text-black">
                        <TableCell>Lit Lubricentro Integral</TableCell>
                        <TableCell>Av. Mariano Castex y Sargento Cabral</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Canning</TableCell>
                        <TableCell>2101-5619</TableCell>
                      </TableRow>
                      <TableRow key="30" className="border border-dark bg-light text-black">
                        <TableCell>Baterías Jelplat</TableCell>
                        <TableCell>Av. 131 Nº 359</TableCell>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>La Plata</TableCell>
                        <TableCell>0221-4706868</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <nav>
                  <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button class="nav-link sub active" id="nav-batbs-tab" data-bs-toggle="tab" data-bs-target="#nav-batbs" type="button" role="tab" aria-controls="nav-batbs" aria-selected="true">Pág 1</button>
                    <button class="nav-link sub" id="nav-batbsa-tab" data-bs-toggle="tab" data-bs-target="#nav-batbsa" type="button" role="tab" aria-controls="nav-batbsa" aria-selected="true">Pág 2</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
