
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import ErrorPage from "./errorElement/ErrorPage";
//Do not forget to import the pages here

import HomePage from "./Home";
import Layout from "./Layout";
import SignUp from "./form/Registration";
import AgentPage from "./Agents";
import "../layout/fonts.css";
import "../layout/styles.css";
import "../layout/buttons.css";

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
            {
                path: "/agents",
                element: <AgentPage />,
            },
            {
                path: "/signup",
                element: <SignUp />,
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
