import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Details from "./pages/Details";
import Store from "./pages/Store";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MouseContainer from "./layouts/MouseContainer";

const Layout = () => {
    return (
        <div className="mx-4 max-md:mx-4">
            <MouseContainer />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "cameras/",
                element: <Store />,
            },
            {
                path: "cameras/:id/",
                element: <Details />,
            },
        ],
    },
]);

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 6 });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
