import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import "../../public/static/css/styles.scss"
const Servicios = () => {
  return (
    <Layout>
      <SEO title="Servicios Innova" description="Servicios Innova" lang="es"/>
      <Slider/>
    </Layout>
  )
}

export default Servicios
