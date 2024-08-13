'use client';

import { PointerEvent, Suspense, useCallback, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

import { transition } from "@/app/utils";
import { Shapes } from "./Shapes";
import { Box, Text } from "@radix-ui/themes";

const Skills = () => {
    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const resetMousePosition = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    const onHoverToggle = useCallback(() => {
        resetMousePosition();
        setIsHover(previous => !previous);
    }, [resetMousePosition]);
    
    const onPointerMove = useCallback((event: PointerEvent<HTMLButtonElement>) => {
        mouseX.set(event.clientX - bounds.x - bounds.width / 2);
        mouseY.set(event.clientY - bounds.y - bounds.height / 2);
    }, [bounds, mouseX, mouseY]);

    return (
        <MotionConfig transition={transition}>
            <motion.button
                ref={ref}
                initial={false}
                animate={isHover ? "hover" : "rest"}
                whileTap="press"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.5 }, press: { scale: 1.4 }}}
                onTapStart={() => setIsPress(true)}
                onTap={() => setIsPress(false)}
                onTapCancel={() => setIsPress(false)}
                onHoverStart={onHoverToggle}
                onHoverEnd={onHoverToggle}
                onPointerMove={onPointerMove}
            >
                <motion.div className="absolute t-0 r-0 l-0 b-0 w-96" variants={{ rest: { opacity: 0 }, hover: { opacity: 1 }}}>
                    <Suspense fallback={null}>
                        <Shapes
                            isHover={isHover}
                            isPress={isPress}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    </Suspense>
                </motion.div>
                
                <motion.div variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}>
                    <Box as="div" className="shadow-[-4px_0px_40px_6px_rgba(179,54,255,0.39)] p-5 rounded-full w-32 h-32 justify-center items-center flex">
                        <Box>
                            <Text>My Tech</Text> 
                            <br />
                            <Text size='7'>Skills</Text>
                        </Box>
                    </Box>
                </motion.div>
            </motion.button>
        </MotionConfig>
    );
};

export default Skills;