import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Sparkles, Droplets, Heart } from "lucide-react";
import massageImage from "@/assets/massage-therapy.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";
import balineseImage from "@/assets/balinese-therapy.jpg";
import deepTissueImage from "@/assets/deep-tissue-therapy.jpg";
import swedishImage from "@/assets/swedish-therapy.jpg";
import thaiImage from "@/assets/thai-therapy.jpg";
import bodyScrubImage from "@/assets/body-scrub-therapy.jpg";

const ServicesSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi! I would like to book ${serviceName} at Eva International Spa.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      title: "Aroma Therapy",
      description: "Discover the power of essential oils with our Aromatherapy treatments. This holistic healing practice uses natural scents and therapeutic properties of plant-based oils to enhance your physical and emotional well-being.",
      image: aromatherapyImage,
      icon: <Sparkles className="h-6 w-6" />,
      duration: "60-90 mins",
      featured: true
    },
    {
      title: "Balinese Therapy", 
      description: "Ancient Indonesian healing tradition that incorporates deep tissue massage, acupressure, and stretching, alongside aromatic oils and natural remedies.",
      image: balineseImage,
      icon: <Heart className="h-6 w-6" />,
      duration: "90-120 mins",
      featured: false
    },
    {
      title: "Deep Tissue Therapy",
      description: "Therapeutic massage designed to target the deeper layers of muscle and connective tissue. Perfect for relieving chronic tension and muscle pain.",
      image: deepTissueImage,
      icon: <Heart className="h-6 w-6" />,
      duration: "60-90 mins",
      featured: false
    },
    {
      title: "Swedish Therapy",
      description: "One of the most popular massage therapies involving long, flowing strokes, kneading, and circular movements to help relax the entire body.",
      image: swedishImage,
      icon: <Heart className="h-6 w-6" />,
      duration: "60-90 mins",
      featured: false
    },
    {
      title: "Thai Therapy",
      description: "Rooted in ancient Thai traditions, this unique therapy combines yoga-like stretching, acupressure, and deep tissue massage to promote flexibility.",
      image: thaiImage,
      icon: <Heart className="h-6 w-6" />,
      duration: "90-120 mins",
      featured: false
    },
    {
      title: "Body Scrub Therapy",
      description: "Ultimate skin rejuvenation with luxurious body scrub treatments designed to exfoliate, nourish, and hydrate your skin for a glowing complexion.",
      image: bodyScrubImage,
      icon: <Droplets className="h-6 w-6" />,
      duration: "45-60 mins",
      featured: false
    },
    {
      title: "Royal Jacuzzi Experience",
      description: "Bespoke treatment that combines the soothing benefits of hydrotherapy with indulgent touches of luxury in our private, beautifully designed Jacuzzi.",
      image: jacuzziImage,
      icon: <Droplets className="h-6 w-6" />,
      duration: "60-90 mins",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">
            Our <span className="text-primary font-bold">Services</span>
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our carefully curated spa treatments designed to rejuvenate your body, 
            mind, and spirit in the most luxurious environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105 ${
                service.featured ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                  {service.icon}
                </div>
                {service.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-gold text-spa-dark px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-foreground flex items-center justify-between">
                  {service.title}
                  <span className="text-sm text-primary font-normal">{service.duration}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    onClick={handleCall}
                    variant="call" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button 
                    onClick={() => handleWhatsApp(service.title)}
                    variant="hero" 
                    size="sm" 
                    className="flex-1"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <div className="bg-gradient-card rounded-lg p-6 md:p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Ready for the Ultimate Relaxation Experience?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Call us now to book your appointment and let our expert therapists take care of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleCall}
                variant="call" 
                size="lg"
                className="shadow-glow w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span className="text-sm md:text-base">Call Now</span>
              </Button>
              <Button 
                onClick={() => handleWhatsApp("a spa appointment")}
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="text-sm md:text-base">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;