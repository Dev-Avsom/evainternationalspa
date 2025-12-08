import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Target, Zap, Shield, Activity, Star } from "lucide-react";
import heroImage from "@/assets/thai-therapy.jpg";
import thaiImage from "@/assets/thai-therapy.jpg";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

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
      description: "Authentic Thai therapy combining acupressure and yoga-like stretching to restore energy and balance",
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
      description: "Complete therapeutic session with extended time for maximum wellness benefits and deep relaxation",
      benefits: [
        "Full body restoration",
        "Deep stress relief",
        "Complete energy balance",
        "Enhanced flexibility",
        "Holistic healing experience"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Authentic Thai Therapy",
      description: "Traditional techniques passed down through generations of Thai healing masters"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Restoration", 
      description: "Unblock energy pathways and restore natural flow throughout your body"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Therapists",
      description: "Expert practitioners trained in authentic Thai massage methods"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Deeply Therapeutic",
      description: "Not just relaxation - lasting relief from chronic pain and stress conditions"
    }
  ];

  const testimonials = [
    {
      text: "I've had a lot of Thai massages, and this was the most authentic and effective. I feel brand new!",
      name: "Vikram R.",
      service: "Traditional Thai Massage"
    },
    {
      text: "After months of back pain, this therapeutic session provided the relief I needed. Highly recommend!",
      name: "Arjun P.",
      service: "Extended Thai Massage"
    },
    {
      text: "The stretching and acupressure techniques were amazing. My flexibility has improved so much!",
      name: "Priya K.",
      service: "Traditional Thai Massage"
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
                  alt="EVA International Spa Thai Massage" 
                  className="h-24 md:h-32 w-auto"
                />
              </div>
              <div className="w-32 h-px bg-gradient-gold mx-auto"></div>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light text-foreground">
                Discover the Art of <span className="text-primary font-bold">Traditional Thai Wellness</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-accent">
                Authentic Thai Massage & Wellness
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience authentic Thai massage at Eva International Spa. 
                Our expert practitioners deliver therapeutic relief using ancient healing traditions 
                to restore your body's energy and balance.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-6">
              <div className="inline-block bg-white backdrop-blur-sm border border-white/30 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in mx-2">
                <p className="text-spa-dark font-bold text-xs md:text-lg text-center">
                  🌿 Thai Massage from ₹3,999/- | Authentic Therapy
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
                <span className="hidden md:inline">Book Session - 8884666814</span>
                <span className="md:hidden">Call Now</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">WhatsApp Thai Massage</span>
                <span className="md:hidden">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Ancient <span className="text-primary font-bold">Healing Arts</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into a world of ancient healing and traditional wellness. Our certified Thai therapists 
              are masters of this art, using authentic techniques for lasting therapeutic benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Therapeutic <span className="text-primary font-bold">Services</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our treatments are not just about relaxation; they provide lasting relief from 
              chronic pain and stress using time-tested therapeutic techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={thaiImage} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-spa-dark font-bold text-sm">{service.price}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center justify-between">
                    {service.title}
                    <span className="text-sm text-primary font-normal">{service.duration}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Therapeutic Benefits:</h4>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground text-sm">
                        <Activity className="w-3 h-3 mr-2 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-4">
                    <Button onClick={handleCall} variant="call" size="sm" className="w-full text-xs sm:text-sm">
                      <Phone className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Book {service.title}</span>
                      <span className="sm:hidden">Book Now</span>
                    </Button>
                    <Button onClick={handleWhatsApp} variant="hero" size="sm" className="w-full text-xs sm:text-sm">
                      <MessageCircle className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">WhatsApp Details</span>
                      <span className="sm:hidden">WhatsApp</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thai Massage Details */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  Traditional <span className="text-primary font-bold">Thai Technique</span>
                </h2>
                <div className="w-24 h-px bg-gradient-gold"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rooted in ancient Thai traditions, our unique therapy combines yoga-like stretching, 
                  acupressure, and deep tissue massage to promote flexibility and energy flow. 
                  Our sessions follow traditional practices to relieve muscle tension, improve circulation, 
                  and boost your energy levels naturally.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">What to Expect:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Clothing-on massage</li>
                      <li>• Yoga-like stretching</li>
                      <li>• Acupressure techniques</li>
                      <li>• Energy line work</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">Perfect For:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Athletes & active people</li>
                      <li>• Office workers</li>
                      <li>• Chronic pain sufferers</li>
                      <li>• Flexibility improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={thaiImage} 
                  alt="Traditional Thai Massage Therapy" 
                  className="w-full rounded-lg shadow-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Client <span className="text-primary font-bold">Success Stories</span>
            </h2>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our therapeutic Thai massage treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-center">"{testimonial.text}"</p>
                  <div className="text-center">
                    <p className="text-foreground font-semibold">- {testimonial.name}</p>
                    <p className="text-primary text-sm">{testimonial.service}</p>
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
              Experience Authentic Thai Healing Today
            </h2>
            <p className="text-lg text-spa-dark">
              Don't let chronic pain and stress hold you back. Book your therapeutic Thai massage 
              session today and discover the power of authentic healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto bg-spa-dark text-primary hover:bg-spa-dark/90 text-sm md:text-base"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Book Your Therapeutic Session</span>
                <span className="md:hidden">Book Session</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="luxury"
                size="xl"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">WhatsApp for Thai Massage</span>
                <span className="md:hidden">WhatsApp</span>
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-spa-dark font-semibold">
                🌿 Certified Thai Therapists | 📞 +91 88846 66814 | 🕘 Open Daily: 9 AM - 10 PM
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

export default ThaiMassageLanding;