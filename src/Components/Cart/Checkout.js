import react from "react";
import classes from "./Checkout.module.css"

const Checkout = () => {
    return (
        <form>
            <div className={classes.control}></div>
            <label htmlFor="name">Your name</label>
            <input id="name" type="text" />
        </form>
    )
}

export default Checkout;