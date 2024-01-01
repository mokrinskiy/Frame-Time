import React from "react";
import { HomeGridItems } from "@/utils/constants";
import HomeGridItem from "@/components/HomeGridItem";
import HomeStoreSection from "@/components/HomeStoreSection";
import HeroLogo from "@/components/HeroLogo";

const HomePage: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {HomeGridItems.slice(0, 2).map((item, index: number) => (
                <HomeGridItem key={index} {...item} />
            ))}
            <HeroLogo />
            {HomeGridItems.slice(2, 18).map((item, index: number) => (
                <HomeGridItem key={index} {...item} />
            ))}
            <HomeStoreSection />
            {HomeGridItems.slice(18).map((item, index: number) => (
                <HomeGridItem key={index} {...item} />
            ))}
        </div>
    );
};

export default HomePage;
