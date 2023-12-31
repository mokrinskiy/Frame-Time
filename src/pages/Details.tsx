import React from "react";
import { useItem } from "../hooks/useItem";

const Details: React.FC = () => {
    const item = useItem();

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
            <div className="col-span-2 max-md:col-span-2 flex justify-end">
                <p className="max-md:text-[15px]">{item[0]?.title}</p>
            </div>
            <div className="col-span-1  w-auto max-md:col-span-2">
                <img className="w-full h-full" src={item[0]?.images[0]} />
            </div>
            <div className="col-span-2 min-h-[350px]">
                <img
                    className="w-full h-full object-cover"
                    src={item[0]?.images[2]}
                />
            </div>
            <div className="md:col-span-1"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1 min-h-[350px]">
                <img
                    className="w-full h-full object-cover"
                    src={item[0]?.images[1]}
                />
            </div>
            <div className="col-span-1 min-h-[350px]">
                <img
                    className="w-full h-full object-cover"
                    src={item[0]?.images[3]}
                />
            </div>
            <div className="col-span-1 min-h-[350px]">
                <img
                    className="w-full h-full object-cover"
                    src={item[0]?.images[4]}
                />
            </div>
        </div>
    );
};

export default Details;
