import { Fragment } from "react"
import meals from "../../Assets/meals.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Tasty Treats</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="Table full of treats" />
            </div>
        </Fragment>
    )
}

export default Header;