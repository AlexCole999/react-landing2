import './FreshBakery.scss'
import mainImg from '../../assets/img/FreshBakery-img.jpg'

function FreshBakery() {

  return (
    <div className="FreshBakery">

      <div className="FreshBakery__title">
        Fresh Bakery Every Day
      </div>

      <div className="FreshBakery__text">
        Even the all-powerful Pointing has no control about the blind texts it is an almost.
      </div>

      <div className="FreshBakery__subtitle">
        Sience 1984
      </div>

      <img src={mainImg} alt="" />

    </div>
  )
}

export default FreshBakery
