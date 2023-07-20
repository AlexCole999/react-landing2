import './Testimonials.scss'
import img1 from '../../assets/img/Testimonials-img1.webp'
import img2 from '../../assets/img/Testimonials-img2.webp'
import img3 from '../../assets/img/Testimonials-img3.webp'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import { ReactComponent as Star } from '../../assets/icons/star.svg'
import { useRef, useState } from 'react';

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

  const carousel = useRef();
  const [counter, setCounter] = useState(1)
  let mouseButtonIsPressed = false
  let mouseStartCoordinates;

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

          <div
            className="Testimonials__rowcontainer"
            ref={carousel}
            onMouseDown={(e) => {
              mouseButtonIsPressed = true
              mouseStartCoordinates = e.clientX
            }}
            onMouseUp={() => {
              mouseButtonIsPressed = false
            }}
            onMouseMove={(e) => {
              if (mouseButtonIsPressed) {
                if (mouseStartCoordinates > e.clientX) {
                  if (counter < 3) { setCounter(counter => counter + 1) }
                }
                if (mouseStartCoordinates < e.clientX) {
                  if (counter > 1) { setCounter(counter => counter - 1) }
                }
              }
            }}
            style={{ transform: `translateX(-${(counter - 1) * 384}px)` }}
          >

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
              triggerOnce={true}
              moveAnimation={{ left: { from: 25, to: 0 } }}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <RowElem img={img2} title={"Best Bakery in Town"} text={"Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place"} />
            </AnimationComponent>

          </div>

        </div>

        <div className="Testimonials__rowcarousel">

          {
            [1, 2, 3].map((elem) =>
              <div
                key={elem}
                className='Testimonials__rowcarouselelem'
                onClick={() => { setCounter(elem) }}
                style={{
                  transform: counter == elem ? 'scale(1.5)' : null,
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
