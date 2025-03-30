import React from 'react';
import './styles.css';

const ProductCard = () => {
    const productList = [
        {
            title: "Креветки очищенные",
            cost: "4 200 Ꝑ/кг",
        },
        {
            title: "Креветки очищенные",
            cost: "4 200 Ꝑ/кг",
        },
        {
            title: "Креветки очищенные",
            cost: "4 200 Ꝑ/кг",
        },
    ];
    return (
        <div className="section">
        <div className="section__container">
              <div className="section__buy-with  buy-with">
                <p className="buy-with__title">С этим товаром покупают</p>
                <ProductList productList={productList}></ProductList>
        </div>
        </div>
        </div>
    );
};

const ProductList = ({ productList }) => {
    return (
      <div className="buy-with__card"> 
        <ul className="buy-with__card__list buy-with-card-list">
          {productList.map(product => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  };

const ProductListItem = ({product}) => {
    return (
        <li className="recommends-card-list__element">
        <p className="recommends-card-list__element--name">{product.title}</p>
        <div className="recommends-card-list__cart cart">
          <p className="cart__cost">{product.cost}</p>
          <div className="cart_button">
            <a href="#" className="cart_button__cost--link">В корзину</a>
          </div>
        </div>
      </li>
    );
};
export default ProductCard;