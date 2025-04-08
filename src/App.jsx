import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  return (
    <>
      <div>
      <header class="header">
        <div class="header__container">
          <div class="header__top top">
            <div class="top__city"> 
              <p class="city__location-description">Ваш город:</p>
              <img width="15" height="18" class="city__location-img" src="./image/location.svg"/>
              <span class="city__location-name">Москва</span>
            </div>
            <nav class="top__navigation nav">
              <ul class="nav__list nav-list">
                <li class="nav-list__element_first">
                  <a href="#" class="nav-list__element-link">
                    Доставка
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Оплата
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Рецепты
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Статьи
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Рейтинг на Яндекс Метрике
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Гарантия качества
                  </a>
                </li>
                <li class="nav-list__element">
                  <a href="#" class="nav-list__element-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div class="top__connection connection">
              <div class="connection__number">
                <img width="17" height="17" class="connection__number-img" src="./image/phone.svg"/>
                <a href="tel:+74959795189" class="connection__number-name">+7 495 979 51 89</a>
              </div>
              <button class="connection__application">
                <span>Оставить заявку</span>
              </button>
              </div>
          </div>
          <img width="1839" height="2" class="header__line" src="../image/lineheader.svg"/>
          <div class="header__middle middle"> 
            <div class="middle__logo">
              <img width="270" height="35" class="middle__logo-img" src="./image/logo.svg"/>
              <p class="middle__logo-name">Продажа свежих морепродуктов с доставкой по Москве и МО</p>
            </div>
            <input class="middle__input" placeholder="ПОИСК ПО ТОВАРАМ, РЕЦЕПТАМ И СТАТЬЯМ" />
            <div class="middle__access">
              <div class="access__login">
                <img width="17" height="17" class="access__login-img" src="./image/login.svg"/>
                <a href="#" class="access__login-name">Войти</a>
              </div>
              <div class="access__favourite">
                <img width="25" height="25" class="access__favourite-img" src="./image/favourite.svg"/>
                <a href="#" class="access__favourite-name">Избранное</a>
              </div>
              </div>
              <div class="middle__recycle-bin">
                <img width="50" height="50" class="middle__recycle-bin-img" src="./image/recycle-bin.svg"/>
                <div class="recycle-bin__description">
                  <span class="description-name">Ваша корзина</span>
                  <span class="description-cost">2540 ₽</span>
                </div>
              </div>
            </div>
          <img width="1839" height="2" class="header__line" src="../image/lineheader.svg"/>
          <div class="header__bottom bottom">

            <button class="bottom__application">
              <span class="application__title"> Каталог</span>
            </button>
            <nav class="bottom__navigation bottom-nav">
              <ul class="bottom-nav__list bottom-nav-list">
                <li class="bottom-nav-list__element">
                  <img width="22" height="22" class="bottom-nav-list__element--img" src="./image/sale.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Акции
                  </a>
                </li>
                <li class="bottom-nav-list__element">
                  <img width="24" height="24" class="bottom-nav-list__element--img" src="./image/fish2.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Красная рыба
                  </a>
                </li>
                <li class="bottom-nav-list__element">
                  <img width="16" height="23" class="bottom-nav-list__element--img" src="./image/shrimp.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Креветки
                  </a>
                </li>
                <li class="bottom-nav-list__element">
                  <img width="23" height="23" class="bottom-nav-list__element--img" src="./image/crab.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Краб
                  </a>
                </li>
                <li class="bottom-nav-list__element">
                  <img width="28" height="28" class="bottom-nav-list__element--img" src="./image/delicacies.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Деликатесы
                  </a>
                </li>
                <li class="bottom-nav-list__element">
                  <img width="22" height="22" class="bottom-nav-list__element--img" src="./image/fish.svg"/>
                  <a href="#" class="bottom-nav-list__element-link">
                    Рыба
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <img width="1839" height="2" class="header__line" src="../image/lineheader.svg"/>
        </div>
      </header>
        <ProductCard></ProductCard>
        </div>
    </>
  )
}

export default App
