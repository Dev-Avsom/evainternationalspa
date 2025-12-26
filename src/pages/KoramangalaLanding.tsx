import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Star, Shield, Users, Clock } from "lucide-react";
import heroImage from "@/assets/massage-therapy.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SiteHeader from "@/components/site-header";
import StickyCTA from "@/components/sticky-cta";

const KoramangalaLanding = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918884666814", "_blank");
  };

  const testimonials = [
    {
      text: "The best spa in Koramangala, hands down. So relaxing!",
      name: "Priya S.",
      rating: 5
    },
    {
      text: "I've found my new go-to place. The team at Eva Spa is incredible.",
      name: "Rajesh M.", 
      rating: 5
    },
    {
      text: "Amazing full body massage experience. Perfect location in Koramangala!",
      name: "Anita K.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Prime Koramangala Location", 
      description: "Easily accessible from all parts of Koramangala"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Expert Local Therapists",
      description: "Certified professionals for your wellness needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Treatments",
      description: "Tailored spa experiences designed for you"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Extended Hours",
      description: "Open 7 days a week from 9 AM to 10 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/85"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat">
                Your Sanctuary for Serenity in <span className="text-gold-accent">Koramangala</span>
              </h1>
              
              <h2 className="text-lg md:text-xl font-semibold text-white/90 font-montserrat">
                The Ultimate Spa Experience
              </h2>
              
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-montserrat font-medium">
                Escape the city's stress and rediscover balance at Eva International Spa, 
                your premier destination for luxury wellness in the heart of Koramangala.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-4">
              <div className="inline-block bg-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-luxury mx-2">
                <p className="text-primary font-bold text-sm md:text-base text-center font-montserrat">
                  ✨ Spa Services from ₹1,999/- | Prime Location
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6 px-4">
              <Button
                onClick={handleCall}
                variant="outline"
                size="default"
                className="w-full sm:w-auto text-sm md:text-base min-h-[48px] md:min-h-[56px] border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Book Your Spa Day - 8884666814</span>
                <span className="md:hidden">Call - 8884666814</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="whatsapp"
                size="default"
                className="w-full sm:w-auto text-sm md:text-base min-h-[48px] md:min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
              World-Class Facilities
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              A World-Class <span className="text-primary">Escape</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              Our serene environment transports you away from the city's hustle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-sm md:text-base font-montserrat">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-muted-foreground text-center text-xs md:text-sm font-montserrat">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Holistic <span className="text-primary">Wellness</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              We offer a full menu of services, from therapeutic massages to invigorating facials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Card className="bg-card border border-border shadow-card rounded-2xl hover-lift overflow-hidden">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img src={massageImage} alt="Massage Therapy Koramangala" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base md:text-lg font-montserrat">Full Body Massage</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm font-montserrat">
                  Experience complete relaxation with our signature full body massage treatments.
                </CardDescription>
                <Button onClick={handleCall} variant="default" size="sm" className="w-full min-h-[40px]">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-card rounded-2xl hover-lift overflow-hidden">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img src={aromatherapyImage} alt="Aromatherapy Koramangala" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base md:text-lg font-montserrat">Aromatherapy</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm font-montserrat">
                  Discover the healing power of essential oils with our premium aromatherapy treatments.
                </CardDescription>
                <Button onClick={handleCall} variant="default" size="sm" className="w-full min-h-[40px]">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-card rounded-2xl hover-lift overflow-hidden">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img src={jacuzziImage} alt="Jacuzzi Spa Koramangala" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base md:text-lg font-montserrat">Jacuzzi Experience</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm font-montserrat">
                  Indulge in our luxury jacuzzi treatments, the perfect way to unwind.
                </CardDescription>
                <Button onClick={handleCall} variant="default" size="sm" className="w-full min-h-[40px]">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Client Reviews
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              What Our <span className="text-primary">Local Clients</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardContent className="p-5 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm font-montserrat">"{testimonial.text}"</p>
                  <p className="text-foreground font-bold text-sm font-montserrat">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gold-accent pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-montserrat">
              Ready to Experience the Area's Best Spa?
            </h2>
            <p className="text-base text-white/90 font-montserrat font-medium">
              Don't wait! Book your appointment today and discover why Eva International Spa 
              is your most trusted local wellness destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={handleCall}
                variant="default"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px]"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Your Spa Day Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="whatsapp"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                WhatsApp Us
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-white font-medium text-sm font-montserrat">
                📍 Located in Koramangala | 📞 +91 88846 66814 | 🕘 Open 7 Days: 9 AM - 10 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default KoramangalaLanding;