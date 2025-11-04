import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techList = [
  { name: 'React', detail: 'Component-driven UIs with hooks and performance tuning.', count: 24 },
  { name: 'Node.js', detail: 'Robust APIs with real-time sockets and queues.', count: 18 },
  { name: 'Python', detail: 'Data-heavy backends, FastAPI services, and automation.', count: 15 },
  { name: 'Three.js', detail: 'Interactive 3D experiences and WebGL shaders.', count: 7 },
  { name: 'MongoDB', detail: 'Schema-light persistence for fast iteration.', count: 20 },
];

const About = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" className="relative bg-[#0D0D0D] text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
          style={{ fontFamily: 'Inter, Manrope, system-ui, sans-serif' }}
        >
          <span className="text-[#FF003B]">Philosophy</span> / Experiences over apps
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[#eaeaea] leading-relaxed text-lg md:text-xl"
          >
            I design and engineer immersive products that merge performance with emotion. My work emphasizes clarity, responsiveness, and a cinematic feel — crafted with careful motion, purposeful contrast, and a deep respect for accessibility.
          </motion.p>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-[#888888] uppercase tracking-widest text-xs mb-3"
            >
              Core Technologies
            </motion.h3>
            <ul className="space-y-3">
              {techList.map((t, idx) => (
                <motion.li
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  onMouseEnter={() => setHovered(t)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-4 py-3 backdrop-blur-sm hover:border-[#FF003B]/40 transition-colors"
                >
                  <span className="font-medium">{t.name}</span>
                  <span className="text-[#888888] text-sm">{t.count} projects</span>
                </motion.li>
              ))}
            </ul>

            <AnimatePresence>
              {hovered && (
                <motion.div
                  key={hovered.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 rounded-md border border-white/10 bg-[#111111] p-4"
                >
                  <p className="text-sm text-[#eaeaea]">
                    <span className="text-[#FF003B] font-medium">{hovered.name}:</span> {hovered.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
