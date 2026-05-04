import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
    const navigate = useNavigate();
    const className = 'text-sm text-blue-500 hover:text-blue-700 hover:cursor-pointer hover:underline';

    if (to === "-1")
        return (<button
            className={className}
            onClick={() => navigate(-1)}>{children}
        </button>)

    return (
        <Link
            to={to}
            className={className}>
            &larr; Back to menu
            {children}
        </Link>
    )
}

export default LinkButton
