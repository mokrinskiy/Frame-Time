import React from "react";
import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavBar: React.FC = () => {
    return (
        <header className="flex justify-between z-10 py-4 sticky top-0 bg-white items-center">
            <Link className="hover:underline" to={"/"}>
                <h1>Время Кадра</h1>
            </Link>
            <div className="space-x-7 max-sm:space-x-4 max-md:hidden">
                <Link className="hover:underline" to={"/cameras"}>
                    магазин
                </Link>
                <Link className="hover:underline" to={"/"}>
                    о нас
                </Link>
                <Link className="hover:underline" to={"/"}>
                    контакты
                </Link>
                <Link className="hover:underline" to={"/"}>
                    корзина
                </Link>
            </div>
            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            className=" border-black rounded-none"
                            variant="outline"
                        >
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-none border-black">
                        <DropdownMenuLabel>Навигация</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-black" />
                        <DropdownMenuItem className="rounded-none">
                            <Link
                                className="hover:underline w-full h-full"
                                to={"/cameras"}
                            >
                                магазин
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none">
                            <Link
                                className="hover:underline w-full h-full"
                                to={"/"}
                            >
                                о нас
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none">
                            <Link
                                className="hover:underline w-full h-full"
                                to={"/"}
                            >
                                контакты
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none">
                            <Link
                                className="hover:underline w-full h-full"
                                to={"/"}
                            >
                                корзина
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default NavBar;
