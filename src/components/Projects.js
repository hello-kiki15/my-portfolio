import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Production Mobile Applications",
    desc: "Contributed to multiple production mobile applications, including digital wallet, e-commerce, and healthcare applications, using React Native and TypeScript. Worked on responsive UI, navigation, API integration, and application workflows.",
  },
  {
    title: "Pneumonia Detection Web Application",
    desc: "Developed a responsive React.js interface for uploading medical images and displaying pneumonia classification results through API integration.",
  },
  {
    title: "Portfolio Website",
    desc: "Designed and developed a responsive personal portfolio using React.js, focusing on reusable components, responsive layouts, and clean user experience.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-paper-soft py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.span
          className="kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.span>

        <motion.h2
          className="font-display text-ink text-4xl md:text-5xl font-medium mt-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Selected work
        </motion.h2>

        <motion.p
          className="text-ink-soft text-lg max-w-xl mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From production mobile applications to web projects, I enjoy
          building responsive interfaces and turning ideas into functional
          user experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border border-line rounded-lg p-7 bg-paper hover:border-accent hover:-translate-y-1 transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-display text-ink text-xl font-medium mb-3">
                {project.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/hello-kiki15"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2 border border-line rounded-full px-6 py-3 text-ink hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <FaGithub className="text-sm" />
            View my GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;