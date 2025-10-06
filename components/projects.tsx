"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Sydney Quality Meats",
      description:
        "E-commerce website for a butcher shop with Stripe payment integration and role-based authentication.",
      image: "/sydney-quality-meats.png",
      tags: ["Laravel", "PHP", "MySQL", "Stripe", "Authentication"],
      liveUrl: "https://sydneyqualitymeats.com.au",
      githubUrl: "https://github.com/mubashfaq/SQM",
    },
    {
      title: "Myntra Clone",
      description: "Responsive e-commerce platform with product listings, shopping cart, and checkout functionality.",
      image: "/myntra-project.png",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
      liveUrl: "https://simple-frontend-myntra.vercel.app",
      githubUrl: "https://github.com/mubashfaq/new-myntra",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern, responsive portfolio website with dark theme and smooth animations built with React and Tailwind CSS.",
      image: "/project-3.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://personal-portfolio-dark-theme.vercel.app",
      githubUrl: "https://github.com/mubashfaq/Personal-Portfolio",
    },
    {
      title: "GSaaS",
      description: "Implemented secure payment processing with Stripe and other features in POS module.",
      image: "/gsaas.png",
      tags: ["Stripe", "Paypal", "Laravel", "React JS", "POS"],
      liveUrl: "https://gsaas.com.pk",
      githubUrl: "https://github.com/mubashfaq/gsaas",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my recent projects. Each project reflects my skills and experience in web development.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live site">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/mubashfaq" target="_blank" rel="noopener noreferrer">
            <Button size="lg">View All Projects</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
