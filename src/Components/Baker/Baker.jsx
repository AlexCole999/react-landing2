import './Baker.scss'
import BakerImg from '../../assets/img/Baker-img1.webp'
import bgImg1 from '../../assets/img/Baker-bgImg1.webp'
import bgImg2 from '../../assets/img/Baker-bgImg2.webp'
import bgImg3 from '../../assets/img/Baker-bgImg3.webp'
import arrowMobileIcon from '../../assets/icons/Baker-arrowmobileicon.svg'

import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { useState } from 'react'

function Baker() {

  const [counter, setcounter] = useState(1)

  return (
    <div className="Baker" id="Baker">
      <div className="Baker__container">
        <div className="Baker__sideleft">
          <AnimationComponent
            className="Baker__title"
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              Meet Our
              Professional Baker
            </div>
          </AnimationComponent>
          <AnimationComponent
            className="Baker__subtitle"
            transition={1.3}
            threshold={0.65}
            transitionDelay={1.2}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div >
              Our Baker
            </div>
          </AnimationComponent>

          <AnimationComponent
            className="Baker__subtitle"
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <img className="Baker__img_mobile" src={BakerImg} alt="" />
          </AnimationComponent>

          <AnimationComponent
            className="Baker__carousel_desktop"
            transition={2}
            threshold={0.65}
            transitionDelay={1}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Baker__carousel_desktopnav">
              <div className="Baker__carousel_desktopnavbuttons">
                <img
                  className="Baker__carousel_desktopnavbuttonsup"
                  src={arrowMobileIcon}
                  alt=""
                  onClick={() => { if (counter > 1) { setcounter(counter => counter = counter - 1) } }
                  }
                />
                <img
                  className="Baker__carousel_desktopnavbuttonsdown"
                  src={arrowMobileIcon}
                  alt=""
                  onClick={() => { if (counter < 3) { setcounter(counter => counter = counter + 1) } }}
                />
              </div>
            </div>
            <div className="Baker__carousel_desktopdescription">

              <div className="Baker__carousel_desktopcounter">
                Baker
              </div>

              <div className={`Baker__carousel_desktopname Baker__carousel_desktopname${counter == 1 ? 'selected' : ''}`}>Stina Gunnarsdottir</div>

              <div className="Baker__carousel_desktoptext" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way.
                </AnimationComponent>
              </div>

              <div className={`Baker__carousel_desktopname Baker__carousel_desktopname${counter == 2 ? 'selected' : ''}`}>Jaquon Hart</div>
              <div className="Baker__carousel_desktoptext" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way.
                </AnimationComponent>
              </div>

              <div className={`Baker__carousel_desktopname Baker__carousel_desktopname${counter == 3 ? 'selected' : ''}`}>Oluchi Mazi</div>
              <div className="Baker__carousel_desktoptext" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way.
                </AnimationComponent>
              </div>

            </div>
          </AnimationComponent>
        </div>

        <AnimationComponent
          transition={1.3}
          threshold={0.65}
          transitionDelay={0.6}
          triggerOnce={true}
          moveAnimation={{ right: { left: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Baker__sideright">
            <img className="Baker__img_desktop" src={BakerImg} alt="" />
            <img className="Baker__img_desktopbg1" src={bgImg1} alt="" />
            <img className="Baker__img_desktopbg2" src={bgImg2} alt="" />
            <img className="Baker__img_desktopbg3" src={bgImg3} alt="" />
            <div className="Baker__carousel_mobile">
              <div className="Baker__carousel_mobilenav">

                <div className="Baker__carousel_mobilenavtitle" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >Stina Gunnarsdottir</div>
                  </AnimationComponent>
                </div>

                <div className="Baker__carousel_mobilenavtitle" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >Jaquon Hart</div>
                  </AnimationComponent>
                </div>

                <div className="Baker__carousel_mobilenavtitle" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >Oluchi Mazi</div>
                  </AnimationComponent>
                </div>

                <div className="Baker__carousel_mobilenavtitle" style={{ display: `${counter == 4 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >On her way she</div>
                  </AnimationComponent>
                </div>

                <div className="Baker__carousel_mobilenavbuttons">
                  <img
                    className="Baker__carousel_mobilenavbuttonsleft"
                    src={arrowMobileIcon}
                    alt=""
                    onClick={() => { if (counter > 1) { setcounter(counter => counter = counter - 1) } }}
                  />
                  <img
                    className="Baker__carousel_mobilenavbuttonsright"
                    src={arrowMobileIcon}
                    alt=""
                    onClick={() => { if (counter < 3) { setcounter(counter => counter = counter + 1) } }}
                  />
                </div>
              </div>

              <div className="Baker__carousel_mobiletext" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way.
                  </div>
                </AnimationComponent>
              </div>

              <div className="Baker__carousel_mobiletext" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way.                  </div>
                </AnimationComponent>
              </div>

              <div className="Baker__carousel_mobiletext" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way.                  </div>
                </AnimationComponent>
              </div>

            </div>
          </div>
        </AnimationComponent>

      </div>
    </div>
  )
}

export default Baker