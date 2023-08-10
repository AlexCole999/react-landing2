import LoadingComponent from './Components/LoadingComponent/LoadingComponent';
import Nav from './Components/Nav/Nav'
import OpenedMenu from './Components/OpenedMenu/OpenedMenu';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import './App.scss'

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

  const [menuisopened, setmenuisopened] = useState(true)
  const closeMenu = () => setmenuisopened(false)
  const openMenu = () => setmenuisopened(true)

  return (
    <div className="App">
      <Nav openMenu={openMenu} />
      <Suspense fallback={<LoadingComponent />}>
        <OpenedMenu menuisopened={menuisopened} closeMenu={closeMenu} />
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
