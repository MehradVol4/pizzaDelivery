import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";

function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"

    return (
        <div className="layout">
            {isLoading && <LoadingIcon />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

export default AppLayout
