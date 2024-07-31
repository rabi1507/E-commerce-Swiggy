import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
const Error = lazy(()=> import("./componets/Error"));
const RestaurantMenu = lazy(()=> import("./componets/RestaurantMenu"));
const Card = lazy(()=> import('./componets/Card'));
const Contact = lazy(()=> import("./componets/Contact"));
const About = lazy(()=>import("./componets/About"));
const Body = lazy(()=> import("./componets/Body"));
const Header = lazy(()=> import("./componets/Header"))

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
                element: <Suspense>  <Body/></Suspense>,
            },
            {
                path:"/about",
                element: <Suspense>  <About/></Suspense>,
            },
            {
                path:"/home",
                element: <Suspense> <Body/></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense> <Contact/></Suspense>,
            },
            {
                path:"/cart",
                element: <Suspense> <Card/> </Suspense>
            },
            {
                path:"/restaurant/:restId", // Dynamic route
                element:<Suspense> <RestaurantMenu/> </Suspense>
            }
        ]
    },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router= {appRouter}/>);
