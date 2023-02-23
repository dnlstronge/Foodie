import React, { Fragment }  from "react"
import classes from "./CartButton.module.css"
import CartIcon from "../Cart/CartIcon"

const CartButton = ({ clickHandler }) => {
    return (
        <Fragment>
            <button onClick={clickHandler} className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span >Your Cart</span>
                <span className={classes.badge}>
                    3
                </span>
            </button>
        </Fragment>
    )
}

export default CartButton;