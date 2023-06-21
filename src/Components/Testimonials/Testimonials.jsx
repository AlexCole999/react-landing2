import './Testimonials.scss'
import img1 from '../../assets/img/Testimonials-img1.webp'
import img2 from '../../assets/img/Testimonials-img2.webp'
import img3 from '../../assets/img/Testimonials-img3.webp'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { ReactComponent as Star } from '../../assets/icons/star.svg'
import { useState } from 'react';

function RowElem({ img, title, text }) {
  return (
    <div className="Testimonials__rowelem">
      <img className="Testimonials__rowelemimg" src={img} alt="" />
      <div className="Testimonials__rowelemcontent">
        <div className="Testimonials__rowelemstars">
          <Star className="Testimonials__rowelemstarselem" />
          <Star className="Testimonials__rowelemstarselem" />
          <Star className="Testimonials__rowelemstarselem" />
          <Star className="Testimonials__rowelemstarselem" />
          <Star className="Testimonials__rowelemstarselem" />
        </div>
        <div className="Testimonials__rowelemtitle">{title}</div>
        <div className="Testimonials__rowelemtext">
          {text}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {

  const [counter, setCounter] = useState(1)

  return (
    <div className="Testimonials">

      <div className="Testimonials__container">

        <AnimationComponent
          className={"Testimonials__title"}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div>People Say About Our Bakery</div>
        </AnimationComponent>

        <AnimationComponent
          className={"Testimonials__subtitle"}
          transitionDelay={0.8}
          transition={1.3}
          triggerOnce={true}
          moveAnimation={{ bottom: { from: 25, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div>Testimonials</div>
        </AnimationComponent>

        <div className="Testimonials__row">

          <AnimationComponent
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem img={img1} title={"Very, Very Delicious"} text={"Nothing the copy said could convince her and so it didn’t take long. A small river named Duden flows by their"} />
          </AnimationComponent>

          <AnimationComponent
            transition={1.3}
            transitionDelay={0.6}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem img={img2} title={"Best Bakery in Town"} text={"Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place"} />
          </AnimationComponent>

          <AnimationComponent
            transition={1.3}
            transitionDelay={1.2}
            triggerOnce={true}
            moveAnimation={{ left: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <RowElem img={img3} title={"Well Organized"} text={"«And if she hasn’t been rewritten, then they are still using her. A small river named Duden flows by their place"} />
          </AnimationComponent>

        </div>

        <div className="Testimonials__rowhandler">

          {
            [1, 2, 3]
              .map((elem, index) =>
                <div
                  onClick={() => { console.log(elem, counter, counter == elem) }}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    borderRadius: '50%',
                    width: counter == elem ? '16px' : '8px',
                    height: counter == elem ? '16px' : '8px',
                    backgroundColor: counter == elem ? '#171B1B' : '#9EAD8D'
                  }}>
                </div>)
          }

        </div>

      </div>

    </div>
  )
}

export default Testimonials
