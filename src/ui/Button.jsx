import { Link } from "react-router-dom"

function Button({ children, disabled, to, type }) {
    const base = "bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-xl hover:bg-yellow-300 cursor-pointer transition-all focus:outline-none disabled:cursor-not-allowed " ;
    const styles = {
        primary : base + "px-4 py-3 md:px-6 md:py-4" ,
        small : base + "py-2 px-4 md:px-5 md:py-2.5 text-xs" ,
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
            to={to}
            disabled={disabled}
            className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
