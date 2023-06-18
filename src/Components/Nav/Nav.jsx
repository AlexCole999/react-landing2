import './Nav.scss'
import Logo from '../../assets/icons/Logo.svg'
import header from '../../assets/icons/header-burgerButton.svg'
import AnimationComponent from '../AnimationComponent/AnimationComponent'

function Nav() {

  return (
    <div className='Nav'>

      <AnimationComponent
        transition={2}
        triggerOnce={true}
        opacityAnimation={{ from: 0, to: 1 }}
        moveAnimation={{ left: { from: 25, to: 0 } }}
        blurAnimation={{ from: 3, to: 0 }}
      >
        <img className='Nav__logo' src={Logo} alt="" />
      </AnimationComponent>

      <div className="Nav__menu">
        <div className="Nav__menuelem">About</div>
        <div className="Nav__menuelem">Products</div>
        <div className="Nav__menuelem">Recipes</div>
      </div>

      <AnimationComponent
        transition={2}
        triggerOnce={true}
        opacityAnimation={{ from: 0, to: 1 }}
        moveAnimation={{ right: { from: 25, to: 0 } }}
        blurAnimation={{ from: 3, to: 0 }}
      >
        <img src={header} alt="" />
      </AnimationComponent>

    </div>
  )
}

export default Nav
