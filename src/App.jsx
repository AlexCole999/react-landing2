import './App.scss'
import Nav from './Components/Nav/Nav';
import FreshBakery from './Components/FreshBakery/FreshBakery';
import Process from './Components/Process/Process';
import Products from './Components/Products/Products';
import Features from './Components/Features/Features';
import AboutUs from './Components/AboutUs/AboutUs';
import Baker from './Components/Baker/Baker';
import Testimonials from './Components/Testimonials/Testimonials';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';

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
