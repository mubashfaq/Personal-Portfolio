"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextProps {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
})

export const ThemeProvider = ({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}: {
  children: React.ReactNode
  attribute: string
  defaultTheme: string
  enableSystem: boolean
  disableTransitionOnChange: boolean
}) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(defaultTheme as "light" | "dark" | "system")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
      if (storedTheme) {
        setTheme(storedTheme)
      } else {
        setTheme(defaultTheme as "light" | "dark" | "system")
      }
    }
  }, [defaultTheme])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      if (theme === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
