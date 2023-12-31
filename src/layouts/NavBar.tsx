import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <header className="flex justify-between py-4 sticky top-0 bg-white">
            <Link to={"/"}>
                <h1>Время Кадра</h1>
            </Link>
            <div className="space-x-7 max-sm:space-x-4 max-sm:hidden">
                <Link to={"/cameras"}>магазин</Link>
                <Link to={"/"}>о нас</Link>
                <Link to={"/"}>контакты</Link>
                <Link to={"/"}>корзина</Link>
            </div>
            <div className="sm:hidden">
                Menu
            </div>
        </header>
    );
};

export default NavBar;
