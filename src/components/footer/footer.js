import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './footer.scss'
const Footer = () => {


    return (
        <div>
            <div className="container">
            <footer className="footer">

                    <div className="row">

                        <div className="col-md-4 col-sm-6">
                            <h2 className="footer__title">Услуги</h2>
                            <ul className="footer__subServices">
                                <li className={'footer__li'}><Link to={'/'} className="footer__li">Главная</Link></li>
                                <li className={'footer__li'}><Link to={'/airport'} className="footer__li">Аэропорты</Link></li>
                                <li className={'footer__li'}><Link to={'/airline'} className="footer__li">Авиакомпании</Link></li>
                                    {/*<li className={'footer__li'}><Link to={'/flight/route'} className="footer__li">Расписание рейсов</Link></li>*/}

                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h2 className="footer__title">Связаться с нами</h2>
                            <p className="footer__gmail">@flyhigh.com</p>
                            <a href="tel:+996709999999" className="footer__number">+996 709-999-999</a>
                            <div className="footer__icons">

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h2 className="footer__title">Мы в соц. сети</h2>

                        </div>
                        <h5 className="footer__copi">Авторские права 2021 Flyhigh</h5>
                    </div>

            </footer>
            </div>
        </div>
    );
};



export default Footer;