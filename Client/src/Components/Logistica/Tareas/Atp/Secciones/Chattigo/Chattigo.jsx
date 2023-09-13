import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

export default function Chattigo() {
  return (
    <div className="d-flex flex-column h-50 w-50 gap-3 mx-auto p-2 mt-5 justify-content-center">
      <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
        <TableHeader>
          <TableColumn className="border border-dark bg-danger text-light">USUARIO</TableColumn>
          <TableColumn className="border border-dark bg-danger text-light">CONTRASEÑA</TableColumn>
        </TableHeader>
        <TableBody >
          <TableRow key="1" className="border border-dark bg-light text-black">
            <TableCell>derivador1@redsos.com.ar</TableCell>
            <TableCell>Derivador1*</TableCell>
          </TableRow>
          <TableRow key="2" className="border border-dark bg-light text-black">
            <TableCell>derivador2@redsos.com.ar</TableCell>
            <TableCell>Derivador2*</TableCell>
          </TableRow>
          <TableRow key="3" className="border border-dark bg-light text-black">
            <TableCell>derivador3@redsos.com.ar</TableCell>
            <TableCell>Derivador3*</TableCell>
          </TableRow>
          <TableRow key="4" className="border border-dark bg-light text-black">
            <TableCell>derivador4@redsos.com.ar</TableCell>
            <TableCell>Derivador4*</TableCell>
          </TableRow>
          <TableRow key="5" className="border border-dark bg-light text-black">
            <TableCell>derivador5@redsos.com.ar</TableCell>
            <TableCell>Derivador5*</TableCell>
          </TableRow>
          <TableRow key="6" className="border border-dark bg-light text-black">
            <TableCell>derivador6@redsos.com.ar</TableCell>
            <TableCell>Derivador6+</TableCell>
          </TableRow>
          <TableRow key="7" className="border border-dark bg-light text-black">
            <TableCell>derivador7@redsos.com.ar</TableCell>
            <TableCell>Derivador7*</TableCell>
          </TableRow>
          <TableRow key="8" className="border border-dark bg-light text-black">
            <TableCell>derivador8@redsos.com.ar</TableCell>
            <TableCell>Derivador8*</TableCell>
          </TableRow>
          <TableRow key="9" className="border border-dark bg-light text-black">
            <TableCell>derivador9@redsos.com.ar</TableCell>
            <TableCell>Derivador9*</TableCell>
          </TableRow>
          <TableRow key="10" className="border border-dark bg-light text-black">
            <TableCell>derivador10@redsos.com.ar</TableCell>
            <TableCell>Derivador10+</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><button type='button' class="btn btn-danger mt-3">Link a Chattigo</button></a>
      </div>
    </div>
  )
}
