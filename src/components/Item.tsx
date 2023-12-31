import React from "react";
import { Link } from "react-router-dom";

interface ItemProps {
    className: string;
    img_url?: string;
    children?: any;
}

const Item: React.FC<ItemProps> = ({ className, img_url, children }) => {
    return (
        <Link to={"/"} className={className}>
            {img_url && (
                <img className="object-cover w-auto h-full" src={img_url} />
            )}
            {children && children}
        </Link>
    );
};

export default Item;
