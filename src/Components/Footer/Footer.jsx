import './Footer.scss'
import Logo from '../../assets/icons/LogoWhite.svg'
import twitter from '../../assets/icons/twitterIcon.svg'
import facebook from '../../assets/icons/facebookIcon.svg'
import instagram from '../../assets/icons/instagramIcon.svg'

function Footer() {

  return (
    <div className="Footer">

      <div className="Footer__container">

        <div className="Footer__topcontent">

          <div className="Footer__logo">
            <img src={Logo} alt="" />
          </div>

          <div className="Footer__topcontentcolumn">
            <div className="Footer__title">Menu</div>
            <div className="Footer__elem">About</div>
            <div className="Footer__elem">Product</div>
            <div className="Footer__elem">Recipes</div>
            <div className="Footer__elem">Contact</div>
          </div>

          <div className="Footer__topcontentcolumn">
            <div className="Footer__title">Service</div>
            <div className="Footer__elem">Bakery</div>
            <div className="Footer__elem">Delivery</div>
            <div className="Footer__elem">Catering</div>
            <div className="Footer__elem">Corporate</div>
          </div>

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

        </div>

        <div className="Footer__divider"></div>

        <div className="Footer__bottomcontent">

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <div className="Footer__elem">Terms of Use</div>
            <div className="Footer__elem">Privacy Policy</div>
          </div>

          <div className="Footer__rights">
            Copyright © 2020 Laaqiq. All Rights Reserved.
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
