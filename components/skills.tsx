"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Next JS", level: 80 },
    { name: "React JS", level: 80 },
    { name: "CSS", level: 80 },
    { name: "Bootstrap", level: 90 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Git", level: 80 },
    { name: "RESTful APIs", level: 80 },
  ]

  const technologies = [
    "Laravel",
    "PHP",
    "React JS",
    "Next JS",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Responsive Layouts",
    "RESTful APIs",
    "Stripe Integration",
    "MySQL",
    "Authentication",
    "Authorization",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
