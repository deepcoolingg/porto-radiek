"use client";

import { useRef } from "react";
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

export default function TextMarquee({ text }: TextMarqueeProps) {
  const baseX = useMotionValue(0);
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  useAnimationFrame((t, delta) => {
    let baseSpeed = -0.010; 
    
    let moveBy = baseSpeed + (velocityFactor.get() * -0.015);
    
    moveBy = moveBy * (delta / 16.66);
    
    let nextX = baseX.get() + moveBy;
    
    baseX.set(wrap(-50, 0, nextX));
  });

  const repeatedText = Array(4).fill(text);

  return (
    <div className="relative flex w-full overflow-hidden bg-black py-8 md:py-16">
      <motion.div 
        className="flex whitespace-nowrap w-fit" 
        style={{ x: useTransform(baseX, (v) => `${v}%`) }}
      >
        <div className="flex items-center">
          {repeatedText.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="mx-6 font-sans italic tracking-tighter text-white text-[7rem] md:text-[10rem] lg:text-[14rem] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center">
          {repeatedText.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="mx-6 font-sans italic tracking-tighter text-white text-[7rem] md:text-[10rem] lg:text-[14rem] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}