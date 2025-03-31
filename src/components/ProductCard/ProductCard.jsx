import React from 'react';
import './styles.css';
import caviar from './caviar.jpg';
import cart from './cart.svg';
import shrimps from './shrimps.jpg';
import redfish from './redfish.jpg';
import keta from './keta.jpg';
import halibut from './halibut.jpg';

const ProductCard = () => {
    const productList = [
        {
            id: 1,
            title: "Креветки очищенные",
            cost: "4 200 Ꝑ/кг",
            pic: shrimps,
        },
        {
          id: 2,
          title: "Филе лосося, Норвегия, охлажденный",
          cost: "2 500 Ꝑ/кг",
          pic: redfish,
        },
        {
          id: 3,
          title: "Красная икра нерки, 250 г/упаковка",
          cost: "1 200 Ꝑ/кг",
          pic: caviar,
        },
        {
          id: 4,
          title: "Палочки кеты, 1000 г/упаковка",
          cost: "2 500 Ꝑ/кг",
          pic: keta,
      },
      {
        id: 5,
        title: "Филе палтуса",
        cost: "2 800 Ꝑ/кг",
        pic: halibut,
    },
    ];
    return (
        <div className="section">
        <div className="section__container">
              <div className="container__suggest  suggest">
                <p className="suggest__title">С этим товаром покупают</p>
                <ProductList productList={productList}></ProductList>
        </div>
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
          <p className="cart__cost">{product.cost}</p>
          <div className="cart_button">
            <a href="#" className="cart_button__cost--link">В корзину</a>
            <img width="17" height="17" class="cart_button__cost--img" src={cart}/>
          </div>
        </div>
      </li>
    );
};
export default ProductCard;