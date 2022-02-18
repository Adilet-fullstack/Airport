import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import Logo from './img/travle-logo.png';
const Header = () => {
    return (
        <div className={'container'}>
            <header className="header">
                <nav className="header__nav">
                    <div className="header__main">
                       <Link  to="/" className="header__logo" ><img src={Logo} className="header__logo" alt="#"/></Link>
                    </div>
                        <ul     className="header__menu">
                            <li className="header__item1">
                               <Link  to='/' className="header__item">Главная</Link></li>
                            <li className="header__item1">
                                <Link to='/airport' className="header__item">Аэропорты</Link></li>
                            <li>
                                <Link to='/airline' className="header__item">Авиакомпании </Link>
                            </li>

                        </ul>

                </nav>

            </header>
        </div>
    );
};

export default Header;