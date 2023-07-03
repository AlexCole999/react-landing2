import './Products.scss'
import AnimationComponent from './../AnimationComponent/AnimationComponent';
import img1 from '../../assets/img/Products-img1.png'

function Products() {

  return (
    <div className="Products">

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
          <div className="Products__cardselembig">
            <img className="Products__cardselembigimg" src={img1} alt="" />
            <div className="Products__cardselembigdescription">
              <div className="Products__cardselembigsubtitle">Bakery</div>
              <div className="Products__cardselembigtitle">Homemade Bread</div>
              <div className="Products__cardselembiglastrow">
                <div className="Products__cardselembigtext">Flows by their place and supplies it with the necessary regelialia.</div>
                <div className="Products__cardselembigprice">$9</div>
              </div>
            </div>
          </div>
          <div className="Products__cardselemsmall"></div>
          <div className="Products__cardselemsmall"></div>
          <div className="Products__cardselemsmall"></div>
          <div className="Products__cardselemsmall"></div>
        </div>

      </div>

    </div>
  )
}

export default Products
