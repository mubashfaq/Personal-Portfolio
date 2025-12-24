import Link from "next/link"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/mubashfaq", label: "GitHub" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/mubasharashfaqdev10/",
      label: "LinkedIn",
    },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/mubashfaq_10/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61584235185200", label: "Facebook" },
  ]

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link href="#home" className="text-2xl font-bold text-primary mb-6">
            Portfolio
          </Link>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center text-muted-foreground">
            <p>&copy; {currentYear} Mubashar Ashfaq. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed and built with ❤️ using React, Next.js, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
