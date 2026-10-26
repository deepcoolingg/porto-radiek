"use client";

import { useRef, memo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface TextMarqueeProps {
  text: string;
}

const TextMarquee = ({ text }: TextMarqueeProps) => {
  const baseX = useMotionValue(0);
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 80,
    stiffness: 300,
    restDelta: 0.001
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  useAnimationFrame((t, delta) => {
    const baseSpeed = -0.010;
    const maxDelta = 50; // Cap delta untuk prevent jank
    const safeDelta = Math.min(delta, maxDelta);
    
    const velocity = velocityFactor.get();
    let moveBy = baseSpeed + (velocity * -0.015);
    
    moveBy = moveBy * (safeDelta / 16.66);
    
    const nextX = baseX.get() + moveBy;
    
    baseX.set(wrap(-50, 0, nextX));
  });

  const repeatedText = Array(4).fill(text);

  return (
    <div className="relative flex w-full overflow-hidden bg-black py-4 sm:py-8 md:py-16">
      <motion.div 
        className="flex whitespace-nowrap w-fit will-change-transform" 
        style={{ x: useTransform(baseX, (v) => `${v}%`) }}
      >
        <div className="flex items-center">
          {repeatedText.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="mx-4 font-sans italic tracking-tighter text-white text-[4rem] sm:text-[5.5rem] md:text-[10rem] lg:text-[14rem] uppercase sm:mx-6">
                {item}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center">
          {repeatedText.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="mx-4 font-sans italic tracking-tighter text-white text-[4rem] sm:text-[5.5rem] md:text-[10rem] lg:text-[14rem] uppercase sm:mx-6">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default memo(TextMarquee);