import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/basics/layout"
import SEO from "../components/basics/seo"
import "../css/styles.scss"
import BloqueInicio from "../components/inicio/inicioBloque"


const IndexPage = () => {
  const info = useStaticQuery(graphql`
      query{
          allDatoCmsPagina(filter: { slug: { eq:"inicio"} }){
              nodes{
                  tituloPagina
              }
          }
      }
  `);
  const {tituloPagina} = info.allDatoCmsPagina.nodes[0]

  return (
    <div className="container">
      <Layout>
        <SEO title={tituloPagina} lang="es" description="Estudio jurídico"/>
        <BloqueInicio/>
      </Layout>
    </div>
  )
}

export default IndexPage
