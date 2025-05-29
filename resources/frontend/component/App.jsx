
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import ErrorPage from "./errorElement/ErrorPage";
//Do not forget to import the pages here

import HomePage from "./Home";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //errorElement: <ErrorPage />,
        children: [ 
            {
                path: "/",
                element: <HomePage />,
            },
            /*
            {
                path: "/contact-us",
                element: <Contact />,
            },*/
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
