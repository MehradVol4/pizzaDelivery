import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {

    const [query, setQuery] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`)
        setQuery("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search order Number"
                value={query}
                onClick={(e) => setQuery(e.target.value)}
                className="rounded-full px-4 py-2 text-sm
                 bg-yellow-100 placeholder:text-stone-900 sm:w-64
                  focus:w-72 transition-all focus:outline-none" />
        </form>
    )
}

export default SearchOrder
