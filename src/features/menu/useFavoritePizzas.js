import useLocalStorageState from "../../utils/useLocalStorageState";

export default function useFavoritePizzas() {
  const [favoriteIds, setFavoriteIds] = useLocalStorageState("fp_favorites", []);

  function isFavorite(pizzaId) {
    return favoriteIds.includes(pizzaId);
  }

  function toggleFavorite(pizzaId) {
    setFavoriteIds((ids) => {
      if (ids.includes(pizzaId)) return ids.filter((id) => id !== pizzaId);
      return [...ids, pizzaId];
    });
  }

  return { favoriteIds, isFavorite, toggleFavorite };
}

