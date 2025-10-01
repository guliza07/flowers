import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home";
import About from "./pages/About"
import Page from "./pages/Page";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
             {
                path:"page",
                element:<Page/>
            }
           
           
        ]
    }
])
export default myRouter