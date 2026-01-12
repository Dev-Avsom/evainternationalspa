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
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-16">
        <div 
          className="absolute inset-0 bg-primary bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        
        <div className="relative z-10 container mx-auto px-4 text-center py-6 pb-24 md:pb-28">
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-5">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full px-3 md:px-4 py-1.5 md:py-2">
              <Heart className="h-3.5 w-3.5 md:h-4 md:w-4 text-gold-accent fill-current" aria-hidden="true" />
              <span className="text-white text-xs md:text-sm font-semibold font-montserrat">
                4.8★ Rated • 500+ Couples Served
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat tracking-tight">
              Couples Spa Starting from<br />
              <span className="text-gold-accent">₹4,999</span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed font-montserrat px-2">
              Private jacuzzi + couples massage by certified therapists.
              Romantic ambiance • Koramangala
            </p>

            {/* Primary CTA */}
            <div className="pt-2 md:pt-3">
              <Button
                onClick={handleWhatsApp}
                variant="gold"
                size="xl"
                className="w-full sm:w-auto text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-7 h-auto shadow-2xl active:scale-95 transition-transform"
                aria-label="Book couples spa via WhatsApp"
              >
                <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                Book Couples Spa @ ₹4,999
              </Button>
              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3 font-montserrat">
                Limited slots • Private suite guaranteed
              </p>
            </div>

            {/* Quick Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-1.5 md:gap-y-2 pt-3 md:pt-4 text-white/80 text-xs md:text-sm font-montserrat">
              <span className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-gold-accent" aria-hidden="true" />
                Private Suite
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 md:h-4 md:w-4 text-pink-400" aria-hidden="true" />
                Jacuzzi Included
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
                Expert Therapists
              </span>
            </div>

            {/* Secondary CTA */}
            <div className="pt-1 md:pt-2">
              <button
                onClick={handleCall}
                className="text-white/90 hover:text-white active:text-white underline underline-offset-4 text-xs md:text-sm font-montserrat transition-colors py-2"
                aria-label="Call us at 8884666814"
              >
                <Phone className="inline h-3.5 w-3.5 md:h-4 md:w-4 mr-1" aria-hidden="true" />
                Or call: 888-466-6814
              </button>
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