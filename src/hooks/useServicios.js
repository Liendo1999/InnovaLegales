import {graphql, useStaticQuery} from "gatsby"

const useServicios = () => {
  const servicios = useStaticQuery(graphql`
      query {
          allDatoCmsServicio(sort: {order: DESC, fields: idServicio}) {
              nodes {
                  tituloServico
                  servicioDescripcion {
                      value
                  }
              }
          }
      }
  `)
  return servicios.allDatoCmsServicio.nodes.map(servicio =>({
    titulo: servicio.tituloServico,
    descripcion: servicio.servicioDescripcion
  }))
}
export default useServicios