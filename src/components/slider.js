import React from "react"
//Styled Components
import styled from "@emotion/styled"
import { css } from "@emotion/react"
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"
// Import Swiper styles
import "swiper/swiper.scss"
import Flecha_der from "../images/Flecha_der.svg"
import Flecha_izq from "../images/Flecha_izq.svg"
// Import styles
import "./slider.scss"
// install Swiper modules
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


const Slider = () => {
  return (
    <>
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
        <SwiperSlide>
          <div>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            css={css`
                width: min(80%,300px);
                background-color: white;
                margin: 0 auto;
              `}>
            <h3>Derecho de Familia</h3>
            <ul>
              <li>
                <p>Divorcios</p>
              </li>
              <li>
                <p>Sucesiones</p>
              </li>
              <li>
                <p>Declaratoria de herederos</p>
              </li>
              <li>
                <p>Constitución de uniones convivenciales</p>
              </li>
              <li>
                <p>Tutela</p>
              </li>
              <li>
                <p>Juicio de limitación de la capacidad</p>
              </li>
              <li>
                <p>Cuota alimentaria</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <FlechaDerecha id="swiper-button-next">
          <img src={Flecha_der} alt="siguiente"/>
        </FlechaDerecha>
        <FlechaIzquierda id="swiper-button-prev">
          <img src={Flecha_izq} alt="previo"/>
        </FlechaIzquierda>
      </Swiper>
    </>
  )
}

export default Slider