import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


/*validation helpers */
const isEmpty = val => val.trim().replace(/ /g, "") === ""
const isOverSixChars = val => val.trim().replace(/ /g, "").length >= 6

const Checkout = (props) => {
    /* form validity state */
    const [validState, setValidState] = useState(
        {
            name: true,
            street: true,
            city: true, 
            postcode: true
        }
    )

    const nameInput = useRef()
    const streetInput = useRef()
    const postcodeInput = useRef()
    const cityInput = useRef()
    //console.log(nameInput.current.value)

    const confirmHandler = (event) => {
        console.log("formSubmitted")
        event.preventDefault();
        const enteredName = nameInput.current.value 
        const enteredStreet = streetInput.current.value
        const enteredPostcode = postcodeInput.current.value 
        const enteredCity = cityInput.current.value



        /* validate data */
        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostcodeIsValid = isOverSixChars(enteredPostcode)

        /* set validity state */
        setValidState({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postcode: enteredPostcodeIsValid
        })

        const formIsValid = 
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostcodeIsValid

   if(!formIsValid) {
    // handle error
    console.log(`form is invalid`)
    return
   }   
   
   // submit cart data 
   if(formIsValid) {
    console.log("The form was validated")
   } 
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInput} type='text' id='name' />
        {!validState.name && <p>Please enter a valid name</p>}
        
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
        <input ref={cityInput} type='text' id='city' />
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