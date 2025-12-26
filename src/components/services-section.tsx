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
    <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={`${service.title} - Professional massage therapy at Eva International Spa Koramangala`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width="300"
          height="192"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-foreground text-base font-montserrat">
          {service.title}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4 font-montserrat font-medium mt-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>{service.duration}</span>
        </div>
        <Button 
          onClick={() => handleWhatsApp(service.title)}
          variant="teal"
          size="sm"
          className="w-full h-11 text-sm min-h-[44px]"
          aria-label={`Book ${service.title} via WhatsApp`}
        >
          <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
          Book Now
        </Button>
      </div>
    </article>
  );

  return (
    <section className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Deep Tissue Massage Services */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
              Pain Relief Therapy
            </span>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Deep Tissue <span className="text-primary">Massage Services</span>
            </h2>
            <p className="text-base text-muted-foreground mt-4 font-montserrat font-medium max-w-lg mx-auto">
              Expert therapy for chronic tension and muscle recovery
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {deepTissueServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Aromatherapy Packages */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Holistic Wellness
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Aromatherapy <span className="text-primary">Packages</span>
            </h2>
            <p className="text-base text-muted-foreground mt-4 font-montserrat font-medium max-w-lg mx-auto">
              Natural essential oils for mind and body rejuvenation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {aromatherapyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Couple Spa Deals */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full text-sm font-semibold font-montserrat mb-4">
              Romantic Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Couple Spa <span className="text-primary">Deals</span>
            </h2>
            <p className="text-base text-muted-foreground mt-4 font-montserrat font-medium max-w-lg mx-auto">
              Unforgettable spa experience for two
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-xl mx-auto">
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
