import React from 'react'
import Pais from './Pais/Pais'
import Turista from './Turista/Turista'

export default function Corredores() {
  return (
    <div>
    <ul>
        <li>
            <Pais />
        </li>
        <li>
            <Turista />
        </li>
    </ul>
    </div>
  )
}
