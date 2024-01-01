import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

const MouseContainer: React.FC = () => {
    const { x, y } = useMousePosition();

    const variants = {
        default: {
            x: x - 16,
            y: y - 16,
        },
    };
    return (
        <motion.div
            variants={variants}
            animate="default"
            className="z-20 h-[30px] w-[30px] bg-black rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        ></motion.div>
    );
};

export default MouseContainer;
