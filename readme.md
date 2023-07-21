{selectedRoute === '/derivacion' ? (
        <NavBarDerivacion />
      ) : selectedRoute === '/atp' ? (
        <NavBarAtp /> 
      ) : selectedRoute === '/tdc' ? (
        <NavBarTdc />
      ) : selectedRoute === '/extranjero' ? (
        <NavBarExtranjero /> 
      ) : selectedRoute === '/terminalypesado' ? (
        <NavBarTP /> 
      ) : selectedRoute === '/trafico' ? (
        <NavBarTrafico />
      ) : selectedRoute === '/transportin' ? (
        <NavBarTransportin />
      ) : selectedRoute === '/viajeros' ? (
        <NavBarViajero />
      ) : (
        <NavBarHome /> 
      )}