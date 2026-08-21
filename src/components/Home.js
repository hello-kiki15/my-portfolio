import { motion } from "motion/react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-paper flex items-center justify-center px-6 py-24 text-center"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.span
          className="kicker justify-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          React Native &amp; Frontend Developer
        </motion.span>

        <motion.h1
          className="font-display text-ink text-4xl md:text-6xl font-medium leading-[1.05] mt-6 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          Krisha Maharjan
        </motion.h1>

        <motion.p
          className="text-ink-soft text-lg leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Building scalable mobile and web applications with clean architecture,
          reusable components, and seamless user experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;
