import { motion } from "motion/react";
import {
  FaLightbulb,
  FaBookReader,
  FaCode,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";

const focusAreas = [
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    desc: "Cross-platform apps with React Native and TypeScript.",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    desc: "Responsive, reusable interfaces with React.js.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    desc: "Turning complex requirements into maintainable solutions.",
  },
  {
    icon: FaBookReader,
    title: "Continuous Learning",
    desc: "Staying current with modern development practices.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    desc: "Working closely with designers and developers.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-paper-soft py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.span
          className="kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.span>

        <motion.h2
          className="font-display text-ink text-4xl md:text-5xl font-medium mt-5 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          A little about me
        </motion.h2>

        <motion.p
          className="text-ink-soft text-lg leading-relaxed max-w-xl mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm a React Native &amp; Frontend Developer focused on building
          responsive web interfaces and cross-platform mobile applications.
          I enjoy turning designs and ideas into clean, functional, and
          user-friendly experiences.
        </motion.p>

        <div className="border-t border-line">
          {focusAreas.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-5 py-6 border-b border-line hover:bg-paper transition-colors duration-300 px-2 -mx-2 rounded-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <item.icon className="text-accent text-xl mt-1 shrink-0" />
              <div>
                <h3 className="text-ink font-medium text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="border-l-2 border-accent pl-6 mt-16 max-w-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-display italic text-ink text-xl leading-relaxed">
            "Good design is invisible, but its impact is unforgettable."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default About;