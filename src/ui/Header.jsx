import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="font-mono sticky top-0 z-20 border-b border-stone-200 bg-white/75 px-4 py-3 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/60 sm:px-6">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                <Link to="/" className="group flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-500 text-sm font-black text-white shadow-soft transition-transform group-hover:-translate-y-0.5">
                        FP
                    </span>
                    <span className="hidden text-sm font-extrabold uppercase tracking-widest text-stone-800 dark:text-stone-100 sm:inline">
                        Fast Pizza
                    </span>
                </Link>

                <div className="flex flex-1 justify-center">
                    <div className="w-full max-w-xs sm:max-w-sm">
                        <SearchOrder />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Username />
                </div>
            </div>
        </header>
    )
}

export default Header
