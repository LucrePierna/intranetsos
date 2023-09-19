import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Agenda() {
  return (
    <div className="container mt-5 h-50 w-50">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Table aria-label="Example static collection table" >
            <TableHeader>
              <TableColumn className="border border-dark bg-danger text-light">Area/Nombre</TableColumn>
              <TableColumn className="border border-dark bg-danger text-light">INTERNO/Nro</TableColumn>
            </TableHeader>
            <TableBody >
              <TableRow key="1" className="border border-dark bg-light text-black">
                <TableCell>Bevione</TableCell>
                <TableCell>30288</TableCell>
              </TableRow>
              <TableRow key="2" className="border border-dark bg-light text-black">
                <TableCell>Brito</TableCell>
                <TableCell>30500</TableCell>
              </TableRow>
              <TableRow key="3" className="border border-dark bg-light text-black">
                <TableCell>Delle Sedie</TableCell>
                <TableCell>30721</TableCell>
              </TableRow>
              <TableRow key="4" className="border border-dark bg-light text-black">
                <TableCell>Elhaibe</TableCell>
                <TableCell>31101</TableCell>
              </TableRow>
              <TableRow key="5" className="border border-dark bg-light text-black">
                <TableCell>Nieto</TableCell>
                <TableCell>30511</TableCell>
              </TableRow>
              <TableRow key="6" className="border border-dark bg-light text-black">
                <TableCell>Sacchi</TableCell>
                <TableCell>30345</TableCell>
              </TableRow>
              <TableRow key="7" className="border border-dark bg-light text-black">
                <TableCell>Silva</TableCell>
                <TableCell>40223</TableCell>
              </TableRow>
              <TableRow key="8" className="border border-dark bg-light text-black">
                <TableCell>Videlap</TableCell>
                <TableCell>30510</TableCell>
              </TableRow>
              <TableRow key="9" className="border border-dark bg-light text-black">
                <TableCell>Zarate</TableCell>
                <TableCell>40318</TableCell>
              </TableRow>
              <TableRow key="10" className="border border-dark bg-light text-black">
                <TableCell>CAT</TableCell>
                <TableCell>98008</TableCell>
              </TableRow>
              <TableRow key="11" className="border border-dark bg-light text-black">
                <TableCell>Supervisores Derivación</TableCell>
                <TableCell>3500</TableCell>
              </TableRow>
              <TableRow key="12" className="border border-dark bg-light text-black">
                <TableCell>Chat Cat PIPE</TableCell>
                <TableCell>1128080012</TableCell>
              </TableRow>
              <TableRow key="13" className="border border-dark bg-light text-black">
                <TableCell>At. a Moviles/Prestadores</TableCell>
                <TableCell>0351-4858393 / 011-48358191 op.2</TableCell>
              </TableRow>
              <TableRow key="14" className="border border-dark bg-light text-black">
                <TableCell>Chat Eventuales</TableCell>
                <TableCell>1166703706</TableCell>
              </TableRow>
              <TableRow key="15" className="border border-dark bg-light text-black">
                <TableCell>Chat Cba</TableCell>
                <TableCell>3513881005</TableCell>
              </TableRow>
              <TableRow key="16" className="border border-dark bg-light text-black">
                <TableCell>Chat Rosario</TableCell>
                <TableCell>3412174006</TableCell>
              </TableRow>
              <TableRow key="17" className="border border-dark bg-light text-black">
                <TableCell>Chat Mecanica</TableCell>
                <TableCell>1166703708</TableCell>
              </TableRow>
              <TableRow key="18" className="border border-dark bg-light text-black">
                <TableCell>Guardia sistemas</TableCell>
                <TableCell>3515121692</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>
    </div>
  )
}
