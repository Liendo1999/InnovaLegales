import React from "react"
import LogoInicio from "../../images/scalablesInnova/homeImage.svg"
const BloqueInicio = () => {
  return (
    <div id="bloqueInicio">
      <img id="logoInnovaInicio" src={LogoInicio} alt="Logo Innova" width={300} heigth={300}/>
      <div id="inicioContainer">
        <h3>Innovando en las redes</h3>
        <p>Somos un grupo de amigas y colegas abocadas al derecho.
          Uno de nuestros objetivos es lograr una justa solución a sus problemas, priorizando lo humano en nuestro trabajo.
          Para ello creamos este medio, a los findes de garantizar una ágil comunicación que nos permita estar cerca de quienes depositan su confianza en nosotras.
          Gracias por confiar en <strong>Innova Soluciones Legales</strong></p>
      </div>
    </div>
  )
}

export default BloqueInicio
