import { createBrowserRouter } from "react-router-dom";
import { AddMarathon, AllMarathons, Dashboard, ErrorPage, Home, Login, MainLayout, MarathonDetails, MyApplyList, MyMarathonsList, PrivateRoutes, Register, Registration, ResetPassword } from "../App";
import AboutUs from "../Pages/Static/AboutUs";
import ContactUs from "../Pages/Static/Contact";
import Support from "../Pages/Static/Support";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
                children: [
                    {
                        path: "/dashboard/addMarathon",
                        element: <PrivateRoutes><AddMarathon /></PrivateRoutes>,
                    },
                    {
                        path: "myMarathons",
                        element: <PrivateRoutes><MyMarathonsList /></PrivateRoutes>,
                    },
                    {
                        path: "myApplies",
                        element: <PrivateRoutes><MyApplyList /></PrivateRoutes>,
                    },
                ]
            },
            {
                path: "/marathons",
                element: <AllMarathons />,
            },
            {
                path: "/marathons/:id",
                element: <PrivateRoutes><MarathonDetails /></PrivateRoutes>,
            },
            {
                path: "/registration/:id",
                element: <PrivateRoutes><Registration /></PrivateRoutes>,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/contactUs",
                element: <ContactUs />,
            },
            {
                path: "/support",
                element: <Support />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
            }
        ]
    }
])
