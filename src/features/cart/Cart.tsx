
import LinkButton from '../../ui/LinkButton';
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { clearCart, getCart } from './cartSlice';
import EmptyCart from "./EmptyCart" ;
import { useAppDispatch, useAppSelector } from "../../storeHooks";

function Cart() {
  const username = useAppSelector((state) => state.user.username);
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <div className="py-3 px-4">

      <LinkButton to="/menu">
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3 ">
        {cart.map((item) => <CartItem item={item} key={item.pizzaId} />)}
      </ul>
      <div className="mt-6 space-x-2 ">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={()=>dispatch(clearCart())}>clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
