import { motion } from "motion/react";
import { FaDownload, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-paper py-28 px-6 text-center">
      <div className="max-w-lg mx-auto">
        <motion.span
          className="kicker justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="font-display text-ink text-4xl md:text-5xl font-medium mt-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Let's connect
        </motion.h2>

        <motion.p
          className="text-ink-soft text-lg mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out to me anytime.
        </motion.p>

        <motion.div
          className="border-t border-line pt-8 flex flex-col gap-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="mailto:maharjankresa@gmail.com"
            className="flex items-center justify-center gap-3 text-ink text-lg hover:text-accent transition-colors"
          >
            <FaEnvelope className="text-accent" />
            maharjankresa@gmail.com
          </a>
          <a
            href="tel:+9779869489860"
            className="flex items-center justify-center gap-3 text-ink text-lg hover:text-accent transition-colors"
          >
            <FaPhone className="text-accent" />
            +977 9869489860
          </a>
        </motion.div>

        <motion.a
          href="/KrishaMaharjan.pdf"
          download
          className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2 border border-line rounded-full px-6 py-3 text-ink hover:border-accent hover:text-accent transition-colors duration-300 mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <FaDownload className="text-sm" />
          Download my resume
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;