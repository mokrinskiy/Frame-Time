import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

const Layout = () => {
    return (
        <div className="mx-4 max-md:mx-2">
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
