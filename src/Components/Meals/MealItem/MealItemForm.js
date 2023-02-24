import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="amount" 
              ref= {amountInputRef}
              input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }}/>
            <button>+ Add</button>
        </form>
    )
};

export default MealItemForm;