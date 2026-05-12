import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";

function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <LoadingIcon />}
            <Header />
            <div className="overflow-auto px-4 py-6 sm:px-6">
                <main className="mx-auto max-w-5xl">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}

export default AppLayout
