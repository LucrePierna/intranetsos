import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Agenda() {
  const dataPart1 = [
    { nombre: "Bevione", numero: "30288" },
    { nombre: "Brito", numero: "30500" },
    { nombre: "Delle Sedie", numero: "30721" },
    { nombre: "Elhaibe", numero: "31101" },
    { nombre: "Nieto", numero: "30511" },
    { nombre: "Sacchi", numero: "30345" },
    { nombre: "Silva", numero: "40223" },
    { nombre: "Videlap", numero: "30510" },
    { nombre: "Zarate", numero: "40318" },
  ];

  const dataPart2 = [
    { nombre: "CAT", numero: "98008" },
    { nombre: "Supervisores Derivación", numero: "3500" },
    { nombre: "Chat Cat PIPE", numero: "1128080012" },
    { nombre: "At. a Moviles/Prestadores", numero: "0351-4858393 / 011-48358191 op.2" },
    { nombre: "Chat Eventuales", numero: "1166703706" },
    { nombre: "Chat Cba", numero: "3513881005" },
    { nombre: "Chat Rosario", numero: "3412174006" },
    { nombre: "Chat Mecanica", numero: "1166703708" },
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
  );
}
