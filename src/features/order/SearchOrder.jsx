import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {

    const [query, setQuery] = useState("");
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
                placeholder="Search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                inputMode="numeric"
                className="input sm:w-64 focus:sm:w-72"
              />
        </form>
    )
}

export default SearchOrder
