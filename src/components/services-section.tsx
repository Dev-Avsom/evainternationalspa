import { Button } from "@/components/ui/button";
import { Clock, MessageCircle } from "lucide-react";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import balineseImage from "@/assets/balinese-therapy.jpg";
import deepTissueImage from "@/assets/deep-tissue-therapy.jpg";
import swedishImage from "@/assets/swedish-therapy.jpg";
import thaiImage from "@/assets/thai-therapy.jpg";
import bodyScrubImage from "@/assets/body-scrub-therapy.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";

const ServicesSection = () => {
  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi! I'd like to book ${serviceName} at Eva International Spa.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      title: "Aroma Therapy",
      image: aromatherapyImage,
      duration: "60 mins",
    },
    {
      title: "Deep Tissue",
      image: deepTissueImage,
      duration: "60 mins",
    },
    {
      title: "Swedish",
      image: swedishImage,
      duration: "60 mins",
    },
    {
      title: "Thai Therapy",
      image: thaiImage,
      duration: "90 mins",
    },
    {
      title: "Balinese",
      image: balineseImage,
      duration: "90 mins",
    },
    {
      title: "Body Scrub",
      image: bodyScrubImage,
      duration: "45 mins",
    },
    {
      title: "Jacuzzi Spa",
      image: jacuzziImage,
      duration: "60 mins",
    },
    {
      title: "Couples Spa",
      image: aromatherapyImage,
      duration: "90 mins",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-primary">Therapies</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Cross-gender therapy available with certified professionals
          </p>
        </div>

        {/* 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-eva"
            >
              {/* Image */}
              <div className="relative h-24 md:h-32 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                  {service.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                  <Clock className="h-3 w-3" />
                  <span>{service.duration}</span>
                </div>
                <Button 
                  onClick={() => handleWhatsApp(service.title)}
                  size="sm"
                  className="w-full h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircle className="mr-1 h-3 w-3" />
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
