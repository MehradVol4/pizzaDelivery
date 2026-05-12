import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice)

  if(!totalCartQuantity) return null ;

  return (
    <div className="border-t border-stone-200 bg-white/75 px-4 py-3 text-sm backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/60 sm:px-6 md:text-base">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <p className="space-x-4 text-stone-700 dark:text-stone-200 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
          <span className="font-semibold">{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link className="chip" to="/cart">
          Open cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
