'use client';

import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);

    return <motion.div style={{ scaleX }} />
}
 
export default ScrollProgress;