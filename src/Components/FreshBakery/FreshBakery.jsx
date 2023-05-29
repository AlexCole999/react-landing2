import './FreshBakery.scss'
import mainImg from '../../assets/img/FreshBakery-img.jpg'
import AnimationComponent from './../AnimationComponent/AnimationComponent';

function FreshBakery() {

  return (
    <div className="FreshBakery">

      <AnimationComponent
        transition={1}
        delay={300}
        triggerOnce={true}
      >
        <div className="FreshBakery__title">
          Fresh Bakery Every Day
        </div>
      </AnimationComponent>

      <AnimationComponent
        transition={1}
        threshold={0.8}
        triggerOnce={true}
      >
        <div className="FreshBakery__text">
          Even the all-powerful Pointing has no control about the blind texts it is an almost.
        </div>
      </AnimationComponent>

      <div className="FreshBakery__subtitle">
        Sience 1984
      </div>

      <img src={mainImg} alt="" />

    </div>
  )
}

export default FreshBakery
