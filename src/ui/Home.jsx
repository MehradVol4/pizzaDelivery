import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

const PIZZA_PHOTOS = [
  "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1751985293193-6e30d325ba7b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
];

function Home() {

  const username = useSelector((state) => state.user.username);

  return (
    <div className="mx-auto grid max-w-5xl items-center gap-8 py-6 md:grid-cols-2 md:py-10">
      <div className="card p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold leading-tight text-stone-900 dark:text-stone-50 md:text-4xl">
          The best pizza.
          <br />
          <span className="text-brand-600 dark:text-brand-300">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <p className="muted mt-4 text-sm leading-relaxed md:text-base">
          Fresh dough, real ingredients, and delivery that actually shows up on time.
        </p>

        <div className="mt-8">
          {username === "" ? (
            <CreateUser />
          ) : (
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button to="/menu" type="primary">
                Order now
              </Button>
              <Button to="/order/new" type="secondary">
                Quick checkout
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <div className="card overflow-hidden p-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 overflow-hidden rounded-2xl md:col-span-1 md:row-span-2">
              <img
                src={PIZZA_PHOTOS[0]}
                alt="Fresh pizza close-up"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-80 md:h-[420px]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-stone-900 shadow-soft">
                  Fresh
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-stone-900 shadow-soft">
                  Handmade
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={PIZZA_PHOTOS[1]}
                alt="Pizza with fresh toppings"
                className="h-36 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-40 md:h-[200px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 dark:ring-white/10" />
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={PIZZA_PHOTOS[2]}
                alt="Sliced pizza flat lay"
                className="h-36 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-40 md:h-[200px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 dark:ring-white/10" />
            </div>
          </div>

          <p className="muted mt-4 text-xs">
            Photos from Unsplash (hotlinked); swap to local assets for production deployments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
