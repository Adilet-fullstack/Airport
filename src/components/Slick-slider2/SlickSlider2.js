import React from 'react';
import Slider from "react-slick";
import "./Slick-slide2.scss"
import top1 from './topimg/1doha_hamad_airport_airside-901x420.jpg'
import top2 from './topimg/2haneda_airport_maedaakihiko.jpg'
import top3 from './topimg/3chem-zanyatsya-v-aeroportu-singapura-changi.jpg'
import top4 from './topimg/4xinch.jpg.pagespeed.ic.xnBxFOL4w9.jpg'
import top5 from './topimg/4content_____________.jpg'
import top6 from './topimg/munich_terminal_2_satellite.jpg'
import top7 from './topimg/6zurich_airport_apron_view.jpg'
import top8 from './topimg/8Heathrow-New-Terminal-2-by-Luis-Vidal-Architects-18.jpg'
import top9 from './topimg/kansai-airport_1.jpg'
import top10 from './topimg/10content_____________.jpg'

const SlickSlider2 = () => {
    const settings = {
        dots: false,
        centerMode:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows:true,
        slidesToScroll:2,
        initialSlide: 1,
        autoplay:true,
        pauseOnFocus:true,
        centerPadding:'30px',
        autoplaySpeed:4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2    ,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top1}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2>Хамад в Дохе, Катар</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top2}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2>Ханеда в Токио, Япония</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top3}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2>Чанги в Сингапуре</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top4}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2> Инчхон в Сеуле, Южная Корея</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top5}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2>Нарита в Токио, Япония</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top6}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2> Мюнхен, Германия</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top7}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2>Цюрих, Швейцария</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top8}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2> Хитроу в Лондоне, Великобритания</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dws">
                        <div className="_container">
                            <div className="blocImg"><img src={top9}></img>
                                <div className="blocText">
                                    <div className="text">
                                        <h2> Кансай в Осаке, Япония</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="dws">
                    <div className="_container">
                        <div className="blocImg"><img src={top10} alt={'qatar'}></img>
                            <div className="blocText">
                                <div className="text">
                                    <h2>Гонконг</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlickSlider2;