import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, Users, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/spa-hero-green.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918884666814?text=Hi! I'd like to book a therapy session.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
              alt="EVA International Spa" 
              className="h-20 md:h-28 w-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Best Rated <span className="text-primary">Luxury Spa</span> in Koramangala
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Relax & Rejuvenate with Certified Therapists. 100% Safe & Hygienic Environment.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-4">
            <Button
              onClick={handleWhatsApp}
              size="xl"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury hover:shadow-glow transition-all duration-300 text-xl font-bold px-10 py-6 h-auto"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Book Therapy @ ₹1,999
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex items-center gap-1 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="font-bold text-foreground">4.8/5 Rating on Google</span>
              <span className="text-muted-foreground mx-2">|</span>
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">5000+ Happy Clients</span>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="border-primary/50 bg-card/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp (Quick Response)
            </Button>
          </div>

          {/* Quick Trust Icons */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-1 text-center">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="text-xs text-muted-foreground">100% Safe</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-xs text-muted-foreground">Certified Staff</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Star className="h-6 w-6 text-yellow-500" />
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
    </section>
  );
};

export default HeroSection;
