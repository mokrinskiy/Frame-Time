import React from "react";
import { cameras } from "../utils/constants";
import StoreItem from "./StoreItem";

const StoreList: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {cameras.map((item) => (
                <StoreItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.images[0]}
                    className="flex flex-col"
                />
            ))}
        </div>
    );
};

export default StoreList;
