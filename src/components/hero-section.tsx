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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-card">
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/98 to-background"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 pb-36">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
              alt="EVA International Spa - Premium Body Massage & Spa in Koramangala" 
              className="h-24 md:h-32 w-auto"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
              width="200"
              height="128"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-montserrat tracking-tight">
            Premium <span className="text-primary">Body Massage & Spa</span> in Koramangala
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-montserrat font-medium">
            Best Spa Near Me for Relaxation & Pain Relief Therapy. Certified Therapists in a 100% Safe & Hygienic Wellness Center.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <Button
              onClick={handleWhatsApp}
              variant="call"
              size="xl"
              className="w-full sm:w-auto text-lg font-semibold px-14 py-7 h-auto min-h-[60px]"
              aria-label="Book therapy session starting at Rs 1999"
            >
              <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
              Book Therapy @ ₹1,999
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex flex-wrap items-center justify-center gap-4 bg-card rounded-full px-8 py-4 shadow-card border border-border">
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gold-accent fill-current" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm font-montserrat">4.8/5 Google Rating</span>
              </span>
              <span className="text-border mx-1 hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm font-montserrat">5000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Secondary CTAs */}
          <nav className="flex flex-col sm:flex-row gap-5 justify-center pt-4" aria-label="Contact options">
            <Button
              onClick={handleCall}
              variant="call"
              size="lg"
              className="min-h-[56px] min-w-[220px]"
              aria-label="Call us at 8884666814"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call Now - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="lg"
              className="min-h-[56px] min-w-[220px]"
              aria-label="Contact via WhatsApp for quick response"
            >
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp (Quick Response)
            </Button>
          </nav>

          {/* Quick Trust Icons */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary shadow-card flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium font-montserrat">100% Safe</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary shadow-card flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium font-montserrat">Certified Staff</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary shadow-card flex items-center justify-center">
                <Star className="h-7 w-7 text-gold-accent" aria-hidden="true" />
              </div>
              <span className="text-xs text-muted-foreground font-medium font-montserrat">Top Rated</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="pt-4">
            <div className="inline-block bg-secondary rounded-2xl px-10 py-6 shadow-card">
              <p className="text-primary font-semibold text-sm font-montserrat">Open Daily</p>
              <p className="text-foreground text-xl font-bold font-montserrat mt-1">9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
