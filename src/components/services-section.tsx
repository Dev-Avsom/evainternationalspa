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

  const deepTissueServices = [
    { title: "Deep Tissue Massage", image: deepTissueImage, duration: "60 mins" },
    { title: "Swedish Massage", image: swedishImage, duration: "60 mins" },
    { title: "Thai Therapy", image: thaiImage, duration: "90 mins" },
  ];

  const aromatherapyServices = [
    { title: "Aroma Therapy", image: aromatherapyImage, duration: "60 mins" },
    { title: "Body Scrub", image: bodyScrubImage, duration: "45 mins" },
    { title: "Balinese Spa", image: balineseImage, duration: "90 mins" },
  ];

  const coupleServices = [
    { title: "Couples Spa Package", image: aromatherapyImage, duration: "90 mins" },
    { title: "Jacuzzi Experience", image: jacuzziImage, duration: "60 mins" },
  ];

  const ServiceCard = ({ service }: { service: { title: string; image: string; duration: string } }) => (
    <article className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300">
      <div className="relative h-32 md:h-40 overflow-hidden rounded-t-3xl">
        <img 
          src={service.image} 
          alt={`${service.title} - Professional massage therapy at Eva International Spa Koramangala`}
          className="w-full h-full object-cover"
          loading="lazy"
          width="300"
          height="160"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-foreground text-sm md:text-base font-montserrat">
          {service.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-4 font-montserrat font-light mt-1">
          <Clock className="h-3 w-3" aria-hidden="true" />
          <span>{service.duration}</span>
        </div>
        <Button 
          onClick={() => handleWhatsApp(service.title)}
          variant="coral"
          size="sm"
          className="w-full h-11 text-sm min-h-[44px]"
          aria-label={`Book ${service.title} via WhatsApp`}
        >
          <MessageCircle className="mr-1 h-4 w-4" aria-hidden="true" />
          Book Now
        </Button>
      </div>
    </article>
  );

  return (
    <section className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Deep Tissue Massage Services */}
        <div className="mb-16">
          <h2 id="services-heading" className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-center font-montserrat">
            Deep Tissue <span className="text-primary">Massage Services</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-10 font-montserrat font-light max-w-lg mx-auto">
            Pain relief therapy for chronic tension and muscle recovery
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {deepTissueServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Aromatherapy Packages */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-center font-montserrat">
            Aromatherapy <span className="text-primary">Packages</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-10 font-montserrat font-light max-w-lg mx-auto">
            Holistic wellness center treatments with natural essential oils
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {aromatherapyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Couple Spa Deals */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-center font-montserrat">
            Couple Spa <span className="text-primary">Deals</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-10 font-montserrat font-light max-w-lg mx-auto">
            Romantic spa experience for two at the best spa near me in Koramangala
          </p>
          <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-lg mx-auto">
            {coupleServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
