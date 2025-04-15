import React from 'react';
import './styles.css';
import login from './images/login.png';
import favourite from './images/favourite.png';
import cart from './images/cart.png';
import logo from './images/logo.png';

const MiddleHeader = () => {
    
    return (
        <div className="header__middle middle"> 
            <div className="middle__logo">
            <img width="270" height="35" className="middle__logo-img" src={logo}/>
            <p className="middle__logo-name">Продажа свежих морепродуктов с доставкой по Москве и МО</p>
            </div>
            <input className="middle__input" placeholder="ПОИСК ПО ТОВАРАМ, РЕЦЕПТАМ И СТАТЬЯМ" />
            <div className="middle__access">
            <div className="access__login">
                <img width="17" height="17" className="access__login-img" src={login}/>
                <a href="#" className="access__login-name">Войти</a>
            </div>
            <div className="access__favourite">
                <img width="25" height="25" className="access__favourite-img" src={favourite}/>
                <a href="#" className="access__favourite-name">Избранное</a>
            </div>
            </div>
            <div className="middle__recycle-bin">
                <img width="50" height="50" className="middle__recycle-bin-img" src={cart}/>
                <div className="recycle-bin__description">
                <span className="description-name">Ваша корзина</span>
                <span className="description-cost">2540 ₽</span>
                </div>
            </div>
        </div>
    );
};


export default MiddleHeader;