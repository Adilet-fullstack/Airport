import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
import './home.scss';
import './adapitve.scss'
import Slick from "../Slick-carousel/Slick";
import SlickSlider2 from "../Slick-slider2/SlickSlider2";
import AirportFoto from './img/22-2.jpg'
import TabloFoto from './img/tablo-prileta-aeroport-tolmachevo-na-segodnya.jpg'
import AirlineFoto from "./img/AOY_QR_2021.jpg"
const Home = () => {


    return (
<div className={''}>
        <div className=' container home'>
            <section className="home__section1 search">
                <div className="search__content">
                    <h2 className="search__title">Путешествие начинается</h2>
                    <h2 className="search__title2">с аэропорта</h2>
                    <br/>
                    <div className={"search__content1"}><Link className={"search__btn1"} to={'/airport'}>Перейти</Link></div>
                </div>
                    <Slick />
            </section>
            <section className="home__section2">
                <div className="top">
                    <h3 className={'top__title'}>Лучшие аэропорты мира</h3>
                </div>
                <SlickSlider2/>
            </section>
            <section>
                <div className="airport">
                    <div className="row">
                        <h2 className={"airport__title"}>Наши услуги</h2>
                        <div className="col-xl-6 col-md-12 col-sm-12 airport__col1"><img src={AirportFoto}  className={'airport__img'} alt="airport"/></div>
                        <div className="col-xl-6 col-md-12 col-sm-12 airport__col2">
                            <h2 className={"airport__subtitle"}>Аэропорты</h2>
                            <p className={'airport__air'}>Аэропорт  играет важную роль в этом мире.
                                <br/>Каждый день в аэропортах вылетают
                                и прилетают <br/> десятки или даже сотни самолетов.
                               <br/> Этих самолетов обслуживают наши аэропорта.
                               <br/> Узнайте по-больше про аэропорты вместе с нами!</p>
                            <div className={"search__content1"}><Link className={"search__btn1"} to={'/airport'}>Перейти</Link></div>
                        </div>
                        <div className="col-xl-6 col-md-12 col-sm-12 airport__col2">
                            <h2 className={"airport__subtitle"}>Авиакомпании</h2>
                            <p className={'airport__air'}>В мире очень много авиакомпаний.
                                <br/>С каждым днем они соревнуются и улучшают свое качество и рейтинг.
                                <br/>Вы вместе с нами узнаете много об  авиакомпаниях</p>
                            <div className={"search__content1"}><Link className={"search__btn1"} to={'/airline'}>Перейти</Link></div>
                        </div>

                        <div className="col-xl-6 col-md-12 col-sm-12 airport__col1"><img src={AirlineFoto} className={'airport__img2 '}  alt="Airline"/></div>
                    </div>
                </div>
            </section>
        </div>
</div>
    );
};







export default Home;