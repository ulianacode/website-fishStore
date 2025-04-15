import React from 'react';
import './styles.css';
import caviar from './images/caviar.jpg';
import cart from './images/cart.svg';
import shrimps from './images/shrimps.jpg';
import redfish from './images/redfish.jpg';
import keta from './images/keta.jpg';
import halibut from './images/halibut.jpg';

const ProductCard = () => {
    const productList = [
        {
            id: 1,
            title: "Креветки очищенные",
            cost: "4 200 Ꝑ/кг",
            pic: shrimps,
            oldCost: null,
        },
        {
          id: 2,
          title: "Филе лосося, Норвегия, охлажденный",
          cost: "2 500 Ꝑ/кг",
          pic: redfish,
          oldCost: "5 000 Ꝑ/кг",
        },
        {
          id: 3,
          title: "Красная икра нерки, 250 г/упаковка",
          cost: "1 200 Ꝑ/кг",
          pic: caviar,
          oldCost: null,
        },
        {
          id: 4,
          title: "Палочки кеты, 1000 г/упаковка",
          cost: "2 500 Ꝑ/кг",
          pic: keta,
          oldCost: null,
      },
      {
        id: 5,
        title: "Филе палтуса",
        cost: "2 800 Ꝑ/кг",
        pic: halibut,
        oldCost: null,
    },
    ];

    const cardCollection = [
      {title: "С этим товаром покупают", productList},
      {title: "Хиты продаж", productList},
      {title: "Новинки", productList},
      {title: "Рекомендуем", productList},
    ]
    
    return (
        <div className="section">
          <div className="section__container">
          {cardCollection.map(card => (  
            <div className="container__suggest suggest">
                <p className="suggest__title">{card.title}</p>
                <ProductList productList={card.productList} />
            </div>
            ))}
          </div>
        </div>
    );
};

const ProductList = ({ productList }) => {
    return (
      <div className="suggest__card"> 
        <ul className="suggest__card__list suggest-card-list">
          {productList.map(product => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  };

const ProductListItem = ({product}) => {
    return (
        <li className="suggest-card-list__element">
        <img width="341" height="256" src={product.pic}/>
        <p className="suggest-card-list__element--name">{product.title}</p>
        <div className="suggest-card-list__cart cart">
        <p className="cart__cost">
            {product.cost}
            {product.oldCost && (
                <span className="cart__cost--old">{product.oldCost}</span> 
            )}
          </p>
          <div className="cart_button">
            <a href="#" className="cart_button__cost--link">В корзину</a>
            <img width="17" height="17" class="cart_button__cost--img" src={cart}/>
          </div>
        </div>
      </li>
    );
};
export default ProductCard;