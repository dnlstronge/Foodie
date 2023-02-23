import CartContext from "./CartContext";
import { useReducer } from "react"

const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        dosomething
    }

    if(action.type === "REMOVE") {
        alseDOSomething
    }
    return defaultCartState
}

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD", item: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE", id: id
        })
    }

    const cartContext = ({
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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