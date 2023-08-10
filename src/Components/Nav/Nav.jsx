import './Nav.scss'
import Logo from '../../assets/icons/Logo.svg'
import header from '../../assets/icons/header-burgerButton.svg'
import AnimationComponent from '../AnimationComponent/AnimationComponent'
import { useState } from 'react'

function Nav() {

  const [menuisopened, setmenuisopened] = useState(false)

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
            <a href="#FreshBakery"><img className='Nav__logo' src={Logo} alt="" /></a>
          </AnimationComponent>

          <div className="Nav__menu">
            <AnimationComponent
              transition={1.7}
              transitionDelay={1.2}
              moveAnimation={{ bottom: { from: 15, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <a href="#AboutUs"><div className="Nav__menuelem">About</div></a>
            </AnimationComponent>

            <AnimationComponent
              transition={1.7}
              transitionDelay={1.4}
              moveAnimation={{ bottom: { from: 20, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <a href="#Products"><div className="Nav__menuelem">Products</div></a>
            </AnimationComponent>

            <AnimationComponent
              transition={1.7}
              transitionDelay={1.6}
              moveAnimation={{ bottom: { from: 25, to: 0 } }}
              triggerOnce={true}
              opacityAnimation={{ from: 0, to: 1 }}
            >
              <a href="#Recipes"><div className="Nav__menuelem">Recipes</div></a>
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
            <img id="menubutton" className="Nav__buttonburger" src={header} alt="" />
            <button className="Nav__buttoncontact">CONTACT</button>
          </AnimationComponent>

        </div>

      </div>

    </div>
  )
}

export default Nav
