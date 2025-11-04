import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for cinematic depth (non-blocking for pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,59,0.08),transparent_60%)]"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-semibold tracking-tight"
          style={{ fontFamily: 'Inter, Manrope, system-ui, sans-serif' }}
        >
          <span className="block text-sm md:text-base text-[#888888] mb-2">Creative Full-Stack Developer</span>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-white">Your Name</span>
            <span className="text-[#FF003B]"> /</span> Building cinematic, reactive experiences
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-[#FF003B] to-transparent" />
          <p className="text-[#888888] text-sm md:text-base">Scroll to Explore</p>
          <div className="h-px w-16 bg-gradient-to-l from-[#FF003B] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-[#FF003B] to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
