import React from 'react';
import './styles.css';
import location from './images/location.png';
import phone from './images/phone.png';

const TopHeader = () => {
    
    return (
        <div className="header__top top">
        <div className="top__city"> 
          <p className="city__location-description">Ваш город:</p>
          <img width="15" height="18" className="city__location-img" src={location}/>
          <span className="city__location-name">Москва</span>
        </div>
        <nav className="top__navigation nav">
            <NavigationTopHeader/>
        </nav>
        <div className="top__connection connection">
          <div className="connection__number">
            <img width="17" height="17" className="connection__number-img" src={phone}/>
            <a href="tel:+74959795189" className="connection__number-name">+7 495 979 51 89</a>
          </div>
          <button className="connection__application">
            <span>Оставить заявку</span>
          </button>
          </div>
      </div>
    );
};

const NavigationTopHeader = () => {
    const NavigationTitle = ["Доставка", "Оплата", "Рецепты", "Статьи", "Рейтинг на Яндекс Метрике", "Гарантия качества", "Контакты"];
    return (
        <ul className="nav__list nav-list">
        {NavigationTitle.map((title) => (
              <li className="nav-list__element_first">
              <a href="#" className="nav-list__element-link">
                  {title}
              </a>
            </li>
        ))}
    </ul>
    );
};

export default TopHeader;