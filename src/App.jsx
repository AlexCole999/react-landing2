import './App.scss'
import { Suspense, lazy } from 'react';

const Footer = lazy(() => import('./Components/Footer/Footer'))
const Nav = lazy(() => import('./Components/Nav/Nav'))
const FreshBakery = lazy(() => import('./Components/FreshBakery/FreshBakery'))
const Process = lazy(() => import('./Components/Process/Process'))
const Products = lazy(() => import('./Components/Products/Products'))
const Features = lazy(() => import('./Components/Features/Features'))
const AboutUs = lazy(() => import('./Components/AboutUs/AboutUs'))
const Baker = lazy(() => import('./Components/Baker/Baker'))
const Testimonials = lazy(() => import('./Components/Testimonials/Testimonials'))
const GetInTouch = lazy(() => import('./Components/GetInTouch/GetInTouch'))

function App() {

  return (
    <div className="App">
      <Nav />
      <FreshBakery />
      <AboutUs />
      <Features />
      <Products />
      <Process />
      <Baker />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
