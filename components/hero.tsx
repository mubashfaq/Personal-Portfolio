"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Mubashar Ashfaq</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            <span className="relative">
              <span className="animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-primary pr-1">
                Full Stack Developer
              </span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Dynamic Full Stack Developer with 1 year of experience in building responsive web applications.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#projects">
              <Button size="lg">View Projects</Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  )
}
