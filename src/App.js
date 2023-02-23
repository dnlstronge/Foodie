import Cart from "./Components/Cart/Cart"
import React, { Fragment, useState } from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartContextProvider from "./Store/CartContextProvider"


function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartContextProvider>
    {showCart && 
    <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </CartContextProvider>
  );
}

export default App;
