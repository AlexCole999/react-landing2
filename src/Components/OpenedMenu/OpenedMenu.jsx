import CloseIcon from '../../assets/icons/closeIcon.svg'
import './OpenedMenu.scss'

function OpenedMenu({ menuisopened, closeMenu }) {
  return (

    <div className={`openedmenu ${menuisopened ? 'null' : "display-none"}`} id="openedmenu">
      <div
        className="openedmenu__button"
        id="closemenubutton"
        onClick={closeMenu}
      >
        <div className="openedmenu__buttontext">Back</div><img className="openedmenu__buttonicon" src={CloseIcon} alt="" />
      </div>

      <div className="openedmenulist">

        <a href="#FreshBakery" className="openedmenu__item openedmenu__item_selected">
          <div className="openedmenu__itemtext">Fresh Bakery</div>
        </a>

        <a href="#AboutUs" className="openedmenu__item">
          <div className="openedmenu__itemtext">About Us</div>
        </a>

        <a href="#Features" className="openedmenu__item">
          <div className="openedmenu__itemtext">Features</div>
        </a>

        <a href="#Products" className="openedmenu__item">
          <div className="openedmenu__itemtext">Products</div>
        </a>

        <a href="#Process" className="openedmenu__item">
          <div className="openedmenu__itemtext">Process</div>
        </a>

        <a href="#Recipes" className="openedmenu__item">
          <div className="openedmenu__itemtext">Recipes</div>
        </a>

        <a href="#Baker" className="openedmenu__item">
          <div className="openedmenu__itemtext">Baker</div>
        </a>

        <a href="#Testimonials" className="openedmenu__item">
          <div className="openedmenu__itemtext">Testimonials</div>
        </a>

        <a href="#GetInTouch" className="openedmenu__item">
          <div className="openedmenu__itemtext">Contact With Us</div>
        </a>

      </div>
    </div>)
}

export default OpenedMenu