import { motion } from "motion/react";
import {
  FaMobileAlt,
  FaCode,
  FaPlug,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const skills = [
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    items: [
      "React Native",
      "TypeScript",
      "React Hooks",
      "React Navigation",
      "Android",
      "Responsive UI",
    ],
  },
  {
    title: "Frontend Development",
    icon: FaCode,
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Reusable Components",
      "Responsive Design",
    ],
  },
  {
    title: "API & State Management",
    icon: FaPlug,
    items: [
      "REST API",
      "Axios",
      "Context API",
      "API Integration",
      "Async Data Handling",
    ],
  },
  {
    title: "Tools & Development",
    icon: FaTools,
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Android Studio",
      "Gradle",
      "Figma",
      "Postman",
      "Bruno",
      "VS Code",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-paper py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.span
          className="kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.span>

        <motion.h2
          className="font-display text-ink text-4xl md:text-5xl font-medium mt-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          What I work with
        </motion.h2>

        <motion.p
          className="text-ink-soft text-lg max-w-xl mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and tools I use to build responsive web and mobile
          applications.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              className="border border-line rounded-lg p-6 hover:border-accent hover:-translate-y-1 transition-all duration-300 bg-paper"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5 text-ink">
                <category.icon className="text-accent text-lg" />
                <h3 className="text-base font-medium">{category.title}</h3>
              </div>

              <ul className="space-y-2.5">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <FaCheckCircle className="text-accent text-xs shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;