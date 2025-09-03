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
    const message = "Hi! I would like to book an authentic Thai massage and foot reflexology session at Eva International Spa.";
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
      title: "Therapeutic Foot Reflexology",
      duration: "60-90 mins", 
      price: "₹1,999",
      description: "Targeted pressure point therapy on feet to harmonize your entire body and provide lasting relief",
      benefits: [
        "Soothes tired feet",
        "Improves sleep quality",
        "Reduces stress hormones",
        "Enhances blood flow",
        "Balances nervous system"
      ]
    },
    {
      title: "Combined Thai & Reflexology",
      duration: "150 mins",
      price: "₹5,999", 
      description: "Complete therapeutic session combining both ancient healing arts for maximum wellness benefits",
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
      description: "Expert practitioners trained in authentic Thai massage and reflexology methods"
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
      text: "The foot reflexology was incredible! My feet feel so light, and my whole body feels relaxed.",
      name: "Meera S.",
      service: "Foot Reflexology"
    },
    {
      text: "After months of back pain, this therapeutic session provided the relief I needed. Highly recommend!",
      name: "Arjun P.",
      service: "Combined Therapy"
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
                Authentic Thai Massage & Foot Reflexology
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience authentic Thai massage and foot reflexology at Eva International Spa. 
                Our expert practitioners deliver therapeutic relief using ancient healing traditions 
                to restore your body's energy and balance.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="pt-6">
              <div className="inline-block bg-white backdrop-blur-sm border border-white/30 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg hover-scale animate-fade-in">
                <p className="text-spa-dark font-bold text-sm md:text-lg">
                  🌿 Authentic Thai Massage Starting from ₹1,999/- | Expert Reflexology
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={handleCall}
                variant="call"
                size="xl"
                className="w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Therapeutic Session - 8884666814
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Thai Massage
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
                    <Button onClick={handleCall} variant="call" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Book {service.title}
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

      {/* Foot Reflexology Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-card rounded-lg p-8 border border-border/50 shadow-luxury">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Foot Reflexology Map</h3>
                  <p className="text-muted-foreground mb-6">
                    Your feet contain over 7,000 nerve endings connected to every organ in your body. 
                    Our expert reflexologists apply precise pressure to specific points to promote healing throughout your system.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pressure Points:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Head & Neck</li>
                        <li>• Heart & Lungs</li>
                        <li>• Digestive System</li>
                        <li>• Reproductive Organs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Stress reduction</li>
                        <li>• Better sleep</li>
                        <li>• Pain relief</li>
                        <li>• Improved circulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  Targeted <span className="text-primary font-bold">Foot Reflexology</span>
                </h2>
                <div className="w-24 h-px bg-gradient-gold"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your feet carry the weight of your day. Our reflexology services apply pressure 
                  to specific points to soothe your feet and harmonize your entire body. 
                  This ancient healing art promotes natural healing by stimulating reflex points 
                  that correspond to different organs and systems in your body.
                </p>
                
                <Button onClick={handleCall} variant="call" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Reflexology Session
                </Button>
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
              Real results from our therapeutic Thai massage and reflexology treatments.
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
              and reflexology session today and discover the power of authentic healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto bg-spa-dark text-primary hover:bg-spa-dark/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Therapeutic Session
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="luxury"
                size="xl"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Thai Massage
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