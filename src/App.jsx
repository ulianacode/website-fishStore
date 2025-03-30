import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="section">
    <div className="section__container">
          <div className="section__buy-with  buy-with">
            <p className="buy-with__title">С этим товаром покупают</p>
            <div className="buy-with__card"> 
              <ul className="buy-with__card__list buy-with-card-list">
                <li className="buy-with-card-list__element">
                  <img width="340" height="260" className="hits-card-list__element--img" src="./image/shrimps.jpg"/>
                  <p className="buy-with-card-list__element--name">Креветки очищенные</p>
                  <div className="buy-with-card-list__cart cart">
                    <p className="cart__cost">4 200 Ꝑ/кг</p>
                    <div className="cart_button">
                      <a href="#" className="cart_button__cost--link">В корзину</a>
                      <img width="13" height="13" className="cart_button__cost--img" src="./image/cart.svg"/>
                    </div>
                  </div>
                </li>
                </ul>
      </div>
    </div>
    </div>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
