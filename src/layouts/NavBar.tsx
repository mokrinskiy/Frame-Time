import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <header className="flex justify-between py-4">
            <h1>Время Кадра</h1>
            <div className="space-x-7 max-sm:space-x-4">
                <Link to={"/"}>о нас</Link>
                <Link to={"/"}>контакты</Link>
                <Link to={"/"}>корзина</Link>
            </div>
        </header>
    );
};

export default NavBar;
