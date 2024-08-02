import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
const Error = lazy(()=> import("./componets/Error"));
import { useContext } from "react";
import UserContex from "./utils/UserContext";
const RestaurantMenu = lazy(()=> import("./componets/RestaurantMenu"));
const Card = lazy(()=> import('./componets/Card'));
const Contact = lazy(()=> import("./componets/Contact"));
const About = lazy(()=>import("./componets/About"));
const Body = lazy(()=> import("./componets/Body"));
const Header = lazy(()=> import("./componets/Header"))
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app-layout">
           <UserContex.Provider value={{logedInUser : "❤️"}}>
           <Header/>
           <Outlet/>
           </UserContex.Provider>
        </div>
        </Provider>
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
