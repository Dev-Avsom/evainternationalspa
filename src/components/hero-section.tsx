import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/spa-hero-green.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const adKeywords = [
    "Best Spa in Koramangala",
    "Luxury Massage Therapy",
    "Professional Body Treatments", 
    "Relaxation & Wellness Center",
    "Premium Spa Services",
    "Thai & Swedish Massage",
    "Couples Spa Packages",
    "Deep Tissue Therapy"
  ];

  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [utmKeyword, setUtmKeyword] = useState<string | null>(null);

  // Function to convert text to Title Case
  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  useEffect(() => {
    // Get utm_term from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('utm_term');
    setUtmKeyword(keyword);
  }, []);

  useEffect(() => {
    // Only cycle through keywords if no UTM keyword is present
    if (!utmKeyword) {
      const interval = setInterval(() => {
        setCurrentKeyword((prev) => (prev + 1) % adKeywords.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [adKeywords.length, utmKeyword]);

  const displayKeyword = toTitleCase(utmKeyword || adKeywords[currentKeyword]);

  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    // WhatsApp number will be provided later
    window.open("https://wa.me/918884666814", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
                alt="EVA International Spa" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
            <div className="w-32 h-px bg-gradient-gold mx-auto"></div>
          </div>

          {/* Tagline */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Most Trusted Body Massage & Spa in Koramangala
            </h2>
            
            {/* Dynamic Google Ad Keywords */}
            <div className="h-8 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-semibold text-primary animate-fade-in transition-all duration-500">
                {displayKeyword}
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience premium spa and massage services in Koramangala. We offer full body massage, 
              female to male body massage, jacuzzi spa treatments, and luxury wellness services. 
              Your trusted spa center near you for complete relaxation and rejuvenation.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="pt-6">
            <div className="inline-block bg-white backdrop-blur-sm border border-white/30 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in">
              <p className="text-spa-dark font-bold text-sm md:text-lg">
                ✨ Spa Service Starts from ₹1,999/- only
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={handleCall}
              variant="call"
              size="xl"
              className="w-full sm:w-auto animate-pulse shadow-luxury hover:shadow-glow transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              📞 BOOK NOW - 8884666814
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="hero"
              size="xl"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              💬 WhatsApp (Quick Response)
            </Button>
          </div>

          {/* Urgency Text */}
          <div className="pt-4">
            <p className="text-primary font-semibold animate-pulse">
              ⚡ Call now for instant booking | Response within 5 minutes
            </p>
          </div>

          {/* Opening Hours */}
          <div className="pt-12">
            <div className="inline-block bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-4">
              <p className="text-primary font-semibold text-sm">Opening Hours</p>
              <p className="text-foreground text-lg font-light">
                Mon - Sun: 09:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;