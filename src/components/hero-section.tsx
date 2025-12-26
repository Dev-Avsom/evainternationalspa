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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Teal Overlay for readability */}
      <div className="absolute inset-0 bg-primary/85"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 pb-36">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat tracking-tight animate-fade-up">
            Premium <span className="text-gold-accent">Body Massage & Spa</span> in Koramangala
          </h1>
          
          {/* Sub-headline */}
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-montserrat font-medium animate-fade-up-delay-1">
            Best Spa Near Me for Relaxation & Pain Relief Therapy. Certified Therapists in a 100% Safe & Hygienic Wellness Center.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 animate-fade-up-delay-2">
            <Button
              onClick={handleWhatsApp}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg font-bold px-8 md:px-14 py-5 md:py-7 h-auto min-h-[52px] md:min-h-[64px] pulse-glow"
              aria-label="Book therapy session starting at Rs 1999"
            >
              <Sparkles className="mr-2 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              Book Therapy @ ₹1,999
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-white rounded-full px-5 md:px-8 py-3 md:py-4 shadow-luxury">
              <span className="flex items-center gap-1.5 md:gap-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-gold-accent fill-current" aria-hidden="true" />
                <span className="font-bold text-foreground text-xs md:text-sm font-montserrat">4.8/5 Google Rating</span>
              </span>
              <span className="text-muted mx-1 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5 md:gap-2">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" aria-hidden="true" />
                <span className="font-bold text-foreground text-xs md:text-sm font-montserrat">5000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Secondary CTAs */}
          <nav className="flex flex-col sm:flex-row gap-3 justify-center pt-2" aria-label="Contact options">
            <Button
              onClick={handleCall}
              variant="outline"
              size="default"
              className="min-h-[48px] md:min-h-[56px] min-w-[200px] md:min-w-[220px] border-white text-white hover:bg-white hover:text-primary text-sm md:text-base"
              aria-label="Call us at 8884666814"
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              Call Now - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="default"
              className="min-h-[48px] md:min-h-[56px] min-w-[200px] md:min-w-[220px] text-sm md:text-base"
              aria-label="Contact via WhatsApp for quick response"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              WhatsApp (Quick Response)
            </Button>
          </nav>

          {/* Quick Trust Icons */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 max-w-sm md:max-w-md mx-auto">
            <div className="flex flex-col items-center gap-2 md:gap-3 text-center hover-scale">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-card flex items-center justify-center">
                <Shield className="h-5 w-5 md:h-7 md:w-7 text-primary" aria-hidden="true" />
              </div>
              <span className="text-[10px] md:text-xs text-white/90 font-semibold font-montserrat">100% Safe</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3 text-center hover-scale">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-card flex items-center justify-center">
                <Users className="h-5 w-5 md:h-7 md:w-7 text-primary" aria-hidden="true" />
              </div>
              <span className="text-[10px] md:text-xs text-white/90 font-semibold font-montserrat">Certified Staff</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3 text-center hover-scale">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-card flex items-center justify-center">
                <Star className="h-5 w-5 md:h-7 md:w-7 text-gold-accent" aria-hidden="true" />
              </div>
              <span className="text-[10px] md:text-xs text-white/90 font-semibold font-montserrat">Top Rated</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="pt-2">
            <div className="inline-block bg-white rounded-xl md:rounded-2xl px-6 md:px-10 py-4 md:py-5 shadow-luxury">
              <p className="text-primary font-bold text-xs md:text-sm font-montserrat">Open Daily</p>
              <p className="text-foreground text-lg md:text-xl font-bold font-montserrat mt-1">9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
