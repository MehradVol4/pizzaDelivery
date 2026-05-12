import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { updateName } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import Button from "./Button";

const PIZZA_PHOTOS = [
  "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1751985293193-6e30d325ba7b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
];

function Home() {
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState(() => username);
  const [touched, setTouched] = useState(false);

  const normalizedName = useMemo(() => nameInput.trim().replace(/\s+/g, " "), [nameInput]);
  const canContinue = normalizedName.length >= 2;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    if (!canContinue) return;
    dispatch(updateName(normalizedName));
    navigate("/menu");
  }

  return (
    <div className="mx-auto grid max-w-5xl items-center gap-8 py-6 md:grid-cols-2 md:py-10">
      <div className="card relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/20 blur-2xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="chip">🔥 Hot & fresh</span>
            <span className="chip">⏱ 25–35 min delivery</span>
            <span className="chip">⭐ Top rated</span>
          </div>

          <h1 className="text-2xl font-extrabold leading-tight text-stone-900 dark:text-stone-50 md:text-4xl">
            Crave-worthy pizza,
            <br />
            <span className="text-brand-700 dark:text-brand-300">delivered fast.</span>
          </h1>

          <p className="muted mt-4 text-sm leading-relaxed md:text-base">
            Enter your name to start ordering. We use it for your order and receipt.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-3">
            <div>
              <label className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-stone-700 dark:text-stone-200">
                Your name
              </label>
              <input
                className={`input ${touched && !canContinue ? "border-red-400 focus:ring-red-300/40" : ""}`}
                type="text"
                autoComplete="name"
                placeholder="e.g. Alex Johnson"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onBlur={() => setTouched(true)}
              />
              {touched && !canContinue && (
                <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-300">
                  Please enter at least 2 characters to continue.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="primary" disabled={!canContinue}>
                Start ordering
              </Button>
              <span className="muted text-xs">{username ? `Saved as: ${username}` : "No account needed."}</span>
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
