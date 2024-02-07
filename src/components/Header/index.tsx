// import LogoImg from "../../assets/Logo.svg";
import { Navbar } from "../Navbar/Navbar";
import { Container } from "./styles";
import { register } from 'swiper/element/bundle'
import Iphone from '../../assets/IphoneHomeImg.png'
import Slide2 from '../../assets/SlideImg2.png'
import Slide3 from '../../assets/SlideImg3.png'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useEffect, useState } from 'react';
import { EffectFade } from "swiper/modules";

const data = [
    {id: '1', image: Iphone, descricao: 'iPhone 15 Pro'},
    {id: '2', image: Slide2, descricao: ''},
    {id: '3', image: Slide3, descricao: ''},
]

export function Header() {
    return(
        <Container>
            <Navbar />
            <Swiper 
            slidesPerView={1}
            modules={[EffectFade]}
            effect='fade'
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="Slider" className='slide-item' />
                        <div className="titulo">
                            <h1>{item.descricao}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}