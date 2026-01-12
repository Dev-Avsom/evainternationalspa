import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Target, Zap, Shield, Activity, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/thai-therapy.jpg";
import thaiImage from "@/assets/thai-therapy.jpg";
import Footer from "@/components/footer";
import SiteHeader from "@/components/site-header";
import StickyCTA from "@/components/sticky-cta";

const ThaiMassageLanding = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I would like to book an authentic Thai massage session at Eva International Spa.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      title: "Traditional Thai Massage",
      duration: "90-120 mins",
      price: "₹3,999",
      description: "Authentic Thai therapy combining acupressure and yoga-like stretching",
      benefits: [
        "Relieves muscle tension",
        "Improves circulation", 
        "Boosts energy levels",
        "Enhances flexibility",
        "Reduces chronic pain"
      ]
    },
    {
      title: "Extended Thai Massage",
      duration: "150 mins",
      price: "₹5,999", 
      description: "Complete therapeutic session with extended time for maximum benefits",
      benefits: [
        "Full body restoration",
        "Deep stress relief",
        "Complete energy balance",
        "Enhanced flexibility",
        "Holistic healing"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Authentic Thai Therapy",
      description: "Traditional techniques from Thai healing masters"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Restoration", 
      description: "Unblock energy pathways and restore natural flow"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Therapists",
      description: "Trained in authentic Thai massage methods"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Deeply Therapeutic",
      description: "Lasting relief from chronic pain and stress"
    }
  ];

  const testimonials = [
    {
      text: "I've had a lot of Thai massages, and this was the most authentic and effective!",
      name: "Vikram R.",
      service: "Traditional Thai Massage"
    },
    {
      text: "After months of back pain, this therapeutic session provided the relief I needed.",
      name: "Arjun P.",
      service: "Extended Thai Massage"
    },
    {
      text: "The stretching and acupressure techniques were amazing. My flexibility improved!",
      name: "Priya K.",
      service: "Traditional Thai Massage"
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
              <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-gold-accent fill-current" aria-hidden="true" />
              <span className="text-white text-xs md:text-sm font-semibold font-montserrat">
                4.8★ Rated • Authentic Thai Therapy
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat tracking-tight">
              Thai Massage Starting from<br />
              <span className="text-gold-accent">₹1,999</span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed font-montserrat px-2">
              Authentic Thai stretching & acupressure therapy.
              Certified therapists • Koramangala
            </p>

            {/* Primary CTA */}
            <div className="pt-2 md:pt-3">
              <Button
                onClick={handleWhatsApp}
                variant="gold"
                size="xl"
                className="w-full sm:w-auto text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-7 h-auto shadow-2xl active:scale-95 transition-transform"
                aria-label="Book Thai massage via WhatsApp"
              >
                <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                Book Now @ ₹1,999
              </Button>
              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3 font-montserrat">
                Limited slots • Instant confirmation
              </p>
            </div>

            {/* Quick Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-1.5 md:gap-y-2 pt-3 md:pt-4 text-white/80 text-xs md:text-sm font-montserrat">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
                Certified Thai Experts
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
                Pain Relief
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" aria-hidden="true" />
                Open 9AM-10PM
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

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
              Ancient Healing
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Ancient <span className="text-primary">Healing Arts</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              Our certified Thai therapists use authentic techniques for lasting therapeutic benefits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-sm md:text-base font-montserrat">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardDescription className="text-muted-foreground text-center text-xs md:text-sm font-montserrat">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-semibold font-montserrat mb-4">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Therapeutic <span className="text-primary">Services</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-montserrat font-medium mt-4">
              Lasting relief from chronic pain and stress using time-tested techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift overflow-hidden">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img src={thaiImage} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-gold-accent rounded-full px-3 py-1">
                    <span className="text-white font-bold text-xs">{service.price}</span>
                  </div>
                </div>
                
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base md:text-lg font-montserrat flex items-center justify-between">
                    {service.title}
                    <span className="text-xs text-primary font-medium">{service.duration}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 space-y-3">
                  <CardDescription className="text-muted-foreground text-sm font-montserrat">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground text-xs md:text-sm font-montserrat">
                        <Activity className="w-3 h-3 mr-2 text-primary shrink-0" />
                        {benefit}
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

      {/* Thai Massage Details */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat">
                  Traditional Technique
                </span>
                <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
                  Traditional <span className="text-primary">Thai Technique</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-montserrat font-medium">
                  Rooted in ancient Thai traditions, our therapy combines yoga-like stretching, 
                  acupressure, and deep tissue massage to promote flexibility and energy flow.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <h4 className="text-sm md:text-base font-bold font-montserrat">What to Expect:</h4>
                    <ul className="space-y-1 text-muted-foreground text-xs md:text-sm font-montserrat">
                      <li>• Clothing-on massage</li>
                      <li>• Yoga-like stretching</li>
                      <li>• Acupressure techniques</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm md:text-base font-bold font-montserrat">Perfect For:</h4>
                    <ul className="space-y-1 text-muted-foreground text-xs md:text-sm font-montserrat">
                      <li>• Athletes & active people</li>
                      <li>• Office workers</li>
                      <li>• Chronic pain sufferers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={thaiImage} 
                  alt="Traditional Thai Massage Therapy" 
                  className="w-full rounded-2xl shadow-luxury"
                  loading="lazy"
                />
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
              Success Stories
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
              Client <span className="text-primary">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl hover-lift">
                <CardContent className="p-5">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-center text-sm font-montserrat">"{testimonial.text}"</p>
                  <div className="text-center pt-3 border-t border-border">
                    <p className="text-foreground font-bold text-sm font-montserrat">{testimonial.name}</p>
                    <p className="text-primary text-xs font-montserrat">{testimonial.service}</p>
                  </div>
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
              Experience Authentic Thai Healing Today
            </h2>
            <p className="text-base text-white/90 font-montserrat font-medium">
              Don't let chronic pain and stress hold you back. Book your therapeutic Thai massage 
              session today and discover the power of authentic healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={handleCall}
                variant="default"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px]"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Book Therapeutic Session</span>
                <span className="md:hidden">Book Session</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="whatsapp"
                size="default"
                className="w-full sm:w-auto min-h-[48px] md:min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">WhatsApp for Thai Massage</span>
                <span className="md:hidden">WhatsApp</span>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-white font-medium text-sm font-montserrat">
                🌿 Certified Thai Therapists | 📞 +91 88846 66814 | 🕘 Open Daily: 9 AM - 10 PM
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

export default ThaiMassageLanding;