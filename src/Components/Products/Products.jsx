import './Products.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img1 from '../../assets/img/Products-img1.webp'
import img2 from '../../assets/img/Products-img2.webp'
import img3 from '../../assets/img/Products-img3.webp'
import img4 from '../../assets/img/Products-img4.webp'
import img5 from '../../assets/img/Products-img5.webp'

function CardBig({ img1 }) {
  return (
    <div className="Products__cardselembig">
      <img className="Products__cardselembigimg" src={img1} alt="" />
      <div className="Products__cardselembigdescription">
        <AnimationComponent
          transition={1}
          transitionDelay={0.4}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Products__cardselembigsubtitle">Bakery</div>
        </AnimationComponent>
        <AnimationComponent
          transition={1}
          transitionDelay={0.8}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Products__cardselembigtitle">Homemade Bread</div>
        </AnimationComponent>
        <div className="Products__cardselembiglastrow">
          <AnimationComponent
            transition={1}
            transitionDelay={1.2}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ left: { from: 35, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Products__cardselembigtext">Flows by their place and supplies it with the necessary regelialia.</div>
          </AnimationComponent>
          <AnimationComponent
            transition={0.7}
            transitionDelay={1.6}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 15, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Products__cardselembigprice">$9</div>
          </AnimationComponent>
        </div>
      </div>
    </div>
  )
}

function CardSmall({ img2, type, title, price }) {
  return (
    <div className="Products__cardselemsmall">
      <img className="Products__cardselemsmallimg" src={img2} alt="" />
      <div className="Products__cardselemsmalldescription">
        <AnimationComponent
          transition={0.7}
          transitionDelay={0.4}
          threshold={0.65}
          triggerOnce={true}
          moveAnimation={{ left: { from: 35, to: 0 } }}
          opacityAnimation={{ from: 0.01, to: 1 }}
        >
          <div className="Products__cardselemsmalltype">{type}</div>
        </AnimationComponent>
        <div className="Products__cardselemsmalllastrow">
          <AnimationComponent
            transition={0.7}
            transitionDelay={0.8}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ left: { from: 35, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Products__cardselemsmalltitle">{title}</div>
          </AnimationComponent>
          <AnimationComponent
            transition={0.7}
            transitionDelay={1.2}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ right: { from: 15, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Products__cardselemsmallprice">{price}</div>
          </AnimationComponent>
        </div>
      </div>
    </div>
  )
}

function Products() {

  return (
    <div className="Products" id="Products">

      <div className="Products__container">

        <div className="Products__description">

          <AnimationComponent
            className={"Products__descriptiontitle"}
            transition={1.3}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div >
              Baked Fresh Every Morning
            </div>
          </AnimationComponent>

          <AnimationComponent
            className={"Products__descriptionsubtitle"}
            transitionDelay={0.6}
            transition={1.3}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div>
              Our Products
            </div>
          </AnimationComponent>

        </div>

        <div className="Products__cards">
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

        <div className="Products__buttonwrapper">
          <AnimationComponent
            transition={1}
            transitionDelay={1}
            threshold={0.65}
            triggerOnce={true}
            moveAnimation={{ bottom: { from: 25, to: 0 } }}
            opacityAnimation={{ from: 0.01, to: 1 }}
          >
            <div className="Products__button">EXPLORE</div>
          </AnimationComponent>
        </div>

      </div>

    </div>
  )
}

export default Products  