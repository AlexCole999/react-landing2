import './GetInTouch.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img from '../../assets/img/GetInTouch-img.webp'
import imgzipped from '../../assets/img/GetInTouch-imgzipped.webp'
import bgimg1 from '../../assets/img/GetInTouch-bgimg1.webp'
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
            transitionDelay={0.8}

            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              get in touch
            </div>
          </AnimationComponent>

          <AnimationComponent
            className={"GetInTouch__img_mobile"}
            transition={1.3}
            threshold={0.85}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
            preloadComponent={imgzipped}
          >
            <img src={img} alt="" />
          </AnimationComponent>

          <div className="GetInTouch__contacts">
            <AnimationComponent
              className={"GetInTouch__contactselem"}
              transition={1.3}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ left: { from: 25, to: 0 } }}
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
              transitionDelay={0.8}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ left: { from: 25, to: 0 } }}
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

        </div>

      </div>

    </div>
  )
}

export default GetInTouch
