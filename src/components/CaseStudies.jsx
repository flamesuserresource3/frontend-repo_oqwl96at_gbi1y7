import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'alpha',
    title: 'Neon Commerce',
    video: 'https://filesamples.com/samples/video/mp4/sample_640x360.mp4',
    problem: 'Replatform an e-commerce brand with a cinematic, high-performance storefront.',
    process: [
      'Mapped user journeys and conversion drop-off points.',
      'Implemented React + SSR for sub-second TTFB.',
      'Crafted micro-interactions and GPU-accelerated transitions.'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    links: { live: '#', github: '#' }
  },
  {
    id: 'beta',
    title: 'VisionOS Lab',
    video: 'https://filesamples.com/samples/video/mp4/sample_960x540.mp4',
    problem: 'Prototype spatial UI with WebGL for data-rich dashboards.',
    process: [
      'Built shader-driven surfaces and texture pipelines.',
      'Optimized scene graph and post-processing effects.',
      'Hardened data sync using WebSockets.'
    ],
    tech: ['Three.js', 'WebGL', 'FastAPI', 'Sockets'],
    links: { live: '#', github: '#' }
  },
  {
    id: 'gamma',
    title: 'Realtime Notation',
    video: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_view.mp4',
    problem: 'Create a multiplayer, latency-tolerant editor for creative teams.',
    process: [
      'Devised CRDT-based syncing and presence.',
      'Integrated keyboard-first UX and command palette.',
      'Deployed edge caching for global collaboration.'
    ],
    tech: ['React', 'WebRTC', 'Redis', 'CRDTs'],
    links: { live: '#', github: '#' }
  }
];

const CaseStudies = () => {
  const [active, setActive] = useState(null);

  const selected = useMemo(() => projects.find(p => p.id === active) || null, [active]);

  return (
    <section id="work" className="relative bg-[#0D0D0D] text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight mb-8"
          style={{ fontFamily: 'Inter, Manrope, system-ui, sans-serif' }}
        >
          <span className="text-[#FF003B]">Case Studies</span> / Deep dives
        </motion.h2>

        <div className="relative">
          <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-6 pb-6">
            {projects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx, duration: 0.4 }}
                className="snap-start shrink-0 w-[85vw] md:w-[640px] lg:w-[780px] bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video bg-[#101010]">
                  <video
                    className="w-full h-full object-cover"
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
                </div>
                <div className="p-5 md:p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium">{p.title}</h3>
                    <p className="text-[#888888] text-sm">Tap for full case study</p>
                  </div>
                  <button
                    onClick={() => setActive(p.id)}
                    className="group inline-flex items-center gap-2 rounded-full border border-[#FF003B]/50 px-4 py-2 text-sm text-white transition-colors hover:bg-[#FF003B]"
                  >
                    View
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="max-w-4xl w-full bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-[#101010]">
                <video className="w-full h-full object-cover" src={selected.video} autoPlay loop muted playsInline />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">{selected.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#FF003B] font-medium mb-2">The Problem</h4>
                    <p className="text-[#eaeaea] text-sm leading-relaxed">{selected.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[#FF003B] font-medium mb-2">My Process</h4>
                    <ul className="list-disc list-inside text-[#eaeaea] text-sm space-y-1">
                      {selected.process.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {selected.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={selected.links.live} className="rounded-full border border-[#FF003B] px-4 py-2 text-sm hover:bg-[#FF003B] transition-colors">Live</a>
                  <a href={selected.links.github} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Lab / Playground inline subsection */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold tracking-tight mb-6"
        >
          <span className="text-[#FF003B]">The Lab</span> / Small experiments
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-[#0f0f0f]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,59,0.15),_transparent_60%)]" />
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-transparent via-white/[0.03] to-transparent" />
              <div className="relative z-10 p-4 flex items-end h-full">
                <p className="text-sm text-[#eaeaea]">Shader/UX micro-experiment #{i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
