import './Features.scss'
import icon1 from '../../assets/icons/Features-icon1.svg'

function FeaturesElem({ icon, title, text }) {
  return (
    <div className="Features__rowelem">
      <img src={icon} fill='red' alt="" />
    </div>
  )
}

function Features() {

  return (
    <div className="Features">
      <div className="Features__container">

        <div className="Features__title">
          Baked With Love
        </div>

        <div className="Features__subtitle">
          Our Features
        </div>

        <div className="Features__row">
          <FeaturesElem icon={icon1} />
          <FeaturesElem />
          <FeaturesElem />
        </div>

      </div>

    </div>
  )
}

export default Features


