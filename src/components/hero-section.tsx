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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 pb-28">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
              alt="EVA International Spa - Premium Body Massage & Spa in Koramangala" 
              className="h-20 md:h-28 w-auto"
              width="200"
              height="112"
            />
          </div>

          {/* Main Headline - H1 with target keywords */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Premium <span className="text-primary">Body Massage & Spa</span> in Koramangala
          </h1>
          
          {/* Sub-headline with keywords */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Best Spa Near Me for Relaxation & Pain Relief Therapy. Certified Therapists in a 100% Safe & Hygienic Wellness Center.
          </p>

          {/* Primary CTA Button - Min 44x44 touch target */}
          <div className="pt-4">
            <Button
              onClick={handleWhatsApp}
              size="xl"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury hover:shadow-glow transition-all duration-300 text-xl font-bold px-10 py-6 h-auto min-h-[56px] min-w-[200px]"
              aria-label="Book therapy session starting at Rs 1999"
            >
              <Sparkles className="mr-2 h-6 w-6" aria-hidden="true" />
              Book Therapy @ ₹1,999
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30">
              <span className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500 fill-current" aria-hidden="true" />
                <span className="font-bold text-foreground text-sm">4.8/5 Google Rating</span>
              </span>
              <span className="text-muted-foreground mx-1 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm">5000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Secondary CTAs - Min 44x44 touch targets */}
          <nav className="flex flex-col sm:flex-row gap-3 justify-center pt-4" aria-label="Contact options">
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="border-primary/50 bg-card/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all min-h-[48px] min-w-[180px]"
              aria-label="Call us at 8884666814"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call Now - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white min-h-[48px] min-w-[180px]"
              aria-label="Contact via WhatsApp for quick response"
            >
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp (Quick Response)
            </Button>
          </nav>

          {/* Quick Trust Icons */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-1 text-center">
              <Shield className="h-6 w-6 text-green-500" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">100% Safe</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Users className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">Certified Staff</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Star className="h-6 w-6 text-yellow-500" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">Top Rated</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="pt-4">
            <div className="inline-block bg-card/60 backdrop-blur-sm border border-primary/20 rounded-lg px-5 py-3">
              <p className="text-primary font-semibold text-sm">Open Daily</p>
              <p className="text-foreground text-base font-medium">9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
