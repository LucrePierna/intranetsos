import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Bases from '../Secciones/Bases/Bases'
import FichasTecnicas from '../Secciones/FichasTecnicas/FichasTecnicas'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import LivianosPesadosMotos from '../Secciones/LivianosPesadosMotos/LivianosPesadosMotos'
import Mapas from '../Secciones/Mapas/Mapas'
import TipoDeVehiculos from '../Secciones/TiposDeVehiculos/TipoDeVehiculos'
import Trasvase from '../Secciones/Trasvase/Trasvase'

export default function NavBarTP() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>

      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('bases')}>Bases</li>
        <li onClick={()=> handleComponentClick('fichaTecnicas')}>Ficha Técnicas</li>
        <li onClick={()=> handleComponentClick('flujodrama')}>Flujodrama</li>
        <li onClick={()=> handleComponentClick('instructivo')}>Instructivo</li>
        <li onClick={()=> handleComponentClick('categorias')}>Categorías</li>
        <li onClick={()=> handleComponentClick('mapas')}>Mapas</li>
        <li onClick={()=> handleComponentClick('tipos')}>Tipos de Vehiculos</li>
        <li onClick={()=> handleComponentClick('trasvase')}>Trasvase</li>
      </ul>

      <div className='lista'>
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'fichaTecnicas' && <FichasTecnicas />}
        {selectedComponent === 'flujodrama' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'categorias' && <LivianosPesadosMotos />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'tipos' && <TipoDeVehiculos />}
        {selectedComponent === 'trasvase' && <Trasvase />}
      </div>

    </div>
  )
}
