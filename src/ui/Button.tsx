import type { ReactNode } from "react";
import type { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "small" | "round";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, disabled, to, type = "primary", onClick }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-4 focus:ring-brand-400/40 disabled:cursor-not-allowed disabled:opacity-60";
    const styles = {
        primary: base + " bg-brand-400 px-4 py-3 text-stone-950 hover:bg-brand-300 md:px-6 md:py-4",
        small: base + " bg-brand-400 px-4 py-2 text-xs text-stone-950 hover:bg-brand-300 md:px-5 md:py-2.5",
        secondary:
            base +
            " border border-stone-300 bg-white/60 px-4 py-3 text-stone-800 hover:bg-white md:px-6 md:py-4 dark:border-stone-700 dark:bg-stone-950/40 dark:text-stone-100 dark:hover:bg-stone-950/55",
        round: base + " bg-brand-400 px-2.5 py-1 text-sm text-stone-950 hover:bg-brand-300 md:px-3.5 md:py-2",
    }
    if (to) return (
        <Link
            to={to}
            className={styles[type]}>
            {children}
        </Link>
    );

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles[type]}>
            {children}
        </button>
    );
}

export default Button
