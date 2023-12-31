import { cameras } from "@/utils/constants";
import React from "react";
import StoreItem from "./StoreItem";

const HomeStoreSection: React.FC = () => {
    return (
        <>
            {cameras.slice(0, 3).map((item, index) => (
                <StoreItem
                    className="col-span-1 mb-20 max-md:col-span-2 max-h-[300px] max-md:h-[150px]"
                    image={item.images[0]}
                    key={index}
                    {...item}
                ></StoreItem>
            ))}
            <StoreItem
                className="col-span-1 mb-40 max-md:col-span-2 h-[300px] w-auto max-md:h-[150px]"
                title="more"
                image="white.jpg"
            />
        </>
    );
};

export default HomeStoreSection;
