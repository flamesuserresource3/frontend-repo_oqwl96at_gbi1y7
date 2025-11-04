import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0D0D0D] text-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
          style={{ fontFamily: 'Inter, Manrope, system-ui, sans-serif' }}
        >
          Have an idea? <span className="text-[#FF003B]">Let’s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-[#eaeaea]"
        >
          I’m available for select collaborations, product builds, and creative engineering.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid grid-cols-1 gap-4 text-left"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FF003B]/60"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FF003B]/60"
            required
          />
          <textarea
            placeholder="Tell me about your idea"
            className="w-full rounded-md border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FF003B]/60 min-h-[140px]"
            required
          />
          <button
            type="submit"
            className="relative inline-flex items-center justify-center rounded-md border border-[#FF003B] px-6 py-3 text-sm font-medium transition-all bg-[#0D0D0D] hover:bg-[#FF003B]"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="pointer-events-none absolute inset-0 rounded-md bg-[radial-gradient(ellipse_at_center,_rgba(255,0,59,0.25),_transparent_60%)]" />
          </button>
        </motion.form>

        <div className="mt-6 text-[#888888] text-sm">Or email: <a className="text-white hover:text-[#FF003B]" href="mailto:hello@example.com">hello@example.com</a></div>
      </div>
    </section>
  );
};

export default Contact;
