import React from 'react';
import './styles.css';
import sale from './images/sale.png';
import crab from './images/crab.png';
import delicious from './images/delicious.png';
import fish from './images/fish.png';
import redfish from './images/redfish.png';
import caviar from './images/caviar.png';

const MiddleHeader = () => {
    return (
        <div className="header__bottom bottom">
            <button className="bottom__application">
                <span className="application__title">Каталог</span>
            </button>
            <nav className="bottom__navigation bottom-nav">
                <NavigationFish />
            </nav>
        </div>
    );
};

const NavigationFish = () => {
    const fishTitle = [
        {
            title: "Акции",
            img: sale,
        },
        {
            title: "Красная рыба",
            img: redfish,
        },
        {
            title: "Креветки",
            img: caviar,
        },
        {
            title: "Краб",
            img: crab,
        },
        {
            title: "Деликатесы",
            img: delicious,
        },
        {
            title: "Рыба",
            img: fish,
        },
    ];

    return (
        <ul className="bottom-nav__list bottom-nav-list">
            {fishTitle.map((item, index) => (
                <li key={index} className="bottom-nav-list__element">
                    <img width="22" height="22" className="bottom-nav-list__element--img" src={item.img} alt={item.title} />
                    <a href="#" className="bottom-nav-list__element-link">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default MiddleHeader;
