import './Footer.scss'
import Logo from '../../assets/icons/LogoWhite.svg'
import twitter from '../../assets/icons/twitterIcon.svg'
import facebook from '../../assets/icons/facebookIcon.svg'
import instagram from '../../assets/icons/instagramIcon.svg'
import AnimationComponent from './../AnimationComponent/AnimationComponent';

function Footer() {

  return (
    <div className="Footer" id="Footer">

      <div className="Footer__container">

        <div className="Footer__topcontent">

          <AnimationComponent
            moveAnimation={{ left: { from: 25, to: 0 } }}
            threshold={0.65}
            transitionDelay={0.2}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__logo">
              <a href="#FreshBakery">
                <img src={Logo} alt="" />
              </a>
            </div>

          </AnimationComponent>

          <AnimationComponent
            moveAnimation={{ left: { from: 25, to: 0 } }}
            threshold={0.65}
            transitionDelay={0.8}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__topcontentcolumn">
              <div className="Footer__title">Menu</div>
              <a href="#AboutUs"><div className="Footer__elem">About</div></a>
              <a href="#Products"><div className="Footer__elem">Product</div></a>
              <a href="#Recipes"><div className="Footer__elem">Recipes</div></a>
              <a href="#GetInTouch"><div className="Footer__elem">Contact</div></a>
            </div>
          </AnimationComponent>

          <AnimationComponent
            moveAnimation={{ left: { from: 25, to: 0 } }}
            threshold={0.65}
            transitionDelay={1.4}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__topcontentcolumn">
              <div className="Footer__title">Service</div>
              <div className="Footer__elem">Bakery</div>
              <div className="Footer__elem">Delivery</div>
              <div className="Footer__elem">Catering</div>
              <div className="Footer__elem">Corporate</div>
            </div>
          </AnimationComponent>

          <AnimationComponent
            moveAnimation={{ left: { from: 25, to: 0 } }}
            threshold={0.65}
            transitionDelay={2}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__topcontentcolumn">
              <div className="Footer__title">Social</div>
              <div className="Footer__icons">
                <div className="Footer__iconsitem">
                  <img src={twitter} alt="" />
                </div>
                <div className="Footer__iconsitem">
                  <img src={facebook} alt="" />
                </div>
                <div className="Footer__iconsitem">
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </AnimationComponent>

        </div>

        <div className="Footer__dividercontainer">
          <div className="Footer__divider"></div>
        </div>


        <div className="Footer__bottomcontent">

          <AnimationComponent
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            threshold={0.65}
            transitionDelay={2}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__bottomcontentelems">
              <div className="Footer__elem">Terms of Use</div>
              <div className="Footer__elem">Privacy Policy</div>
            </div>
          </AnimationComponent>

          <AnimationComponent
            transitionDelay={2.6}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
          >
            <div className="Footer__rights">
              Copyright © 2020 Laaqiq. All Rights Reserved.
            </div>
          </AnimationComponent>

        </div>

      </div>

    </div>
  )
}

export default Footer
