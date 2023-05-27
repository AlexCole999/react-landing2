import './Nav.scss'
import Logo from '../../assets/Logo.svg'
import header from '../../assets/header-burgerButton.svg'

function Nav() {

  return (
    <div className='Nav'>

      <img className='Nav__logo' src={Logo} alt="" />

      <div className="Nav__menu">
        <div className="Nav__menuelem">About</div>
        <div className="Nav__menuelem">Products</div>
        <div className="Nav__menuelem">Recipes</div>
      </div>

      <img src={header} alt="" />

    </div>
  )
}

export default Nav
