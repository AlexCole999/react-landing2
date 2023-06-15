import LoadingComponent from './Components/LoadingComponent/LoadingComponent';
import { lazy, Suspense } from 'react';
import Nav from './Components/Nav/Nav'
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

function App() {

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<LoadingComponent />}>
        <FreshBakery />
        <Features />
        <AboutUs />
        <Products />
        <Process />
        <Baker />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
