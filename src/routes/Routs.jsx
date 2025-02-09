import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../loginRegister/Login";
import Register from "../loginRegister/Register";
import NewsCard from "../share/NewsCard";
import NewsDetails from "../share/newsCard/NewsDetails";
import PrivetRout from "./PrivetRout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <NewsCard></NewsCard>,
                loader: () => fetch("/news.json")
            },
            {
                path : "/newsDetails/:id",
                element: <PrivetRout><NewsDetails></NewsDetails></PrivetRout>
            }
        ]
        
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])

export default router;