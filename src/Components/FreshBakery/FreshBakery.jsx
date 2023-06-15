import './FreshBakery.scss'
import mainImg from '../../assets/img/FreshBakery-img.jpeg'
import mainImgZipped from '../../assets/img/FreshBakery-imgzipped.webp'
import FreshBakeryBgimg1 from '../../assets/img/FreshBakery-bgimg1.png'
import FreshBakeryBgimg2 from '../../assets/img/FreshBakery-bgimg2.png'
import AnimationComponent from './../AnimationComponent/AnimationComponent';

function FreshBakery() {

  return (

    <div className="FreshBakery">

      <AnimationComponent
        className={"FreshBakery__bgimg1"}
        positionAbsolute={true}
        transition={2}
        triggerOnce={true}
        moveAnimation={{ left: { from: -25, to: 0 } }}
        opacityAnimation={{ from: 0.2, to: 1 }}
        blurAnimation={{ from: 10, to: 0 }}
      >
        <img src={FreshBakeryBgimg1} alt="" />
      </AnimationComponent>

      <div className="FreshBakery__container">

        <div className="FreshBakery__leftside">

          <AnimationComponent
            className={"FreshBakery__bgimg2"}
            positionAbsolute={true}
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0.2, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            <img src={FreshBakeryBgimg2} alt="" />
          </AnimationComponent>

          <AnimationComponent
            className={"FreshBakery__title"}
            moveAnimation={{ left: { from: -25, to: 0 } }}
            transition={1}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            Fresh Bakery Every Day
          </AnimationComponent>

          <AnimationComponent
            className={"FreshBakery__text"}
            moveAnimation={{ right: { from: -25, to: 0 } }}
            transition={2.7}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            Even the all-powerful Pointing has no control about the blind texts it is an almost.
          </AnimationComponent >

          <AnimationComponent
            className={"FreshBakery__subtitle"}
            moveAnimation={{ left: { from: -25, to: 0 } }}
            transition={2}
            delay={2500}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            Sience 1984
          </AnimationComponent>
        </div>

        <div>
          <AnimationComponent
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0.2, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
            preloadComponent={<img className="FreshBakery__img" src={mainImgZipped} alt="" />}
          >
            <img className="FreshBakery__img" src={mainImg} alt="" />
          </AnimationComponent>
        </div>

      </div>

    </div >

  )

}

export default FreshBakery
