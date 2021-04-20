import React from "react"
//Styled Components
import styled from "@emotion/styled"
import {StructuredText} from "react-datocms"
import { css } from "@emotion/react"
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper.scss"
// Import styles
import "./slider.scss"
import Flecha_der from "../../images/Flecha_der.svg"
import Flecha_izq from "../../images/Flecha_izq.svg"
import RomboDecorativo from "../../images/scalablesInnova/rombosServicios.svg"
SwiperCore.use([Navigation, Pagination])
//Styled Components
const FlechaDerecha = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30px;
  width: 30px;
  height: 30px;
  margin: 0;
`
const FlechaIzquierda = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30px;
  width: 30px;
  height: 30px;
  margin: 0;
`


const Slider = ({servicios}) => {

  return (
    <div id="containerSwiper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ nextEl: "#swiper-button-next", prevEl: "#swiper-button-prev" }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {servicios.map(ss =>(
          <SwiperSlide>
            <div>
              <img src={RomboDecorativo} alt="rombo decorativo" width={140} heigth={140}/>
              <h3>{ss.titulo}</h3>
              <StructuredText data={ss.descripcion}/>
            </div>
          </SwiperSlide>
        ))}

        <FlechaDerecha id="swiper-button-next">
          <img src={Flecha_der} alt="siguiente"/>
        </FlechaDerecha>
        <FlechaIzquierda id="swiper-button-prev">
          <img src={Flecha_izq} alt="previo"/>
        </FlechaIzquierda>
      </Swiper>
    </div>
  )
}

export default Slider