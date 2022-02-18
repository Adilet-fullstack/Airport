import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto from './img/1625242286_47-kartinkin-com-p-fon-aeroport-krasivie-foni-56.jpg';
import foto2 from'./img/155811463713011113.jpg';
import foto3 from "./img/dubaiairport-1024x576-1024x576.jpg";
import foto4 from "./img/1920x1200_961851_[www.ArtFile.ru].jpg"

import "./slider.scss"
import '../home/home.scss'
const Slick = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed:7000,
        speed: 500,
        arrows:true,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
        <div className ='search__bgc'>
            <Slider  {...settings} >
                <div>
                    <img className="search__foto" src={foto4} alt="airport"/>
                </div>
                <div>
                    <img className="search__foto" src={foto3} alt="airport"/>
                </div>
                <div>
                    <img className="search__foto" src={foto2} alt="airport"/>
                </div>
                <div>
                    <img className="search__foto" src={foto} alt="airport"/>
                </div>

            </Slider>
        </div>

    );
};

export default Slick;