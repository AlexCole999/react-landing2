import './Process.scss'
import elemPicture from '../../assets/img/Process-img1.webp'

function RowElem({ elemPicture, counter, title, text }) {
  return (
    <div className="Process__rowelem">
      <div className="Process__rowelemcontent">
        <div className="Process__rowelemcounter">{counter}</div>
        <div className="Process__rowelemtitle">{title}</div>
        <div className="Process__rowelemtext">{text}</div>
        <img className="Process__rowelempicture" src={elemPicture} alt="" />
      </div>
    </div>
  );
}

function Process() {

  return (

    <div className="Process">

      <div className="Process__container">

        <div className="Process__title">How We Work</div>

        <div className="Process__subtitle">Our Process</div>

        <div className="Process__row">

          <RowElem elemPicture={elemPicture} counter={"01"} title={"Contact"} text={"Nothing the copy said could convince her and so it didn’t take long."} />
          <RowElem elemPicture={elemPicture} counter={"02"} title={"Baking"} text={"The copy said could convince her and so it didn’t take long."} />
          <RowElem elemPicture={elemPicture} counter={"03"} title={"Delivery"} text={"Nothing the copy said could convince her and so it didn’t take."} />
          <RowElem elemPicture={elemPicture} counter={"04"} title={"Tasty"} text={"Copy said could convince her and so it didn’t take long."} />

        </div>

      </div>

    </div>
  )
}

export default Process
