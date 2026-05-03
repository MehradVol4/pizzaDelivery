import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header className="bg-yellow-500 text-center">
            <Link to="/">Fast Pizza</Link>
            <SearchOrder />
        </header>
    )
}

export default Header
