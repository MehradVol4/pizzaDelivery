import { Link } from "react-router-dom"

function Button({ children, disabled, to, type, onClick }) {
    const base = "bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-xl hover:bg-yellow-300 cursor-pointer transition-all focus:outline-none disabled:cursor-not-allowed ";
    const styles = {
        primary: base + "px-4 py-3 md:px-6 md:py-4",
        small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
        secondary: "inline-block text-sm rounded-full bg-transparent font-semibold uppercasse tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yelllow-300 focus:ring-offset-2 disable:cursor-not-allowed border-2 border-stone-300 px-4 py-3 md:px-6 md:py-6"
    }
    if (to) return (
        <Link
            to={to}
            className={styles[type]}>
            {children}
        </Link>
    );

    if (onClick)
        return (
            <button
                onClick={onClick}
                to={to}
                disabled={disabled}
                className={styles[type]}>
                {children}
            </button>
        );


    return (
        <button
            to={to}
            disabled={disabled}
            className={styles[type]}>
            {children}
        </button>
    );
}

export default Button
