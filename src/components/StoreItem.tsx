import React from "react";
import { Link } from "react-router-dom";

interface StoreItemProps {
    id?: number;
    image?: string;
    title?: string;
    className?: string;
}

const StoreItem: React.FC<StoreItemProps> = ({
    id,
    className,
    title,
    image,
}) => {
    return (
        <Link to={`/cameras${id ? `/${id}` : ""}`} id={title} className={className}>
            <img className="w-full h-full object-cover" src={image} />
            <p className="max-md:text-[12px]">{title}</p>
        </Link>
    );
};

export default StoreItem;
