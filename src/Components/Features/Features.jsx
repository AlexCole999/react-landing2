import './Features.scss'
import AnimationComponent from '../AnimationComponent/AnimationComponent'
import { ReactComponent as Icon1 } from '../../assets/icons/Features-icon1.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/Features-icon2.svg'
import { ReactComponent as Icon3 } from '../../assets/icons/Features-icon3.svg'
import elemPicture from '../../assets/icons/Features-elemPicture.webp'

function Features() {

  return (
    <div className="Features">
      <div className="Features__container">

        <AnimationComponent
          className={"Features__title"}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
          blurAnimation={{ from: 3, to: 0 }}
        >
          <div >
            Baked With Love
          </div>
        </AnimationComponent>

        <AnimationComponent
          className={"Features__subtitle"}
          transitionDelay={0.8}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
          blurAnimation={{ from: 3, to: 0 }}
        >
          <div>
            Our Features
          </div>
        </AnimationComponent>

        <div className="Features__row">

          <AnimationComponent
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
            blurAnimation={{ from: 3, to: 0 }}
          >
            <div className="Features__rowelem">
              <div className="Features__rowelemcontent">
                <Icon1 className='Features__rowelemicon' />
                <div className="Features__rowelemtitle">Fresh</div>
                <div className="Features__rowelemtext">Nothing the copy said could convince her and so it didn’t take long.</div>
                <img className="Features__rowelempicture" src={elemPicture} alt="" />
              </div>
            </div>
          </AnimationComponent>

          <AnimationComponent
            transitionDelay={0.8}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
            blurAnimation={{ from: 3, to: 0 }}
          >
            <div className="Features__rowelem">
              <div className="Features__rowelemcontent">
                <Icon2 className='Features__rowelemicon' />
                <div className="Features__rowelemtitle">Natural</div>
                <div className="Features__rowelemtext">Copy Writers ambushed her, made her drunk with Longe and Parole.</div>
                <img className="Features__rowelempicture" src={elemPicture} alt="" />
              </div>
            </div>
          </AnimationComponent>

          <AnimationComponent
            transitionDelay={1.6}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
            blurAnimation={{ from: 3, to: 0 }}
          >
            <div className="Features__rowelem">
              <div className="Features__rowelemcontent">
                <Icon3 className='Features__rowelemicon' />
                <div className="Features__rowelemtitle">Tasty</div>
                <div className="Features__rowelemtext">And if she hasn’t been rewritten, then they are still using her.</div>
                <img className="Features__rowelempicture" src={elemPicture} alt="" />
              </div>
            </div>
          </AnimationComponent>

        </div>

      </div>

    </div>
  )
}

export default Features


