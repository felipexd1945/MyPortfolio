import { cn } from '../lib/utils'
import { useEffect, useState } from 'react'
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState(i18n.language || "en")

  const navitems = [
    { name: t("navbar.home"), href: '#hero' },
    { name: t("navbar.about"), href: '#about' },
    { name: t("navbar.skills"), href: '#skills' },
    { name: t("navbar.projects"), href: '#projects' },
    { name: t("navbar.contact"), href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = (e) => {
    const newLang = e.target.value
    setLanguage(newLang)
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  return (

    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

      <div className="container flex items-center justify-between">
        {/* Logo */}

        <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
          <span className='realtive z-10'>
            <span className='text-glow text-foreground'>Felipe</span> Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {navitems.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
              {item.name}
            </a>
          ))}

          {/* 🌍 Language selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-transparent border border-muted-foreground/40 rounded-md px-2 py-1 text-sm text-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-colors duration-200"
            aria-label="Select language"
          >
            <option value="en">🇺🇸 EN</option>
            <option value="pt">🇧🇷 PT</option>
            <option value="es">🇪🇸 ES</option>
          </select>

        </div>

        {/* Mobile nav button */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>

          <div className='flex flex-col space-y-8 text-xl'>
            {navitems.map((item, key) => (
              <a key={key} href={item.href}
                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}

          </div>

          {/* Language selector (mobile) */}
          <div className="mt-12">

            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-transparent border border-muted-foreground/40 rounded-md px-3 py-1 text-sm text-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-colors duration-200"
            >
              <option value="en">🇺🇸 English</option>
              <option value="pt">🇧🇷 Português</option>
              <option value="es">🇪🇸 Español</option>
            </select>

          </div>

        </div>

      </div>

    </nav>

  )
  
}
