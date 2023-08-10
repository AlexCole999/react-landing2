import LoadingComponent from './Components/LoadingComponent/LoadingComponent';
import { lazy, Suspense } from 'react';
import Nav from './Components/Nav/Nav'
import './App.scss'

import CloseIcon from './assets/icons/CloseIcon.svg'

const FreshBakery = lazy(() => import('./Components/FreshBakery/FreshBakery'))
const Process = lazy(() => import('./Components/Process/Process'))
const Products = lazy(() => import('./Components/Products/Products'))
const Features = lazy(() => import('./Components/Features/Features'))
const AboutUs = lazy(() => import('./Components/AboutUs/AboutUs'))
const Baker = lazy(() => import('./Components/Baker/Baker'))
const Testimonials = lazy(() => import('./Components/Testimonials/Testimonials'))
const GetInTouch = lazy(() => import('./Components/GetInTouch/GetInTouch'))
const Footer = lazy(() => import('./Components/Footer/Footer'))
const Recipes = lazy(() => import('./Components/Recipes/Recipes'))


function App() {

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<LoadingComponent />}>
        <OpenedMenu />
        <FreshBakery />
        <AboutUs />
        <Features />
        <Products />
        <Process />
        <Recipes />
        <Baker />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </Suspense >
    </div >
  )
}

export default App

function OpenedMenu({ }) {
  return (<div className="openedmenu display-none" id="openedmenu">

    <div className="openedmenu__button" id="closemenubutton">
      <div className="openedmenu__buttontext">Back</div><img className="openedmenu__buttonicon" src={CloseIcon} alt="" />
    </div>

    <div className="openedmenulist">

      <a href="#FreshBakery" className="openedmenu__item openedmenu__item_selected">
        <div className="openedmenu__itemtext">Fresh Bakery</div>
      </a>

      <a href="#AboutUs" className="openedmenu__item">
        <div className="openedmenu__itemtext">About Us</div>
      </a>

      <a href="#Features" className="openedmenu__item">
        <div className="openedmenu__itemtext">Features</div>
      </a>

      <a href="#Products" className="openedmenu__item">
        <div className="openedmenu__itemtext">Products</div>
      </a>

      <a href="#Process" className="openedmenu__item">
        <div className="openedmenu__itemtext">Process</div>
      </a>

      <a href="#Recipes" className="openedmenu__item">
        <div className="openedmenu__itemtext">Recipes</div>
      </a>

      <a href="#Baker" className="openedmenu__item">
        <div className="openedmenu__itemtext">Baker</div>
      </a>

      <a href="#Testimonials" className="openedmenu__item">
        <div className="openedmenu__itemtext">Testimonials</div>
      </a>

      <a href="#GetInTouch" className="openedmenu__item">
        <div className="openedmenu__itemtext">Contact With Us</div>
      </a>

    </div>
  </div>);
}
