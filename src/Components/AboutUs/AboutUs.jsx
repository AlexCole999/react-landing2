import './AboutUs.scss'
import AboutUsImg from '../../assets/img/AboutUs-img1.webp'
import bgImg1 from '../../assets/img/AboutUs-bgImg1.webp'
import bgImg2 from '../../assets/img/Baker-bgImg2.webp'
import bgImg3 from '../../assets/img/Baker-bgImg3.webp'
import arrowMobileIcon from '../../assets/icons/Baker-arrowmobileicon.svg'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { useState } from 'react'

function AboutUs() {

  const [counter, setcounter] = useState(1)

  return (
    <div className="AboutUs">
      <div className="AboutUs__container">
        <div className="AboutUs__sideleft">
          <AnimationComponent
            className="AboutUs__title"
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              Baking Special Moments
            </div>
          </AnimationComponent>
          <AnimationComponent
            className="AboutUs__subtitle"
            transition={1.3}
            threshold={0.65}
            transitionDelay={1.2}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div >
              About Us
            </div>
          </AnimationComponent>

          <AnimationComponent
            className="AboutUs__subtitle"
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <img className="AboutUs__img_mobile" src={AboutUsImg} alt="" />
          </AnimationComponent>

          <AnimationComponent
            className="AboutUs__carousel_desktop"
            transition={2}
            threshold={0.65}
            transitionDelay={1}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="AboutUs__carousel_desktopnav">
              <div className="AboutUs__carousel_desktopnavbuttons">
                <img
                  className="AboutUs__carousel_desktopnavbuttonsup"
                  src={arrowMobileIcon}
                  alt=""
                  onClick={() => { if (counter > 1) { setcounter(counter => counter = counter - 1) } }
                  }
                />
                <img
                  className="AboutUs__carousel_desktopnavbuttonsdown"
                  src={arrowMobileIcon}
                  alt=""
                  onClick={() => { if (counter < 4) { setcounter(counter => counter = counter + 1) } }}
                />
              </div>
            </div>
            <div className="AboutUs__carousel_desktopdescription">

              <div className="AboutUs__carousel_desktopcounter">
                0{counter}
              </div>

              <div className={`AboutUs__carousel_desktopname AboutUs__carousel_desktopname${counter == 1 ? 'selected' : ''}`}>Last view back</div>

              <div className="AboutUs__carousel_desktoptext" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                </AnimationComponent>
              </div>

              <div className={`AboutUs__carousel_desktopname AboutUs__carousel_desktopname${counter == 2 ? 'selected' : ''}`}>On the skyline</div>
              <div className="AboutUs__carousel_desktoptext" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                </AnimationComponent>
              </div>

              <div className={`AboutUs__carousel_desktopname AboutUs__carousel_desktopname${counter == 3 ? 'selected' : ''}`}>Pityful a rethoric</div>
              <div className="AboutUs__carousel_desktoptext" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                </AnimationComponent>
              </div>

              <div className={`AboutUs__carousel_desktopname AboutUs__carousel_desktopname${counter == 4 ? 'selected' : ''}`}>On her way she</div>
              <div className="AboutUs__carousel_desktoptext" style={{ display: `${counter == 4 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={0.6}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
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
          <div className="AboutUs__sideright">
            <img className="AboutUs__img_desktop" src={AboutUsImg} alt="" />
            <img className="AboutUs__img_desktopbg1" src={bgImg1} alt="" />
            <img className="AboutUs__img_desktopbg2" src={bgImg2} alt="" />
            <img className="AboutUs__img_desktopbg3" src={bgImg3} alt="" />
            <div className="AboutUs__carousel_mobile">
              <div className="AboutUs__carousel_mobilenav">

                <div className="AboutUs__carousel_mobilenavtitle" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >Last view back</div>
                  </AnimationComponent>
                </div>

                <div className="AboutUs__carousel_mobilenavtitle" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >On the skyline</div>
                  </AnimationComponent>
                </div>

                <div className="AboutUs__carousel_mobilenavtitle" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >Pityful a rethoric</div>
                  </AnimationComponent>
                </div>

                <div className="AboutUs__carousel_mobilenavtitle" style={{ display: `${counter == 4 ? 'block' : 'none'}` }}>
                  <AnimationComponent
                    transition={1.3}
                    threshold={0.65}
                    opacityAnimation={{ from: 0.01, to: 1 }}
                  >
                    <div >On her way she</div>
                  </AnimationComponent>
                </div>

                <div className="AboutUs__carousel_mobilenavbuttons">
                  <img
                    className="AboutUs__carousel_mobilenavbuttonsleft"
                    src={arrowMobileIcon}
                    alt=""
                    onClick={() => { if (counter > 1) { setcounter(counter => counter = counter - 1) } }}
                  />
                  <img
                    className="AboutUs__carousel_mobilenavbuttonsright"
                    src={arrowMobileIcon}
                    alt=""
                    onClick={() => { if (counter < 4) { setcounter(counter => counter = counter + 1) } }}
                  />
                </div>
              </div>

              <div className="AboutUs__carousel_mobiletext" style={{ display: `${counter == 1 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                  </div>
                </AnimationComponent>
              </div>

              <div className="AboutUs__carousel_mobiletext" style={{ display: `${counter == 2 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                  </div>
                </AnimationComponent>
              </div>

              <div className="AboutUs__carousel_mobiletext" style={{ display: `${counter == 3 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                  </div>
                </AnimationComponent>
              </div>

              <div className="AboutUs__carousel_mobiletext" style={{ display: `${counter == 4 ? 'block' : 'none'}` }}>
                <AnimationComponent
                  transition={1.8}
                  threshold={0.65}
                  opacityAnimation={{ from: 0.01, to: 1 }}
                >
                  <div>
                    She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.
                  </div>
                </AnimationComponent>
              </div>

            </div>
          </div>
        </AnimationComponent>

      </div>
    </div>
  )
}

export default AboutUs
