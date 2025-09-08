import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Heart, Sparkles, Gift, Users } from "lucide-react";
import heroImage from "@/assets/jacuzzi.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const CouplesLanding = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I would like to book a couples spa package at Eva International Spa.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const packages = [
    {
      title: "Romantic Retreat Package",
      duration: "3 hours",
      price: "Customized Package",
      image: jacuzziImage,
      features: [
        "Private Jacuzzi Near Me & Steam Session",
        "Expert Private Massage Therapist Near Me",
        "Champagne & Fresh Fruits Service",
        "Aromatherapy by Couples Spa Near Me",
        "Exclusive Jacuzzi Spa for Couples Suite"
      ]
    },
    {
      title: "Anniversary Special",
      duration: "4 hours",
      price: "Personalized Package",
      image: massageImage,
      features: [
        "Extended Jacuzzi Near Me Session",
        "Premium Couple Massage Spa Near Me",
        "Rose Petal & Steam and Sauna Near Me",
        "Personalized Music & Ambiance",
        "Complimentary Romantic Photography"
      ]
    },
    {
      title: "Ultimate Romance Package",
      duration: "5 hours",
      price: "Premium Package",
      image: aromatherapyImage,
      features: [
        "All-Day Couples Spa Near Me Suite",
        "Multiple Private Massage Therapist Sessions",
        "Gourmet Meal & Jacuzzi Spa for Couples",
        "Professional Couple Massage Spa Consultation",
        "Luxury Take-Home Spa Kit"
      ]
    }
  ];

  const testimonials = [
    {
      text: "Found the best couples spa near me! The private massage therapist near me was amazing, and the jacuzzi spa for couples was so romantic. Perfect anniversary treat!",
      name: "Aditi & Ravi",
      occasion: "5th Anniversary"
    },
    {
      text: "This couple massage spa near me exceeded all expectations! The steam and sauna near me facilities plus the private jacuzzi near me made our Valentine's Day unforgettable.",
      name: "Neha & Sameer", 
      occasion: "Valentine's Day"
    },
    {
      text: "Best private massage therapist near me experience! The jacuzzi spa for couples near me with steam and sauna made our honeymoon perfect. Highly recommend this couples spa near me!",
      name: "Priya & Arjun",
      occasion: "Honeymoon"
    }
  ];

  const amenities = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Private Couples Spa Near Me Suites",
      description: "Exclusively designed intimate spaces with jacuzzi near me and steam facilities"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Expert Private Massage Therapist Near Me",
      description: "Perfectly synchronized treatments by certified couple massage spa near me specialists"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Romantic Jacuzzi Spa for Couples",
      description: "Rose petals, candles, steam and sauna near me with personalized ambiance"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Couple Massage Team",
      description: "Personal attendants specializing in couples spa near me experiences"
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
                  alt="EVA International Spa Couples Package" 
                  className="h-24 md:h-32 w-auto"
                />
              </div>
              <div className="w-32 h-px bg-gradient-gold mx-auto"></div>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light text-foreground">
                <span className="text-primary font-bold">Couples Spa Near Me</span> - Reconnect & Unwind Together
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-accent">
                Private Massage Therapist Near Me | Jacuzzi Spa for Couples Near Me
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the best couple massage spa near me at Eva International Spa. Our private massage therapist near me 
                offers exclusive couples' packages with jacuzzi near me, steam and sauna near me facilities. 
                Create unforgettable memories in our luxurious couples spa near me location.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-6 space-y-4">
              <div className="inline-block bg-white backdrop-blur-sm border border-white/30 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in mx-2">
                <p className="text-spa-dark font-bold text-xs md:text-lg text-center">
                  💕 Couples Packages from ₹4,999/-
                </p>
              </div>
              <div className="inline-block bg-primary/90 backdrop-blur-sm border border-primary/30 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in mx-2">
                <p className="text-spa-dark font-bold text-xs md:text-lg text-center">
                  ✨ Book Couples Massage & Get 25% Off
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
                <span className="hidden md:inline">Book Your Romantic Retreat - 8884666814</span>
                <span className="md:hidden">Book Retreat - 8884666814</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">WhatsApp for Couples Package</span>
                <span className="md:hidden">WhatsApp Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Amenities Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Private <span className="text-primary font-bold">Jacuzzi Near Me & Steam and Sauna Near Me</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the best jacuzzi spa for couples near me with private steam and sauna near me facilities. 
              Our jacuzzi near me sessions with private massage therapist near me create the perfect romantic atmosphere 
              for couples seeking luxury spa treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {amenity.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {amenity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Exclusive <span className="text-primary font-bold">Couple Massage Spa Near Me Packages</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect couple massage spa near me with our exclusive packages featuring private massage therapist near me, 
              jacuzzi spa for couples near me, and steam and sauna near me facilities for special occasions and romantic dates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-spa-dark font-bold text-sm">{pkg.price}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center justify-between">
                    {pkg.title}
                    <span className="text-sm text-primary font-normal">{pkg.duration}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground text-sm">
                        <Heart className="w-3 h-3 mr-2 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-4">
                    <Button onClick={handleCall} variant="call" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Book {pkg.title}
                    </Button>
                    <Button onClick={handleWhatsApp} variant="hero" size="sm" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Couples Massage */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Best <span className="text-primary font-bold">Private Massage Therapist Near Me for Couples</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert private massage therapist near me team works in perfect synchronization at this premier couples spa near me. 
              Experience customized couple massage spa near me treatments with jacuzzi near me and steam and sauna near me facilities, 
              creating the perfect harmony of healing touch in our romantic environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Couples Spa Near Me Experience</h3>
                <p className="text-muted-foreground text-sm">Enjoy synchronized massages together with jacuzzi near me access</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Private Massage Therapist Near Me</h3>
                <p className="text-muted-foreground text-sm">Expert couple massage spa near me treatments by certified pairs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Steam and Sauna Near Me</h3>
                <p className="text-muted-foreground text-sm">Complete jacuzzi spa for couples near me with wellness facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Couples <span className="text-primary font-bold">Love Stories</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-center text-sm">"{testimonial.text}"</p>
                  <div className="text-center">
                    <p className="text-foreground font-semibold text-sm">- {testimonial.name}</p>
                    <p className="text-primary text-xs">{testimonial.occasion}</p>
                  </div>
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
              Ready to Create Unforgettable Memories?
            </h2>
            <p className="text-lg text-spa-dark">
              Book your romantic couples spa near me experience today with our private massage therapist near me, 
              jacuzzi spa for couples near me, and steam and sauna near me facilities. Discover why Eva International Spa 
              is the best couple massage spa near me destination for love, relaxation, and reconnection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto bg-spa-dark text-primary hover:bg-spa-dark/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Romantic Retreat
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="luxury"
                size="xl"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Special Packages
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-spa-dark font-semibold">
                💕 Private Suites Available | 📞 +91 88846 66814 | 🕘 Open Daily: 9 AM - 10 PM
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

export default CouplesLanding;