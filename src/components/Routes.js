import { MAIN_PAGE,CART_PAGE} from "./const";
import Cart from "../pages/Cart";
import Main from "../pages/Main";

// export const authRoutes = [

// ]

export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Component: <Main/>
    },  
    {
        path: CART_PAGE,
        Component: <Cart/>
    }
]