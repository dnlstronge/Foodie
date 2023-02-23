import Cart from "./Components/Cart/Cart"
import React, { Fragment, useState } from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {

  const [modal, setModal] = useState(false)
  const handleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  return (
    <Fragment>
    <Cart modalState={modal} clickHandle={handleModal}/>
      <Header clickHandle={handleModal}/>
        <main>
          <Meals />
        </main>
    </Fragment>
  );
}

export default App;
