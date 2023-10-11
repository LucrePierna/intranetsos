import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function ChatEvoltis() {
  return (
    <div className="d-flex flex-column h-50 w-50 gap-3 mx-auto p-2 mt-5 justify-content-center">
      <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
        <TableHeader>
          <TableColumn className="border border-dark bg-danger text-light">-Base-</TableColumn>
          <TableColumn className="border border-dark bg-danger text-light">Usuario</TableColumn>
          <TableColumn className="border border-dark bg-danger text-light">Contraseña</TableColumn>
        </TableHeader>
        <TableBody >
          <TableRow key="1" className="border border-dark bg-light text-black">
            <TableCell>6001</TableCell>
            <TableCell>psacchi@redsos.com.ar</TableCell>
            <TableCell>Supervisor2023+</TableCell>
          </TableRow>
          <TableRow key="2" className="border border-dark bg-light text-black">
            <TableCell>Mecanica</TableCell>
            <TableCell>isilva@redsos.com.ar</TableCell>
            <TableCell>Supervisor2023+</TableCell>
          </TableRow>
          <TableRow key="3" className="border border-dark bg-light text-black">
            <TableCell>Córdoba</TableCell>
            <TableCell>lbrito@redsos.com.ar</TableCell>
            <TableCell>Supervisor2023+</TableCell>
          </TableRow>
          <TableRow key="4" className="border border-dark bg-light text-black">
            <TableCell>Rosario</TableCell>
            <TableCell>dvidela@redsos.com.ar</TableCell>
            <TableCell>Supervisor2023+</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <a href="http://moviochat.evoltis.com" target="_blank" rel="noopener noreferrer">
          <button type='button' class="btn btn-danger mt-3">Abrir Movio</button>
        </a>
      </div>
    </div>
  )
}
