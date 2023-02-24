import { Fragment, useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from "../../Store/CartContext"

const Cart = (props) => {
  const cartCTX = useContext(CartContext)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCTX.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  

  return (
    <Fragment>
   
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
    </Fragment>
  );
};

export default Cart;