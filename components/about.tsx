"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/mubashar-profile.jpeg"
                alt="Mubashar Ashfaq"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with a strong focus on creating intuitive and engaging user
              experiences. With expertise in Laravel, PHP, JavaScript, and modern CSS frameworks like Bootstrap, I build
              responsive and accessible web applications.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started at G-Tech Solutions, and since then, I've worked on various
              projects including integrating third-party services like Stripe and paypal, implementing role-based
              authentication, and optimizing backend APIs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">Mubashar Ashfaq</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-muted-foreground">mubasharashfaqdev10@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">Rahim Yar Khan, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone:</h4>
                <p className="text-muted-foreground">03033567069</p>
              </div>
            </div>
            <a href="/Mubashar_Resume_Laravel.pdf" download>
              <Button className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
