import react from "react";
import classes from "./Checkout.module.css"

const Checkout = () => {
    return (
        <form>
            <div className={classes.control}>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" /> 
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" /> 
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" /> 
            </div>
            <div className={classes.control}>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" /> 
            </div>
            <button className={classes.btn}>Confirm</button>
            <button className={classes.btn}Cancel></button>
           
        </form>
    )
}

export default Checkout;