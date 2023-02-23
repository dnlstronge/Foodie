import Cart from "./Components/Cart/Cart"
import React, { Fragment, useState } from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {

  const [modal, setModal] = useState(false)


  return (
    <Fragment>
    <Cart modalState={modal} setModalState={setModal}/>
      <Header modalState={modal} setModalState={setModal}/>
        <main>
          <Meals />
        </main>
    </Fragment>
  );
}

export default App;
