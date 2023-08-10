import './Recipes.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img1 from '../../assets/img/Recipes-img1.webp'
import img2 from '../../assets/img/Recipes-img2.webp'
import img3 from '../../assets/img/Recipes-img3.webp'
import img4 from '../../assets/img/Recipes-img4.webp'
import img5 from '../../assets/img/Recipes-img5.webp'
import timerIcon from '../../assets/icons/watchesIcon.svg'


function CardBig({ img1 }) {
  return (
    <div className="Recipes__cardselembig">
      <img className="Recipes__cardselembigimg" src={img1} alt="" />
      <div className="Recipes__cardselembigdescription">
        <AnimationComponent
          transition={1}
          transitionDelay={0.4}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Recipes__cardselembigsubtitle">Bakery</div>
        </AnimationComponent>
        <AnimationComponent
          transition={1}
          transitionDelay={0.8}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Recipes__cardselembigtitle">Delicious Bread</div>
        </AnimationComponent>
        <div className="Recipes__cardselembiglastrow">
          <AnimationComponent
            transition={1}
            transitionDelay={1.2}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ left: { from: 35, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Recipes__cardselembigtext">Flows by their place and supplies it with the necessary regelialia.</div>
          </AnimationComponent>
          <AnimationComponent
            transition={0.7}
            transitionDelay={1.6}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 15, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Recipes__cardselembigtime">
              <img className="Recipes__cardselembigtimeicon" src={timerIcon} alt="" />
              5 min
            </div>
          </AnimationComponent>
        </div>
      </div>
    </div>
  )
}

function CardSmall({ img2, type, title, time }) {
  return (
    <div className="Recipes__cardselemsmall">
      <img className="Recipes__cardselemsmallimg" src={img2} alt="" />
      <div className="Recipes__cardselemsmalldescription">
        <AnimationComponent
          transition={0.7}
          transitionDelay={0.4}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Recipes__cardselemsmallfirstrow">
            <AnimationComponent
              transition={0.7}
              transitionDelay={0.8}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ left: { from: 35, to: 0 } }}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <div className="Recipes__cardselemsmalltype">{type}</div>
            </AnimationComponent>
            <AnimationComponent
              transition={0.7}
              transitionDelay={1.2}
              threshold={0.65}
              triggerOnce={true}
              moveAnimation={{ right: { from: 15, to: 0 } }}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <div className="Recipes__cardselemsmalltime">
                <img src={timerIcon} alt="" />
                {time}
              </div>
            </AnimationComponent>
          </div>
          <div className="Recipes__cardselemsmalltitle">{title}</div>
        </AnimationComponent>
      </div>
    </div>
  )
}

function Recipes() {

  return (
    <div className="Recipes" id="Recipes">

      <div className="Recipes__container">

        <div className="Recipes__description">

          <AnimationComponent
            className={"Recipes__descriptiontitle"}
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div >
              Explore Sweet &
              Delicious Recipes
            </div>
          </AnimationComponent>

          <AnimationComponent
            className={"Recipes__descriptionsubtitle"}
            transitionDelay={0.6}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              Our Recipes
            </div>
          </AnimationComponent>

        </div>

        <div className="Recipes__cards">
          <AnimationComponent
            transition={1}
            threshold={0.65}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <CardBig img1={img1} />
          </AnimationComponent>

          <div className="Recipes__cardsrow">

            <AnimationComponent
              transition={1}
              transitionDelay={0.3}
              threshold={0.65}
              triggerOnce={true}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <CardSmall img2={img2} type="Bakery" title="Malted wheat flake bread" time="10 min" />
            </AnimationComponent>

            <AnimationComponent
              transition={1}
              transitionDelay={0.6}
              threshold={0}
              triggerOnce={true}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <CardSmall img2={img3} type="Bakery" title="Biscoff cake with lotus biscuits" time="7 min" />
            </AnimationComponent>

            <AnimationComponent
              transition={1}
              transitionDelay={0.9}
              threshold={0}
              triggerOnce={true}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <CardSmall img2={img4} type="Bakery" title="Peanut butter and chocolate cake" time="5 min" />
            </AnimationComponent>

            <AnimationComponent
              transition={1}
              transitionDelay={1.2}
              threshold={0}
              triggerOnce={true}
              opacityAnimation={{ from: 0.01, to: 1 }}
            >
              <CardSmall img2={img5} type="Bakery" title="Malted wheat flake bread" time="15 min" />
            </AnimationComponent>
          </div>

        </div>

        <div className="Recipes__buttonwrapper">
          <AnimationComponent
            transition={1}
            transitionDelay={1}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Recipes__button">EXPLORE</div>
          </AnimationComponent>
        </div>

      </div>

    </div>
  )
}

export default Recipes
