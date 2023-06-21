import './Process.scss'
import elemPicture from '../../assets/img/Process-img1.webp'
import AnimationComponent from './../AnimationComponent/AnimationComponent';

function RowElem({ elemPicture, counter, title, text }) {
  return (
    <div className="Process__rowelem">
      <div className="Process__rowelemcontent">
        <div className="Process__rowelemcounter">{counter}</div>
        <div className="Process__rowelemtitle">{title}</div>
        <div className="Process__rowelemtext">{text}</div>
        <img className="Process__rowelempicture" src={elemPicture} alt="" />
      </div>
    </div>
  );
}

function Process() {

  return (

    <div className="Process">

      <div className="Process__container">

        <AnimationComponent
          className={"Process__title"}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div>How We Work</div>
        </AnimationComponent>

        <AnimationComponent
          className={"Process__subtitle"}
          transitionDelay={0.8}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div >Our Process</div>
        </AnimationComponent>

        <div className="Process__row">

          <AnimationComponent
            className={"Process_maximizedzindexonhover"}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem elemPicture={elemPicture} counter={"01"} title={"Contact"} text={"Nothing the copy said could convince her and so it didn’t take long."} />
          </AnimationComponent>

          <AnimationComponent
            className={"Process_maximizedzindexonhover"}
            transitionDelay={0.4}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem elemPicture={elemPicture} counter={"02"} title={"Baking"} text={"The copy said could convince her and so it didn’t take long."} />
          </AnimationComponent>

          <AnimationComponent
            className={"Process_maximizedzindexonhover"}
            transitionDelay={0.8}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem elemPicture={elemPicture} counter={"03"} title={"Delivery"} text={"Nothing the copy said could convince her and so it didn’t take."} />
          </AnimationComponent>

          <AnimationComponent
            className={"Process_maximizedzindexonhover"}
            transitionDelay={1.2}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ right: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem elemPicture={elemPicture} counter={"04"} title={"Tasty"} text={"Copy said could convince her and so it didn’t take long."} />
          </AnimationComponent>


        </div>

      </div>

    </div>
  )
}

export default Process
