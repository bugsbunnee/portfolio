import { MotionValue, useSpring, useTransform } from "framer-motion";

const useSmoothTransform = (value: MotionValue<number>, springOptions: any, transformer: (value: number) => number) => {
  return useSpring(useTransform(value, transformer), springOptions);
};

export default useSmoothTransform;