import useLocalStorageState from "../../utils/useLocalStorageState";

export default function useFavoritePizzas() {
  const [favoriteIds, setFavoriteIds] = useLocalStorageState<number[]>("fp_favorites", []);

  function isFavorite(pizzaId: number) {
    return favoriteIds.includes(pizzaId);
  }

  function toggleFavorite(pizzaId: number) {
    setFavoriteIds((ids) => {
      if (ids.includes(pizzaId)) return ids.filter((id) => id !== pizzaId);
      return [...ids, pizzaId];
    });
  }

  return { favoriteIds, isFavorite, toggleFavorite };
}
