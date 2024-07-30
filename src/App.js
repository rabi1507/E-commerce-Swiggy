import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Card from "./componets/Card";
import Error from "./componets/Error";


const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header/>
           <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/home",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path:"/cart",
                element:<Card/>
            }
        ]
    },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router= {appRouter}/>);
