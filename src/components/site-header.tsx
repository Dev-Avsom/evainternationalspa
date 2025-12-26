import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Why Us", id: "why-choose" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-header text-header-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png"
                alt="EVA International Spa"
                className="h-10 md:h-14 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/90 hover:text-white font-medium font-montserrat transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={handleCall}
                variant="headerCta"
                size="sm"
                className="ml-4"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Gold Accent Line */}
        <div className="h-[1px] bg-gold-accent/60"></div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-header border-t border-white/10" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-white/90 hover:text-white font-medium font-montserrat py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
