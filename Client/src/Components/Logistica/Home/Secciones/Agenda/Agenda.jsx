import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


export default function Agenda() {

  return (
    <div className="d-flex flex-row h-50 w-50 gap-3 mx-auto p-2 mt-5 justify-content-center">
      <Table aria-label="Example static collection table" className="d-flex flex-col justify-content-center">
        <TableHeader>
          <TableColumn className="border border-dark bg-danger text-light">ROTATIVOS</TableColumn>
          <TableColumn className="border border-dark bg-danger text-light">INTERNO</TableColumn>
        </TableHeader>
        <TableBody >
          <TableRow key="1" className="border border-dark bg-light text-black">
            <TableCell>Supervisor Logística</TableCell>
            <TableCell>3500</TableCell>
          </TableRow>
          <TableRow key="2" className="border border-dark bg-light text-black">
            <TableCell>Tráfico Nacional</TableCell>
            <TableCell>9750</TableCell>
          </TableRow>
          <TableRow key="3" className="border border-dark bg-light text-black">
            <TableCell>Tráfico</TableCell>
            <TableCell>9700</TableCell>
          </TableRow>
          <TableRow key="4" className="border border-dark bg-light text-black">
            <TableCell>Supervisor Tráfico</TableCell>
            <TableCell>3800</TableCell>
          </TableRow>
          <TableRow key="5" className="border border-dark bg-light text-black">
            <TableCell>CAT</TableCell>
            <TableCell>98008</TableCell>
          </TableRow>
          <TableRow key="6" className="border border-dark bg-light text-black">
            <TableCell>Chat CAT Alfred</TableCell>
            <TableCell>1128080012</TableCell>
          </TableRow>
          <TableRow key="7" className="border border-dark bg-light text-black">
            <TableCell>Chattigo</TableCell>
            <TableCell>3512002585</TableCell>
          </TableRow>
          <TableRow key="8" className="border border-dark bg-light text-black">
            <TableCell>Soporte Gap</TableCell>
            <TableCell>9600</TableCell>
          </TableRow>
          <TableRow key="9" className="border border-dark bg-light text-black">
            <TableCell>Contención</TableCell>
            <TableCell>3220</TableCell>
          </TableRow>
          <TableRow key="10" className="border border-dark bg-light text-black">
            <TableCell>Hogar</TableCell>
            <TableCell>9790</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  )
}
