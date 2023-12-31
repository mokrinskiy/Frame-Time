import React from "react";
import Item from "../components/Item";

const HomePage: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Item
                img_url="hero_1.jpg"
                className="col-span-2 max-md:col-span-4 min-h-[300px]"
            />
            <Item
                img_url="hero_2.jpg"
                className="col-span-2 max-md:col-span-4 min-h-[300px]"
            />
            <div className="col-span-4 mb-20">
                <img className="w-full" src="frame_time.svg" />
            </div>
            <Item className="col-span-1 max-md:col-span-2 min-h-[350px]" img_url="1.jpg" />
            <Item className="col-span-1 max-md:col-span-2 min-h-[350px]" img_url="2.jpg" />
            <div className="max-md:col-span-2 flex flex-col space-y-5">
                <p className="text-[15px] max-md:text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <p className="text-[15px] max-md:text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae elementum curabitur vitae nunc. Nascetur
                    ridiculus mus mauris vitae ultricies leo integer malesuada
                    nunc.
                </p>
                <p className="text-[15px] max-md:text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <Item className="col-span-1 max-md:col-span-2" img_url="3.jpg" />
            {/* */}
            <div className="col-span-2"></div>
            <Item
                className="col-span-1 max-md:col-span-2 max-md:col-start-3 max-md:col-end-1 min-h-[350px]"
                img_url="4.jpg"
            />
            <div className="md:hidden max-md:col-span-2"></div>
            <div className="md:hidden max-md:col-span-2"></div>
            <Item className="col-span-1 max-md:col-span-2 min-h-[350px]" img_url="5.jpg" />
            <div className="md:hidden"></div>
            {/*  */}
            <Item
                className="col-span-2 max-md:col-span-4 h-[800px]"
                img_url="6.jpg"
            />
            <div className="col-span-2 max-md:col-span-4 flex flex-col justify-center space-y-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae elementum curabitur vitae nunc. Nascetur
                    ridiculus mus mauris vitae ultricies leo integer malesuada
                    nunc.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
            {/*  */}
            <Item className="col-span-1 max-md:col-span-2" img_url="8.jpg" />
            <div className="max-md:col-span-2"></div>
            <Item className="col-span-1 max-md:col-span-2" img_url="9.jpg" />
            <Item className="col-span-1 max-md:col-span-2" img_url="10.jpg" />
            {/*  */}
            <Item
                className="col-span-1 mb-20 max-md:col-span-2 max-h-[300px] max-md:h-[150px]"
                img_url="11.jpg"
            >
                <p>Yashica T5</p>
            </Item>
            <Item
                className="col-span-1 max-md:col-span-2 max-h-[300px] max-md:h-[150px] h-[300px]"
                img_url="12.jpg"
            >
                <p>Yashica T5</p>
            </Item>
            <Item
                className="col-span-1 mb-20 max-md:col-span-2 max-md:h-[150px] h-[300px]"
                img_url="13.jpg"
            >
                <p>Yashica T5</p>
            </Item>
            <Item
                className="col-span-1 mb-40 max-md:col-span-2 h-[300px] w-auto max-md:h-[150px]"
                img_url="white.jpg"
            >
                <p>more</p>
            </Item>
            {/*  */}
            <div className="max-md:col-span-2"></div>
            <Item className="col-span-1 max-md:col-span-2" img_url="14.jpg" />
            <Item className="col-span-1 max-md:col-span-2" img_url="15.jpg" />
            <Item className="col-span-1 max-md:col-span-2" img_url="16.jpg" />
        </div>
    );
};

export default HomePage;
