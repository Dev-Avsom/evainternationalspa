import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, Users, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/spa-hero-green.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a therapy session at Eva International Spa.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 pb-28">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
              alt="EVA International Spa - Premium Body Massage & Spa in Koramangala" 
              className="h-20 md:h-28 w-auto"
              width="200"
              height="112"
            />
          </div>

          {/* Main Headline - H1 with target keywords */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-playfair">
            Premium <span className="text-primary">Body Massage & Spa</span> in Koramangala
          </h1>
          
          {/* Sub-headline with keywords */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-lato">
            Best Spa Near Me for Relaxation & Pain Relief Therapy. Certified Therapists in a 100% Safe & Hygienic Wellness Center.
          </p>

          {/* Primary CTA Button - Pill shaped with shadow */}
          <div className="pt-6">
            <Button
              onClick={handleWhatsApp}
              variant="call"
              size="xl"
              className="w-full sm:w-auto text-lg font-bold px-12 py-6 h-auto min-h-[56px]"
              aria-label="Book therapy session starting at Rs 1999"
            >
              <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
              Book Therapy @ ₹1,999
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex flex-wrap items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border shadow-card">
              <span className="flex items-center gap-1">
                <Star className="h-5 w-5 text-accent fill-current" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm">4.8/5 Google Rating</span>
              </span>
              <span className="text-muted-foreground mx-1 hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm">5000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Secondary CTAs - Pill shaped buttons */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center pt-6" aria-label="Contact options">
            <Button
              onClick={handleCall}
              variant="call"
              size="lg"
              className="min-h-[52px] min-w-[200px]"
              aria-label="Call us at 8884666814"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call Now - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="lg"
              className="min-h-[52px] min-w-[200px]"
              aria-label="Contact via WhatsApp for quick response"
            >
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp (Quick Response)
            </Button>
          </nav>

          {/* Quick Trust Icons */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">100% Safe</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Certified Staff</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center">
                <Star className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Top Rated</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="pt-6">
            <div className="inline-block bg-white/90 backdrop-blur-sm border border-border rounded-2xl px-6 py-4 shadow-card">
              <p className="text-primary font-semibold text-sm">Open Daily</p>
              <p className="text-foreground text-lg font-medium">9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
