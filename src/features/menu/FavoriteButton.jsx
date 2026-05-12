import useFavoritePizzas from "./useFavoritePizzas";

function FavoriteButton({ pizzaId, size = "md" }) {
  const { isFavorite, toggleFavorite } = useFavoritePizzas();
  const fav = isFavorite(pizzaId);

  const sizeClasses = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(pizzaId)}
      className={`${sizeClasses} grid place-items-center rounded-2xl border border-stone-200 bg-white/70 text-lg text-stone-700 transition-colors hover:bg-white dark:border-stone-700 dark:bg-stone-950/40 dark:text-stone-200 dark:hover:bg-stone-950/55`}
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      title={fav ? "Favorited" : "Add to favorites"}
    >
      <span className={fav ? "text-brand-500" : ""}>{fav ? "★" : "☆"}</span>
    </button>
  );
}

export default FavoriteButton;

