import { Fragment } from "react"
import meals from "../../Assets/meals.jpeg"
import classes from "./Header.module.css"
import CartButton from "./CartButton"

const Header = ({ onShowCart }) => {

    
      
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Tasty Treats</h1>
                <CartButton onClick={onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="Table full of treats" />
            </div>
        </Fragment>
    )
}

export default Header;