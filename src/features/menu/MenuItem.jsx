import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import FavoriteButton from "./FavoriteButton";
import { getPizzaFallbackDataUrl } from "../../utils/pizzaImage";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients = [], soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const fallbackSrc = getPizzaFallbackDataUrl(name);

  function handleAddToCart() {

    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem))
  };
  return (
    <li className="flex gap-4 p-3 sm:p-4">
      <div className="relative">
        <img
          src={imageUrl || fallbackSrc}
          alt={name}
          className={`h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28 ${soldOut ? "opacity-70 grayscale" : ""}`}
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.dataset.fallbackApplied) return;
            e.currentTarget.dataset.fallbackApplied = "1";
            e.currentTarget.src = fallbackSrc;
          }}
        />
        {soldOut && (
          <span className="absolute left-2 top-2 rounded-full bg-stone-950/70 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex grow flex-col gap-2 pt-0.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-extrabold text-stone-900 dark:text-stone-50 sm:text-base">
              {name}
            </p>
            <p className="muted mt-0.5 text-xs italic capitalize sm:text-sm">
              {ingredients.join(", ")}
            </p>
          </div>
          <FavoriteButton pizzaId={id} size="sm" />
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-6">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          <div className="flex items-center gap-3">
            {!soldOut && (
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                {formatCurrency(unitPrice)}
              </p>
            )}
            {!soldOut && !isInCart && (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

// MenuItem.propTypes = {
//   pizza: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     unitPrice: PropTypes.number.isRequired,
//     ingredients: PropTypes.arrayOf(PropTypes.string),
//     soldOut: PropTypes.bool.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MenuItem;
