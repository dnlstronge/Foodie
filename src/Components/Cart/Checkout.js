import react from "react";
import classes from "./Checkout.module.css"

const Checkout = (props) => {
    const confirmHandler = (e) => {

    }
    
    return (
        <form onSubmit={confirmHandler}>
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
            <button onClick={props.onClose} type="button" className={classes.btn}>Cancel</button>
            <button className={classes.btn}>Confirm</button>
            
           
        </form>
    )
}

export default Checkout;