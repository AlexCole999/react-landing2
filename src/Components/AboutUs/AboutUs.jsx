import './AboutUs.scss'
import AboutUsImg from '../../assets/img/AboutUs-img1.webp'
import bgImg1 from '../../assets/img/AboutUs-bgImg1.webp'
import bgImg2 from '../../assets/img/Baker-bgImg2.webp'
import bgImg3 from '../../assets/img/Baker-bgImg3.webp'
import arrowMobileIcon from '../../assets/icons/Baker-arrowmobileicon.svg'

function AboutUs() {

  return (
    <div className="AboutUs">
      <div className="AboutUs__container">
        <div className="AboutUs__sideleft">
          <div className="AboutUs__title">
            Baking Special Moments
          </div>
          <div className="AboutUs__subtitle">
            About Us
          </div>
          <img className="AboutUs__img_mobile" src={AboutUsImg} alt="" />
          <div className="AboutUs__carousel_desktop">
            <div className="AboutUs__carousel_desktopnav">
              <div className="AboutUs__carousel_desktopnavbuttons">
                <div className="AboutUs__carousel_desktopnavbuttonsup">
                  <img src={arrowMobileIcon} alt="" />
                </div>
                <div className="AboutUs__carousel_desktopnavbuttonsdown">
                  <img src={arrowMobileIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="AboutUs__carousel_desktopdescription">
              <div className="AboutUs__carousel_desktopcounter">01</div>
              <div className="AboutUs__carousel_desktopnameselected">Last view back</div>
              <div className="AboutUs__carousel_desktoptext">She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.</div>
              <div className="AboutUs__carousel_desktopname">On the skyline</div>
              <div className="AboutUs__carousel_desktopname">Pityful a rethoric</div>
              <div className="AboutUs__carousel_desktopname">On her way she</div>
            </div>
          </div>
        </div>
        <div className="AboutUs__sideright">
          <img className="AboutUs__img_desktop" src={AboutUsImg} alt="" />
          <img className="AboutUs__img_desktopbg1" src={bgImg1} alt="" />
          <img className="AboutUs__img_desktopbg2" src={bgImg2} alt="" />
          <img className="AboutUs__img_desktopbg3" src={bgImg3} alt="" />
          <div className="AboutUs__carousel_mobile">
            <div className="AboutUs__carousel_mobilenav">
              <div className="AboutUs__carousel_mobilenavtitle">
                Last view back
              </div>
              <div className="AboutUs__carousel_mobilenavbuttons">
                <div className="AboutUs__carousel_mobilenavbuttonsleft">
                  <img src={arrowMobileIcon} alt="" />
                </div>
                <div className="AboutUs__carousel_mobilenavbuttonsright">
                  <img src={arrowMobileIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="AboutUs__carousel_mobiletext">
              She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
