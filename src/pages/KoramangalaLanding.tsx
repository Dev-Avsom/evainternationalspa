import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Star, Shield, Users, Clock } from "lucide-react";
import heroImage from "@/assets/massage-therapy.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

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
      description: "Easily accessible from all parts of Koramangala, with convenient parking"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Expert Local Therapists",
      description: "Our certified professionals understand your local wellness needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Treatments",
      description: "Tailored spa experiences designed specifically for you"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Extended Hours",
      description: "Open 7 days a week from 9 AM to 10 PM for your convenience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Logo */}
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/8472c527-b267-4b77-8b2c-a6664cc5a617.png" 
                  alt="EVA International Spa Koramangala" 
                  className="h-24 md:h-32 w-auto"
                />
              </div>
              <div className="w-32 h-px bg-gradient-gold mx-auto"></div>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light text-foreground">
                Your Sanctuary for Serenity in <span className="text-primary font-bold">Koramangala</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                The Ultimate Spa Experience
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Escape the city's stress and rediscover balance at Eva International Spa, 
                your premier destination for luxury wellness. Located in the heart of the area, 
                we offer a world-class spa experience with skilled therapists and commitment to your well-being.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-6">
              <div className="inline-block bg-white backdrop-blur-sm border border-white/30 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in mx-2">
                <p className="text-spa-dark font-bold text-xs md:text-lg text-center">
                  ✨ Spa Services from ₹1,999/- | Prime Location
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
              <Button
                onClick={handleCall}
                variant="call"
                size="xl"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Book Your Spa Day - 8884666814</span>
                <span className="md:hidden">Call - 8884666814</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              A World-Class <span className="text-primary font-bold">Escape</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our serene environment transports you away from the city's hustle, providing a haven of peace and rejuvenation in your neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Holistic <span className="text-primary font-bold">Wellness</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a full menu of services, from therapeutic massages to invigorating facials, 
              right here in your local area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={massageImage} alt="Massage Therapy Koramangala" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Full Body Massage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Experience complete relaxation with our signature full body massage treatments, 
                  perfect after a long day in Koramangala.
                </CardDescription>
                <Button onClick={handleCall} variant="call" size="sm" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={aromatherapyImage} alt="Aromatherapy Koramangala" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Aromatherapy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Discover the healing power of essential oils with our premium aromatherapy treatments 
                  in our Koramangala spa center.
                </CardDescription>
                <Button onClick={handleCall} variant="call" size="sm" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={jacuzziImage} alt="Jacuzzi Spa Koramangala" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Jacuzzi Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Indulge in our luxury jacuzzi treatments, the perfect way to unwind and rejuvenate 
                  in Koramangala's finest spa.
                </CardDescription>
                <Button onClick={handleCall} variant="call" size="sm" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              What Our <span className="text-primary font-bold">Local Clients</span> Say
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <p className="text-foreground font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-spa-dark">
              🚨 LIMITED TIME OFFER - Book Today & Save!
            </h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 inline-block">
              <p className="text-spa-dark font-bold text-lg">
                ⏰ Special Discount: Eva International Spa Services
              </p>
            </div>
            <p className="text-lg text-spa-dark">
              Don't wait! Book your appointment today and discover why Eva International Spa 
              is your most trusted local wellness destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto bg-spa-dark text-primary hover:bg-spa-dark/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Spa Day Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="luxury"
                size="xl"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-spa-dark font-semibold">
                📍 Located in Koramangala | 📞 +91 88846 66814 | 🕘 Open 7 Days: 9 AM - 10 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default KoramangalaLanding;