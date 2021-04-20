import React from "react"
import styled from "@emotion/styled"
import {css} from "@emotion/react"
import FB from "../../images/iconosPNG/fbIcon.png"
import IG from "../../images/iconosPNG/igIcon.png"
import WP from "../../images/iconosPNG/wpIcon.png"
import M from "../../images/iconosPNG/mailIcon.png"


const Bloque = styled.div`
  width: 90%;
  height: 50%;
  margin: auto;
  background-color: white;
  padding: 0.5rem 0.2rem;
  margin-bottom: 40px;
  ul{
    margin-left: -35px;
    li{
      display: flex;
      flex-direction: column;
      img{width: 35px;height: 35px;align-self: center;margin-bottom: 1rem}
      a{text-decoration: none;color: black}
      span,a{text-align: center;margin-bottom: 1.5rem;font-weight: 600; font-size: 14px}
    }
  }
`
const BloqueContacto = () => {
  return (
    <div css={css`margin-top: 10%`}>
      <Bloque>
        <h3 css={css`text-align: center;`}>Contacto</h3>
        <p css={css`text-align: center;margin-bottom: 0.8rem`}>Para comunicarte haz clic en nuestros links o envianos un mail</p>
        <ul css={css`list-style: none`}>
          <li className="elementos"><img src={FB} alt="Icono Facebook" className="iconoContacto"/><a href="https://www.facebook.com/Innova-Soluciones-Legales-101236332054493/">Innova Soluciones Legales</a></li>
          <li className="elementos"><img src={IG} alt="Icono Instagram" className="iconoContacto"/><a href="https://www.instagram.com/innova.legales/">@innova.legales</a></li>
          <li className="elementos"><img src={WP} alt="Icono Whatsapp" className="iconoContacto"/><a href="https://wa.link/z75fzx">3518580875</a></li>
          <li className="elementos"><img src={M} alt="Icono Mail" className="iconoContacto"/><span>solucioneslegales.innova@gmail.com</span></li>
        </ul>
      </Bloque>
    </div>
  )
}

export default BloqueContacto
