import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/basics/layout"
import SEO from "../components/basics/seo"
import Slider from "../components/servicios/slider"
import useServicios from "../hooks/useServicios"
import "../css/servicios.scss"

const Servicios = () => {
  const info = useStaticQuery(graphql`
      query{
          allDatoCmsPagina(filter: { slug: { eq:"servicios"} }){
              nodes{
                  tituloPagina
              }
          }
      }
  `);
  const {tituloPagina} = info.allDatoCmsPagina.nodes[0]

  const servicios = useServicios()

  return (
    <div className="container">
      <Layout>
        <SEO title={tituloPagina} description="Servicios Innova" lang="es"/>
        <div id="contenidoServicios">
          <Slider servicios={servicios}/>
        </div>
      </Layout>
    </div>
  )
}

export default Servicios
