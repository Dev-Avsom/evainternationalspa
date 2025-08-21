import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/spa-hero-green.jpg";
import evaLogo from "@/assets/eva-logo.png";

const HeroSection = () => {
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
                src={evaLogo} 
                alt="EVA International Spa" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
            <div className="w-32 h-px bg-gradient-gold mx-auto"></div>
          </div>

          {/* Tagline */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Embracing Luxury & Relaxation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience tranquility like never before at Eva Spa, your sanctuary for relaxation and wellness. 
              We offer luxurious treatments designed to refresh your body, mind, and spirit.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={handleCall}
              variant="call"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now - Book Appointment
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="hero"
              size="xl"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
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