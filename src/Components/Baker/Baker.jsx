import './Baker.scss'
import bakerImg from '../../assets/img/Baker-img1.webp'
import bgImg1 from '../../assets/img/Baker-bgImg1.webp'
import bgImg2 from '../../assets/img/Baker-bgImg2.webp'
import bgImg3 from '../../assets/img/Baker-bgImg3.webp'
import arrowMobileIcon from '../../assets/icons/Baker-arrowmobileicon.svg'

function Baker() {

  return (
    <div className="Baker">
      <div className="Baker__container">
        <div className="Baker__sideleft">
          <div className="Baker__title">
            Meet Our Professional Baker
          </div>
          <div className="Baker__subtitle">
            Our Baker
          </div>
          <img className="Baker__img_mobile" src={bakerImg} alt="" />
          <div className="Baker__carousel_desktop">
            <div className="Baker__carousel_desktopnav">
              <div className="Baker__carousel_desktopnavbuttons">
                <div className="Baker__carousel_desktopnavbuttonsup">
                  <img src={arrowMobileIcon} alt="" />
                </div>
                <div className="Baker__carousel_desktopnavbuttonsdown">
                  <img src={arrowMobileIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="Baker__carousel_desktopdescription">
              <div className="Baker__carousel_desktoptitle">Baker</div>
              <div className="Baker__carousel_desktopnameselected">Stina Gunnarsdottir</div>
              <div className="Baker__carousel_desktoptext">She packed her seven versalia, put her initial into the belt and made herself on the way.</div>
              <div className="Baker__carousel_desktopname">Jaquon Hart</div>
              <div className="Baker__carousel_desktopname">Oluchi Mazi</div>
            </div>
          </div>
        </div>
        <div className="Baker__sideright">
          <img className="Baker__img_desktop" src={bakerImg} alt="" />
          <img className="Baker__img_desktopbg1" src={bgImg1} alt="" />
          <img className="Baker__img_desktopbg2" src={bgImg2} alt="" />
          <img className="Baker__img_desktopbg3" src={bgImg3} alt="" />
          <div className="Baker__carousel_mobile">
            <div className="Baker__carousel_mobilenav">
              <div className="Baker__carousel_mobilenavtitle">Stina Gunnarsdottir</div>
              <div className="Baker__carousel_mobilenavbuttons">
                <div className="Baker__carousel_mobilenavbuttonsleft">
                  <img src={arrowMobileIcon} alt="" />
                </div>
                <div className="Baker__carousel_mobilenavbuttonsright">
                  <img src={arrowMobileIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="Baker__carousel_mobiletext">
              She packed her seven versalia, put her initial into the belt and made herself on the way.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Baker
