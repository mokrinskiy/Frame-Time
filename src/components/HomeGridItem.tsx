import React from "react";

interface HomeGridItemProps {
    className: string;
    text?: any;
    img_url?: string;
    children?: any;
}

const HomeGridItem: React.FC<HomeGridItemProps> = ({
    className,
    img_url,
    text,
    children,
}) => {
    return (
        <div className={className}>
            {img_url && (
                <img className="object-cover w-full h-full" src={img_url} />
            )}
            {children && children}
            {text &&
                text.map(({ paragraph, index, className }: any) => (
                    <p key={index} className={className}>
                        {paragraph}
                    </p>
                ))}
        </div>
    );
};

export default HomeGridItem;
