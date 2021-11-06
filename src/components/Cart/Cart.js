import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && (
        <p>You don't have any product in the cart yet.</p>
      )}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => {
            return <CartItem key={item.title} item={item} />;
          })}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
