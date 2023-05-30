import './FreshBakery.scss'
import mainImg from '../../assets/img/FreshBakery-img.jpg'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { useState } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

function FreshBakery() {

  const [loaded, setLoaded] = useState(false)

  setTimeout(() => { setLoaded(true) }, 800)

  return (

    !loaded
      ? <LoadingComponent />
      :

      <div className="FreshBakery">

        <AnimationComponent
          moveAnimation={{ left: { from: -25, to: 0 } }}
          transition={1}
          triggerOnce={true}
          opacityAnimation={{ from: 0, to: 1 }}
          blurAnimation={{ from: 10, to: 0 }}
        >
          <div className="FreshBakery__title">
            Fresh Bakery Every Day
          </div>
        </AnimationComponent>

        <AnimationComponent
          moveAnimation={{ right: { from: -25, to: 0 } }}
          transition={1}
          triggerOnce={true}
          opacityAnimation={{ from: 0, to: 1 }}
          blurAnimation={{ from: 10, to: 0 }}
        >
          <div className="FreshBakery__text">
            Even the all-powerful Pointing has no control about the blind texts it is an almost.
          </div>
        </AnimationComponent >

        <AnimationComponent
          moveAnimation={{ left: { from: -25, to: 0 } }}
          transition={1}
          delay={2500}
          triggerOnce={true}
          opacityAnimation={{ from: 0, to: 1 }}
          blurAnimation={{ from: 10, to: 0 }}
        >
          <div className="FreshBakery__subtitle">
            Sience 1984
          </div>
        </AnimationComponent>

        <AnimationComponent
          transition={2}
          triggerOnce={true}
          opacityAnimation={{ from: 0, to: 1 }}
          blurAnimation={{ from: 10, to: 0 }}
        >
          <img src={mainImg} alt="" />
        </AnimationComponent>

      </div >

  )

}

export default FreshBakery
