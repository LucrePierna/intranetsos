import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Agenda() {
  return (
    <div className="d-flex flex-row h-50 w-50 gap-3 mx-auto p-2 mt-5 justify-content-center">
      <h5>Santa Fe</h5>
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
          <TableCell>Bterias Cortese</TableCell>
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
  )
}
