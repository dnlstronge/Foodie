import CartContext from "./CartContext";
import { useReducer } from "react"

const cartReducer = (state, action) => {
    return defaultCartState
}

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item) => {

    }

    const removeItemFromCartHandler = (id) => {

    }

    const cartContext = ({
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    })
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;