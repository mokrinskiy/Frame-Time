import React from "react";
import { Link } from "react-router-dom";

interface HomeGridItemProps {
    className: string;
    camera?: any;
    text?: any;
    img_url?: string;
    img_url2?: string;
    children?: any;
}

const HomeGridItem: React.FC<HomeGridItemProps> = ({
    className,
    camera,
    img_url,
    text,
    children,
}) => {
    return (
        <div className={className}>
            <div className="w-full h-full relative hover:text-black">
                {img_url && (
                    <img className="object-cover w-full h-full" src={img_url} />
                )}
                {children && children}
                {text &&
                    text.map(({ paragraph, className }: any) => (
                        <p key={paragraph} className={className}>
                            {paragraph}
                        </p>
                    ))}
                {camera && (
                    <Link
                        to={`cameras/${camera.id}`}
                        className="flex w-full h-full  justify-between absolute bottom-0 items-end"
                    >
                        <p className=" text-white w-full pl-1 bg-black bg-opacity-50">
                            {camera.title}
                        </p>
                        <p className="absolute bottom-0  text-white w-full flex justify-end pr-1">
                            клик
                        </p>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomeGridItem;
