import './App.css'
import MiddleHeader from './components/MiddleHeader/MiddleHeader'
import ProductCard from './components/ProductCard/ProductCard'
import TopHeader from './components/TopHeader/TopHeader'
import BottomHeader from './components/BottomHeader/BottomHeader'

function App() {
  return (
    <>
      <div>
      <header className="header">
        <div className="header__container">
          <TopHeader/>
          <img width="1839" height="2" className="header__line" src="../image/lineheader.svg"/>
          <MiddleHeader/>
          <img width="1839" height="2" className="header__line" src="../image/lineheader.svg"/>
          <BottomHeader/>
          <img width="1839" height="2" className="header__line" src="../image/lineheader.svg"/>
        </div>
      </header>
        <ProductCard></ProductCard>
        </div>
    </>
  )
}

export default App
