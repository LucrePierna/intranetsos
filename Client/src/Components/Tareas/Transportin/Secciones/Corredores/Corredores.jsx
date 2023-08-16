import React from 'react'
import CorredorPais from './CorredorPais/CorredorPais'
import CorredorTriple from './CorredorTriple/CorredorTriple'
import CorredorTurista from './CorredorTurista/CorredorTurista'

export default function Corredores() {
  return (
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Mapas
      </button>
      <ul class="dropdown-menu">
        <li><CorredorPais /></li>
        <li><CorredorTurista /></li>
        <li><CorredorTriple /></li>
      </ul>
    </div>

  )
}

