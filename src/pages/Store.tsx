import React from "react";
import StoreList from "../components/StoreList";
import { cameras } from "../utils/constants";
import { Link } from "react-router-dom";

const Store: React.FC = () => {
    return (
        <div className="flex justify-between gap-4">
            <div className="h-[0px] top-[56px] min-w-[70px] left-0  sticky flex flex-col">
                {cameras.map((item) => (
                    <Link
                        to={`/cameras/${item.id}`}
                        className="max-md:text-[12px] w-full"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <StoreList />
        </div>
    );
};

export default Store;
