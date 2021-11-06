import { useDispatch, useSelector } from 'react-redux';
import { toggleCartActions } from '../../store/cartToggler';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCartActions.toggleCart());
  }

  const cartItems = useSelector(state => state.cartItems.items);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
