import Cart from "./Components/Cart/Cart"
import React, { Fragment, useState } from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartProvider>
    {showCart && 
    <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
