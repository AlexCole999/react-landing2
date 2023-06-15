import './Features.scss'
import icon1 from '../../assets/icons/Features-icon1.svg'
import icon2 from '../../assets/icons/Features-icon2.svg'
import icon3 from '../../assets/icons/Features-icon3.svg'
import elemPicture from '../../assets/icons/Features-elemPicture.webp'

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

          <div className="Features__rowelem">
            <div className="Features__rowelemcontent">
              <img className="Features__rowelemicon" src={icon1} alt="" />
              <div className="Features__rowelemtitle">Fresh</div>
              <div className="Features__rowelemtext">Nothing the copy said could convince her and so it didn’t take long.</div>
            </div>
          </div>

          <div className="Features__rowelem">
            <div className="Features__rowelemcontent">
              <img className="Features__rowelemicon" src={icon2} alt="" />
              <div className="Features__rowelemtitle">Natural</div>
              <div className="Features__rowelemtext">Copy Writers ambushed her, made her drunk with Longe and Parole.</div>
            </div>
          </div>

          <div className="Features__rowelem" style={{ backgroundColor: '#F9BF77' }}>
            <div className="Features__rowelemcontent">
              <img className="Features__rowelemicon" src={icon3} alt="" />
              <div className="Features__rowelemtitle">Tasty</div>
              <div className="Features__rowelemtext">And if she hasn’t been rewritten, then they are still using her.</div>
              <img className="Features__rowelempicture" src={elemPicture} alt="" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Features


