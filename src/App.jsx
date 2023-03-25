import './App.scss'
import Nav from './Components/Nav/Nav';
import FreshBakery from './Components/FreshBakery/FreshBakery';
import Process from './Components/Process/Process';
import Products from './Components/Products/Products';

function App() {

  return (
    <div className="App">
      <Nav />
      <FreshBakery />
      <Process />
      <Products />
    </div>
  )
}

export default App
