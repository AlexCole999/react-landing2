import './FreshBakery.scss'
import mainImg from '../../assets/img/FreshBakery-img.jpeg'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { useState } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

function FreshBakery() {

  const [loaded, setLoaded] = useState(false)

  setTimeout(() => { setLoaded(true) }, 2500)

  return (

    !loaded
      ? <LoadingComponent />
      :

      <div className="FreshBakery">

        <div className="FreshBakery__leftside">
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
            transition={1}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            Even the all-powerful Pointing has no control about the blind texts it is an almost.
          </AnimationComponent >

          <AnimationComponent
            className={"FreshBakery__subtitle"}
            moveAnimation={{ left: { from: -25, to: 0 } }}
            transition={1}
            delay={2500}
            triggerOnce={true}
            opacityAnimation={{ from: 0, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            Sience 1984
          </AnimationComponent>
        </div>

        <div className="FreshBakery__img">
          <AnimationComponent
            transition={2}
            triggerOnce={true}
            opacityAnimation={{ from: 0.2, to: 1 }}
            blurAnimation={{ from: 10, to: 0 }}
          >
            <img src={mainImg} alt="" />
          </AnimationComponent>
        </div>

      </div >

  )

}

export default FreshBakery
