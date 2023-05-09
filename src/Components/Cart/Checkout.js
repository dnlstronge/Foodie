import { useRef } from 'react';
import classes from './Checkout.module.css';


/*validation helpers */
const isEmpty = val => val.trim().replace(/ /g, "") === ""
const isOverSixChars = val => val.trim().replace(/ /g, "").length() >= 6

const Checkout = (props) => {
    const nameInput = useRef()
    const streetInput = useRef()
    const postcodeInput = useRef()
    const cityInput = useRef()


  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value 
    const enteredStreet = streetInput.current.value
    const enteredPostcode = postcodeInput.current.value 
    const enteredCity = cityInput.current.value

    /*validate data */
    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostcodeIsValid = isOverSixChars(enteredPostcode)

    const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostcodeIsValid

   if(!formIsValid) {
    // handle error
    return
   }   
   // subit cart data  
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInput} type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInput} type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postcodeInput} type='text' id='postal' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input ref={postcodeInput} type='text' id='city' />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;