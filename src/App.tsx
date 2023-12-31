import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Details from "./pages/Details";
import Store from "./pages/Store";

const Layout = () => {
    return (
        <div className="mx-4 max-md:mx-4">
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
    return <RouterProvider router={router} />;
}

export default App;
