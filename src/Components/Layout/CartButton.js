import React, { useContext, Fragment, useEffect, useState }  from "react"
import classes from "./CartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/CartContext"

const CartButton = (props) => {
    const [btnHighlight, setBtnHighlight] = useState(false)
    const cartCTX = useContext(CartContext)
    const { items } = cartCTX

    const numberOfCartItems = items.reduce((current, item) => {
        return current + item.amount
    }, 0)

    

    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : "" }`

    useEffect(() => {
        if(items.length === 0) {
            return
        }

        setBtnHighlight(true)

        const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <Fragment>
            <button onClick={props.onClick} className={btnClasses}>
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