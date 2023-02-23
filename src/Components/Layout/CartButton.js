import React, { useContext, Fragment }  from "react"
import classes from "./CartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/CartContext"

const CartButton = (props) => {
    const cartCTX = useContext(CartContext)

    const numberOfCartItems = cartCTX.items.reduce((current, item) => {
        return current + item.amount
    }, 0)

    return (
        <Fragment>
            <button onClick={props.onClick} className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span >Your Cart</span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        </Fragment>
    )
}

export default CartButton;