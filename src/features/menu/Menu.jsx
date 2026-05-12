/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import useFavoritePizzas from "./useFavoritePizzas";

function Menu() {
  const menu = useLoaderData();
  const { favoriteIds } = useFavoritePizzas();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const onlyAvailable = searchParams.get("available") === "1";
  const onlyFavorites = searchParams.get("fav") === "1";

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (!value) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  }

  const filtered = menu
    .filter((p) => (onlyAvailable ? !p.soldOut : true))
    .filter((p) => (onlyFavorites ? favoriteIds.includes(p.id) : true))
    .filter((p) => {
      if (!query.trim()) return true;
      const q = query.trim().toLowerCase();
      const haystack = `${p.name} ${(p.ingredients ?? []).join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });

  return (
    <div className="space-y-4">
      <div className="card p-4 sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <input
              className="input"
              placeholder="Search pizzas (name or ingredients)"
              value={query}
              onChange={(e) => updateParam("q", e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => updateParam("available", onlyAvailable ? "" : "1")}
              className={`chip ${onlyAvailable ? "border-brand-300 text-brand-700 dark:text-brand-200" : ""}`}
            >
              Available only
            </button>
            <button
              type="button"
              onClick={() => updateParam("fav", onlyFavorites ? "" : "1")}
              className={`chip ${onlyFavorites ? "border-brand-300 text-brand-700 dark:text-brand-200" : ""}`}
              disabled={!favoriteIds.length}
              title={!favoriteIds.length ? "Favorite a pizza to use this filter" : undefined}
            >
              Favorites
            </button>
            <span className="muted text-xs font-semibold">
              {filtered.length} item{filtered.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white/70 shadow-soft backdrop-blur-sm dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-950/40">
        {filtered.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
