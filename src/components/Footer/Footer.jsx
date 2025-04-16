import React from 'react';
import './styles.css';
import pay from './images/pay.png';
import wallet from './images/wallet.png';
import sber from './images/sber.png';
import kiwi from './images/kiwi.png';
import mail from './images/mail.png';
import robokassa from './images/robokassa.png';
import visa from './images/visa.png';

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer__container">
        <div className="footer__main">
          <div className="main__information">
            <div className="information__company">
              <img width="254" height="32" className="company__logo-img" src="./image/logowhite.svg"/>
              <p className="company__description">Продажа свежих морепродуктов
                с доставкой по Москве и МО</p>
              <img width="79" height="3" className="company__line" src="./image/line.svg"/>
            </div>
            <div className="information__questions">
              <p className="questions__ask">Остались вопросы?</p>
              <p className="questions__description">Оставьте заявку и наш менеджер
                свяжется с вами в ближайшее время</p>
              <button className="questions__application">Оставить заявку</button>
            </div>
          </div>
          <div className="main__contacts">
            <p className="contacts__title">Наши контакты</p>
            <a href="tel:+74959795189" className="contacts__number">+7 495 979-51-89</a>
            <button className="contacts__callback">Заказать обратный звонок</button>
            <p className="contacts__adress">г.Москва, г.Зеленоград, к.1204</p>
            <a href="mailto:info@kingikra.ru" className="contacts__email">info@kingikra.ru</a>
            <p className="contacts__schedule">Работаем без выходных
              с 9:00 до 18:00</p>
          </div>
          <div className="main__catalog">
            <p className="catalog__title">Каталог</p>
            <nav className="catalog__navigation ct-nav">
              <Catalog/>
            </nav>
          </div>
          <div className="main__useful-information">
            <p className="useful-information__title">Полезная информация</p>
            <nav className="useful-information__navigation ui-nav">
              <UsefullInformation/>
            </nav>
          </div>
          <div className="main__other-information">
            <div className="information__newsletter">
              <p className="newsletter__title">Наша рассылка</p>
              <div className="newsletter__form">
                <input className="form__input" placeholder="Ваш e-mail"/>
                <button className="form__button">Подписаться</button>
              </div>
            </div>
            <div className="information__pay">
              <p className="pay__title">Принимаем к оплате</p>
              <nav className="pay__navigation pay-nav">
                <ForPay/>
              </nav>
            </div>
            <div className="information__social-media">
              <p className="social-media__title">Мы с соц. сетях</p>
              <nav className="social-media__navigation social-media-nav">
                <ul className="social-media-nav__list social-media-nav-list">
                  <li className="social-media-nav-list__element-first">
                    <a href="#" className="social-media-nav-list__element-link">
                      <img width="15" height="15" className="social-media-nav_logo-img" src="./image/facebook.svg"/>
                    </a>
                  </li>
                  <li className="social-media-nav-list__element">
                    <a href="#" className="social-media-nav-list__element-link">
                      <img width="15" height="9" className="social-media-nav_logo-img" src="./image/vk.svg"/>
                    </a>
                  </li>
                  <li className="social-media-nav-list__element">
                    <a href="#" className="social-media-nav-list__element-link">
                      <img width="8" height="13" className="social-media-nav_logo-img" src="./image/odnocklassniki.svg"/>
                    </a>
                  </li>
                  <li className="social-media-nav-list__element">
                    <a href="#" className="social-media-nav-list__element-link">
                      <img width="13" height="13" className="company_logo-img" src="./image/in.svg"/>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer__additives">
        <img width="1840" height="13" className="company_logo-img" src="./image/linelong.svg"/>
        <nav className="additives__navigation additives-nav">
          <ul className="additives-nav__list additives-nav-nav-list">
            <li className="additives-nav-list__element">
                <p className="additives-nav-list__element-link">©2014-2021 Kingikra.ru</p>
            </li>
            <li className="additives-nav-list__element">
              <p className="additives-nav-list__element-link">ИНН: 773575455362</p>
            </li>
            <li className="additives-nav-list__element">
              <p className="additives-nav-list__element-link">Пользовательское соглашение</p>
            </li>
            <li className="additives-nav-list__element">
              <a href="#" className="additives-nav-list__element-link">
                Политика конфиденциальности
              </a>
            </li>
            <li className="additives-nav-list__element">
            
              <a href="#" className="additives-nav-list__element-link">
                Разработано командой
                Лаборатория Бизнеса
              </a>
              
            </li>
          </ul>
        </nav>
        </div>
        </div>
      </footer>
    )
};

const Catalog = () => {
  const catalogTitle = ["Акции", "Красная рыба", "Креветки", "Краб", "Деликатесы","Рыба", "Икра"];
  return(
      <ul className="ct-nav__list ct-nav-list">
      {catalogTitle.map((title) => (
        <li class="ct-nav-list__element">
            <a href="#" className="ct-nav-list__element-link">
                {title}
            </a>
        </li>
      )
      )}
    </ul>
  )
}

const UsefullInformation = () => {
  const usefullTitle = ["О kingikra", "Условия доставки", "Варианты оплаты", "Гарантия качества", "Полезные материалы","Рецепты", "Контакты"];
  return (
      <ul className="ui-nav__list ui-nav-list">
      {usefullTitle.map((title) => (
          <li class="ui-nav-list__element">
              <a href="#" className="ui-nav-list__element-link">
                  {title}
              </a>
          </li>
      )
      )}
    </ul>
  )
}

const ForPay = () => {
  const payImages = [pay, wallet, sber, kiwi, mail, robokassa, visa];
  return (
      <ul className="pay-nav__list pay-nav-list">
      {payImages.map((imgs) => (
          <li className="pay-nav-list__element">
          <a href="#" className="pay-nav-list__element-link">
            <img width="23" height="23" className="pay-nav_logo-img" src={imgs}/>
          </a>
        </li>
      )
      )}
    </ul>
  )
}
export default Footer;