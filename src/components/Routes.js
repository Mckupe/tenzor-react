import Cart from "../pages/Cart";
import Main from "../pages/Main";

export const publicRoutes = [
    {
        path: '/',
        Component: <Main/>
    },  
    {
        path: '/cart',
        Component: <Cart/>
    }
]