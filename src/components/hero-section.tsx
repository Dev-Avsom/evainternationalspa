import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, CheckCircle } from "lucide-react";
import { memo } from "react";
import heroImage from "@/assets/massage-therapy.jpg";

const HeroSection = memo(() => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a therapy session at Eva International Spa.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-16">
      {/* Background - Spa image */}
      <div 
        className="absolute inset-0 bg-primary bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-6 pb-24 md:pb-28">
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-5">
          
          {/* Trust Badge - Compact */}
          <div className="inline-flex items-center gap-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full px-3 md:px-4 py-1.5 md:py-2">
            <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-gold-accent fill-current" aria-hidden="true" />
            <span className="text-white text-xs md:text-sm font-semibold font-montserrat">
              4.8★ Rated • 5000+ Happy Clients
            </span>
          </div>
          
          {/* Main Headline - Mobile optimized */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat tracking-tight">
            Spa Session Starting from<br />
            <span className="text-gold-accent">₹1,999</span>
          </h1>
          
          {/* Value Proposition - Clear & Specific */}
          <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed font-montserrat px-2">
            Premium body massage by certified therapists.
            100% hygienic • Koramangala
          </p>

          {/* Primary CTA - Single Focus */}
          <div className="pt-2 md:pt-3">
            <Button
              onClick={handleWhatsApp}
              variant="gold"
              size="xl"
              className="w-full sm:w-auto text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-7 h-auto shadow-2xl active:scale-95 transition-transform"
              aria-label="Book now via WhatsApp at Rs 1999"
            >
              <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              Book Now @ ₹1,999
            </Button>
            <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3 font-montserrat">
              Limited slots • Instant WhatsApp confirmation
            </p>
          </div>

          {/* Quick Trust Points - Mobile optimized */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-1.5 md:gap-y-2 pt-3 md:pt-4 text-white/80 text-xs md:text-sm font-montserrat">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
              Certified Staff
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
              Safe & Hygienic
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
              Open 9AM-10PM
            </span>
          </div>

          {/* Secondary CTA - Call Option */}
          <div className="pt-1 md:pt-2">
            <button
              onClick={handleCall}
              className="text-white/90 hover:text-white active:text-white underline underline-offset-4 text-xs md:text-sm font-montserrat transition-colors py-2"
              aria-label="Call us at 8884666814"
            >
              <Phone className="inline h-3.5 w-3.5 md:h-4 md:w-4 mr-1" aria-hidden="true" />
              Or call: 888-466-6814
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
