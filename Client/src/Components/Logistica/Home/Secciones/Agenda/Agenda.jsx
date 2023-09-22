import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


export default function Agenda() {

  const dataPart1 = [
    { nombre: "Supervisor Logística", numero: "3500" },
    { nombre: "Tráfico Nacional", numero: "9750" },
    { nombre: "Tráfico Local", numero: "9700" },
    { nombre: "Supervisor Tráfico", numero: "3800" },
    { nombre: "CAT", numero: "98009" },
  ];

  const dataPart2 = [
    { nombre: "Chat CAT PIPE", numero: "3512002585" },
    { nombre: "Chattigo (Para Prestadores)", numero: "1128080012" },
    { nombre: "Atención a Prestadores", numero: "08108101234" },
    { nombre: "Soporte Gap", numero: "0351-4858393 / 011-48358191 op.2" },
    { nombre: "At. a Moviles/Prestadores", numero: "9600" },
    { nombre: "Contención", numero: "3220" },
    { nombre: "Hogar", numero: "9790" },
    { nombre: "Guardia sistemas", numero: "3515121692" },
  ];

  return (
    <div className="container mt-5 h-100 w-100">
      <div className="row justify-content-center">
        <div className="d-flex flex-row col-md-4">
          <Table aria-label="Tabla 1" >
            <TableHeader>
              <TableColumn className="border border-dark bg-danger text-light">Area/Nombre</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">INTERNO/Nro</TableColumn>
            </TableHeader>
            <TableBody className='d-flex flex-column'>
              {dataPart1.map((item, index) => (
                <TableRow key={index} className="border border-dark bg-light text-black">
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.numero}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="d-flex flex-row col-md-6">
          <Table aria-label="Tabla 2">
            <TableHeader>
              <TableColumn className="border border-dark bg-danger text-light">Area/Nombre</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">INTERNO/Nro</TableColumn>
            </TableHeader>
            <TableBody className='d-flex flex-column'>
              {dataPart2.map((item, index) => (
                <TableRow key={index} className="border border-dark bg-light text-black">
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.numero}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
