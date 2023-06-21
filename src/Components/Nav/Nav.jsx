import './Nav.scss'
import Logo from '../../assets/icons/Logo.svg'
import header from '../../assets/icons/header-burgerButton.svg'
import AnimationComponent from '../AnimationComponent/AnimationComponent'

function Nav() {

  return (
    <div className='Nav'>

      <div className="Nav__container">

        <div className="Nav__leftside">

          <AnimationComponent
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            moveAnimation={{ left: { from: 25, to: 0 } }}
          >
            <img className='Nav__logo' src={Logo} alt="" />
          </AnimationComponent>

          <div className="Nav__menu">
            <AnimationComponent
              transition={1.7}
              transitionDelay={1.2}
              moveAnimation={{ bottom: { from: 15, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <div className="Nav__menuelem">About</div>
            </AnimationComponent>

            <AnimationComponent
              transition={1.7}
              transitionDelay={1.4}
              moveAnimation={{ bottom: { from: 20, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <div className="Nav__menuelem">Products</div>
            </AnimationComponent>

            <AnimationComponent
              transition={1.7}
              transitionDelay={1.6}
              moveAnimation={{ bottom: { from: 25, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <div className="Nav__menuelem">Recipes</div>
            </AnimationComponent>

          </div>

        </div>

        <div className="Nav__rightside">

          <AnimationComponent
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            moveAnimation={{ right: { from: 25, to: 0 } }}
          >
            <img className="Nav__buttonburger" src={header} alt="" />
            <button className="Nav__buttoncontact">CONTACT</button>
          </AnimationComponent>

        </div>

      </div>

    </div>
  )
}

export default Nav
