import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

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

  const isHomePage = location.pathname === "/";

  const pageLinks = [
    { label: "Home", path: "/" },
    { label: "Couples Spa", path: "/couples" },
    { label: "Thai Massage", path: "/thai-massage" },
    { label: "Koramangala", path: "/koramangala" },
  ];

  const sectionLinks = [
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-header text-header-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png"
                alt="EVA International Spa"
                className="h-10 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium font-montserrat transition-colors text-sm ${
                    location.pathname === link.path 
                      ? "text-gold-accent" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {isHomePage && sectionLinks.map((link) => (
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
                className="ml-2"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
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
          <nav className="lg:hidden bg-header border-t border-white/10" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Page Links */}
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-medium font-montserrat py-3 transition-colors border-b border-white/10 ${
                    location.pathname === link.path 
                      ? "text-gold-accent" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Section Links (only on home page) */}
              {isHomePage && sectionLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-white/90 hover:text-white font-medium font-montserrat py-3 transition-colors border-b border-white/10"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Call Button */}
              <div className="pt-3">
                <Button
                  onClick={handleCall}
                  variant="headerCta"
                  size="default"
                  className="w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now - 8884666814
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
