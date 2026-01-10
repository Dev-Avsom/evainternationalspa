import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, CheckCircle } from "lucide-react";
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
    <header className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/85"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-8 pb-28">
        <div className="max-w-2xl mx-auto space-y-5">
          
          {/* Trust Badge - Compact */}
          <div className="inline-flex items-center gap-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full px-4 py-2 animate-fade-in">
            <Star className="h-4 w-4 text-gold-accent fill-current" />
            <span className="text-white text-sm font-semibold font-montserrat">
              4.8★ Rated • 5000+ Happy Clients
            </span>
          </div>
          
          {/* Main Headline - Simplified */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat tracking-tight animate-fade-in">
            Get <span className="text-gold-accent">20% Off</span> Your First<br />
            Spa Session Today
          </h1>
          
          {/* Value Proposition - Clear & Specific */}
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed font-montserrat animate-fade-in">
            Premium massage therapy starting ₹1,999 only. 
            Certified therapists • 100% hygienic • Koramangala
          </p>

          {/* Primary CTA - Single Focus */}
          <div className="pt-3 animate-fade-in">
            <Button
              onClick={handleWhatsApp}
              variant="gold"
              size="xl"
              className="w-full sm:w-auto text-lg font-bold px-10 py-7 h-auto pulse-glow shadow-2xl"
              aria-label="Book now via WhatsApp"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Book Now – Get 20% Off
            </Button>
            <p className="text-white/70 text-sm mt-3 font-montserrat">
              Limited slots today • Instant confirmation
            </p>
          </div>

          {/* Quick Trust Points - Minimal */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-white/80 text-sm font-montserrat animate-fade-in">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Certified Staff
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Safe & Hygienic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Open 9AM-10PM
            </span>
          </div>

          {/* Secondary CTA - Call Option */}
          <div className="pt-2 animate-fade-in">
            <button
              onClick={handleCall}
              className="text-white/90 hover:text-white underline underline-offset-4 text-sm font-montserrat transition-colors"
            >
              <Phone className="inline h-4 w-4 mr-1" />
              Or call us: 8884666814
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
