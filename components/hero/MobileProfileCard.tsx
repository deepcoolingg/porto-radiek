"use client";

import { motion } from "framer-motion";
import ProfileCard from "@/components/ui/ProfileCard";
import { heroData } from "@/lib/data";

export default function MobileProfileCard() {
  return (
    <div className="relative z-20 flex w-full bg-black px-6 py-12 sm:py-16 lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-75 scale-[0.85] sm:max-w-30 sm:scale-70"
      >
        <ProfileCard
          name={heroData.profile.name}
          title={heroData.profile.title}
          image={heroData.profile.image}
          showUserInfo={true}
          enableTilt={false}
          enableMobileTilt={false}
          behindGlowColor="rgba(168, 85, 247, 0.4)"
          behindGlowEnabled={true}
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </motion.div>
    </div>
  );
}
