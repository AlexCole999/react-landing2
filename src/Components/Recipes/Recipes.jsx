import './Recipes.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img1 from '../../assets/img/Recipes-img1.webp'
import img2 from '../../assets/img/Recipes-img2.webp'
import img3 from '../../assets/img/Recipes-img3.webp'
import img4 from '../../assets/img/Recipes-img4.webp'
import img5 from '../../assets/img/Recipes-img5.webp'

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
            <div className="Recipes__cardselembigtime">5 min</div>
          </AnimationComponent>
        </div>
      </div>
    </div>
  )
}

function CardSmall({ img2, type, title, price }) {
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
          <div className="Recipes__cardselemsmalltype">{type}</div>
        </AnimationComponent>
        <div className="Recipes__cardselemsmalllastrow">
          <AnimationComponent
            transition={0.7}
            transitionDelay={0.8}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ left: { from: 35, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Recipes__cardselemsmalltitle">{title}</div>
          </AnimationComponent>
          <AnimationComponent
            transition={0.7}
            transitionDelay={1.2}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 15, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Recipes__cardselemsmallprice">{price}</div>
          </AnimationComponent>
        </div>
      </div>
    </div>
  )
}

function Recipes() {

  return (
    <div className="Recipes">

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

          <AnimationComponent
            transition={1}
            transitionDelay={0.3}
            threshold={0.65}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <CardSmall img2={img2} type="Bakery" title="Bread" price="$5" />
          </AnimationComponent>

          <AnimationComponent
            transition={1}
            transitionDelay={0.6}
            threshold={0}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <CardSmall img2={img3} type="PASTRY" title="Cupcake" price="$3" />
          </AnimationComponent>

          <AnimationComponent
            transition={1}
            transitionDelay={0.9}
            threshold={0}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <CardSmall img2={img4} type="SWEET" title="Biscuits" price="$2" />
          </AnimationComponent>

          <AnimationComponent
            transition={1}
            transitionDelay={1.2}
            threshold={0}
            triggerOnce={true}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <CardSmall img2={img5} type="PASTRY" title="Brioche" price="$5" />
          </AnimationComponent>
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
