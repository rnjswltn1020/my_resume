import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/common/Layout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

const router = createBrowserRouter([
        {
            path:'/',
            element:<Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    index: true,
                    element:<Home />
                },
                {
                    path:'/about',
                    element:<About />
                },
                {
                    path:'/portfolio',
                    element:<Portfolio />
                }
            ]
        }
        ])

export default function RouteMap(){
    return <RouterProvider router={router} />
}
