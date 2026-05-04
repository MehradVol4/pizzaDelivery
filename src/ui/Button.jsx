import { Link } from "react-router-dom"

function Button({ children, disabled, to }) {

    const className = "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-xl hover:bg-yellow-300 cursor-pointer transition-all focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4";

    if (to) return (
        <Link
            to={to}
            className={className}>
            {children}
        </Link>
    );
    return (
        <button
            to={to}
            disabled={disabled}
            className={className}>
            {children}
        </button>
    )
}

export default Button
