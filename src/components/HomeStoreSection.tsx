import { cameras } from "@/utils/constants";
import React from "react";
import HomeGridItem from "./HomeGridItem";

const HomeStoreSection: React.FC = () => {
    return (
        <>
            {cameras.slice(0, 3).map((item, index) => (
                <HomeGridItem
                    className="col-span-1 mb-20 max-md:col-span-2 max-h-[300px] max-md:h-[150px]"
                    img_url={item.images[0]}
                    key={index}
                    {...item}
                >
                    <p className="text-[15px] max-md:text-[12px]">
                        {item.title}
                    </p>
                </HomeGridItem>
            ))}
            <HomeGridItem
                className="col-span-1 mb-40 max-md:col-span-2 h-[300px] w-auto max-md:h-[150px]"
                img_url="white.jpg"
            >
                <p className="text-[15px] max-md:text-[12px]">more</p>
            </HomeGridItem>
        </>
    );
};

export default HomeStoreSection;
