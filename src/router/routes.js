import { Cart } from "../pages/Cart";
import { Conditions } from "../pages/Conditions";
import { Favorites } from "../pages/Favorites";
import { Main } from "../pages/Main";
import { Order } from "../pages/Order";
import { SuccessOrder } from "../pages/SuccessOrder";

export const routes = {
    public: [
        {
            path: "/",
            Component: Main
        },
        {
            path: "/cart",
            Component: Cart
        },
        {
            path: "/order",
            Component: Order
        },
        {
            path: "/politics",
            Component: Conditions
        },
        {
            path: "/favorites",
            Component: Favorites
        },
        {
            path: "/success",
            Component: SuccessOrder
        },

    ]
}