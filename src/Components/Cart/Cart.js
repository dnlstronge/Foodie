import { Fragment, useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from "../../Store/CartContext"

const Cart = (props) => {
  const cartCTX = useContext(CartContext)

  const totalAmount = ` £${cartCTX.totalAmount.toFixed(2)}`
  const hasItems = cartCTX.items.length > 0

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCTX.items.map((item) => (
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
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {hasItems && 
        <button className={classes.button}>Order</button>}
      </div>
    </Modal>
    </Fragment>
  );
};

export default Cart;