import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Heart, Sparkles, Gift, Users } from "lucide-react";
import heroImage from "@/assets/jacuzzi.jpg";
import jacuzziImage from "@/assets/jacuzzi.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SiteHeader from "@/components/site-header";
import StickyCTA from "@/components/sticky-cta";

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
                <span className="text-gold-accent">Couples Spa Near Me</span> - Reconnect & Unwind Together
              </h1>
              
              <h2 className="text-lg md:text-xl font-semibold text-white/90 font-montserrat">
                Private Massage Therapist Near Me | Jacuzzi Spa for Couples Near Me
              </h2>
              
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-montserrat font-medium">
                Discover the best couple massage spa near me at Eva International Spa. Our private massage therapist near me 
                offers exclusive couples' packages with jacuzzi near me, steam and sauna near me facilities.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-4 space-y-3">
              <div className="inline-block bg-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-luxury mx-2">
                <p className="text-primary font-bold text-sm md:text-base text-center font-montserrat">
                  💕 Couples Packages from ₹4,999/-
                </p>
              </div>
              <div className="inline-block bg-gold-accent rounded-full px-4 md:px-6 py-2 md:py-3 shadow-luxury mx-2">
                <p className="text-white font-bold text-sm md:text-base text-center font-montserrat">
                  ✨ Book Couples Massage & Get 25% Off
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
                <span className="hidden md:inline">Book Romantic Retreat - 8884666814</span>
                <span className="md:hidden">Call - 8884666814</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="whatsapp"
                size="default"
                className="w-full sm:w-auto text-sm md:text-base min-h-[48px] md:min-h-[56px]"
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
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
              Exclusive Facilities
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Private <span className="text-primary">Jacuzzi Near Me & Steam and Sauna Near Me</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              Experience the best jacuzzi spa for couples near me with private steam and sauna near me facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <div className="text-primary">
                      {amenity.icon}
                    </div>
                  </div>
                  <CardTitle className="text-sm md:text-base font-montserrat">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-muted-foreground text-center text-xs md:text-sm font-montserrat">
                    {amenity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Romantic Packages
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Exclusive <span className="text-primary">Couple Massage Spa Near Me Packages</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              Find the perfect couple massage spa near me with our exclusive packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift overflow-hidden">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-gold-accent rounded-full px-3 py-1">
                    <span className="text-white font-bold text-xs">{pkg.price}</span>
                  </div>
                </div>
                
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base md:text-lg font-montserrat flex items-center justify-between">
                    {pkg.title}
                    <span className="text-xs text-primary font-medium">{pkg.duration}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="space-y-1.5">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground text-xs md:text-sm font-montserrat">
                        <Heart className="w-3 h-3 mr-2 text-primary shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    <Button onClick={handleCall} variant="default" size="sm" className="w-full min-h-[40px] text-xs md:text-sm">
                      <Phone className="mr-1.5 h-3.5 w-3.5" />
                      Book Now
                    </Button>
                    <Button onClick={handleWhatsApp} variant="whatsapp" size="sm" className="w-full min-h-[40px] text-xs md:text-sm">
                      <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Couples Massage */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat">
              Expert Therapists
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Best <span className="text-primary">Private Massage Therapist Near Me for Couples</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-montserrat font-medium">
              Our expert private massage therapist near me team works in perfect synchronization at this premier couples spa near me.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-bold font-montserrat mb-1">Couples Experience</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-montserrat hidden md:block">Synchronized massages together</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-bold font-montserrat mb-1">Private Therapists</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-montserrat hidden md:block">Certified expert pairs</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gold-accent" />
                </div>
                <h3 className="text-sm md:text-base font-bold font-montserrat mb-1">Steam & Sauna</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-montserrat hidden md:block">Complete wellness facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Love Stories
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Couples <span className="text-primary">Love Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardContent className="p-5">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-gold-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-center text-sm font-montserrat">"{testimonial.text}"</p>
                  <div className="text-center pt-3 border-t border-border">
                    <p className="text-foreground font-bold text-sm font-montserrat">{testimonial.name}</p>
                    <p className="text-primary text-xs font-montserrat">{testimonial.occasion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-montserrat">
              Ready to Create Unforgettable Memories?
            </h2>
            <p className="text-base text-white/80 font-montserrat font-medium">
              Book your romantic couples spa experience today. Discover why Eva International Spa 
              is the best couple massage spa destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={handleCall}
                variant="outline"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px] border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Romantic Retreat
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="whatsapp"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                WhatsApp for Packages
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-white/80 font-medium text-sm font-montserrat">
                💕 Private Suites Available | 📞 +91 88846 66814 | 🕘 Open Daily: 9 AM - 10 PM
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

export default CouplesLanding;