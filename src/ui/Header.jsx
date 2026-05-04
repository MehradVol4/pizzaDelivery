import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header className="flex items-center justify-between bg-yellow-500 text-center uppercase py-3 border-b-8 border-stone-500 sm:px-6">
            <Link to="/">Fast Pizza</Link>
            <SearchOrder />
        </header>
    )
}

export default Header
