import './GetInTouch.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img from '../../assets/img/GetInTouch-img.webp'
import imgzipped from '../../assets/img/GetInTouch-imgzipped.webp'
import bgimg1 from '../../assets/img/GetInTouch-bgimg1.webp'
import bgimg2 from '../../assets/img/GetInTouch-bgimg2.webp'
import bgimg3 from '../../assets/img/GetInTouch-bgimg3.webp'
import AddressIcon from '../../assets/icons/GetInTouch-icon1.svg'
import PhoneIcon from '../../assets/icons/GetInTouch-icon2.svg'

function ContactElem({ icon, counter, title, text }) {
  return (
    <div className="GetInTouch__contactselem">
      <div className="GetInTouch__contactselemicon"><img src={icon} alt="" /></div>
      <div className="GetInTouch__contactselemdescription">
        <div className="GetInTouch__contactselemcounter">{counter}</div>
        <div className="GetInTouch__contactselemtitle">{title}</div>
        <div className="GetInTouch__contactselemtext">{text}</div>
      </div>
    </div>
  )
}

function GetInTouch() {

  return (
    <div className="GetInTouch">

      <div className="GetInTouch__container">

        {/* <AnimationComponent
          transition={1.3}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div style={{ position: 'relative' }}>
            <img className="GetInTouch__img_desktop" src={img} alt="" />
            <img className="GetInTouch__img_bg1" src={bgimg1} alt="" />
            <img className="GetInTouch__img_bg2" src={bgimg2} alt="" />
            <img className="GetInTouch__img_bg3" src={bgimg3} alt="" />
          </div>
        </AnimationComponent> */}

        <div className="GetInTouch__rightside">

          <AnimationComponent
            className={"GetInTouch__title"}
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div >
              Contact With Us
            </div>
          </AnimationComponent>

          <AnimationComponent
            className={"GetInTouch__subtitle"}
            transitionDelay={0.6}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              get in touch
            </div>
          </AnimationComponent>

          {/* <AnimationComponent
            className={"GetInTouch__img_mobile"}
            transition={1.3}
            threshold={0.85}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
            preloadComponent={<img src={imgzipped} alt="" />}
          >
            <img src={img} alt="" />
          </AnimationComponent> */}

          <div className="GetInTouch__contacts">

            <AnimationComponent
              className={"GetInTouch__contactselem"}
              transition={1.3}
              transitionDelay={1.4}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ bottom: { from: 25, to: 0 } }}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <ContactElem
                icon={AddressIcon}
                counter={'01'}
                title={'Address'}
                text={'764 Richardson Rd. Bethpage, NY 11714'}
              />
            </AnimationComponent>

            <AnimationComponent
              className={"GetInTouch__contactselem"}
              transition={1.3}
              transitionDelay={1.9}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ bottom: { from: 25, to: 0 } }}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <ContactElem
                icon={PhoneIcon}
                counter={'02'}
                title={'Phone'}
                text={'+1 (234) 567-89-02'}
              />
            </AnimationComponent>

          </div>

          <AnimationComponent
            transition={1.3}
            transitionDelay={2.2}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="GetInTouch__button">CONTACT US</div>
          </AnimationComponent>

        </div>

      </div>

    </div>
  )
}

export default GetInTouch
