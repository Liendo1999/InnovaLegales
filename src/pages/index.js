import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Innova" lang="es" description="Estudio jurídico"/>
    <h1>Innova Soluciones Legales</h1>
    <h2><Link to="/servicios">Servicios</Link></h2>
  </Layout>
)

export default IndexPage
