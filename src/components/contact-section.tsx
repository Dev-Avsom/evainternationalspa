import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    // WhatsApp number will be provided later
    window.open("https://wa.me/918884666814", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@evainternationalspa.com", "_self");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">
            Book Your <span className="text-primary font-bold">Appointment</span>
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury and relaxation? Contact us now to book your personalized spa treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 88846 66814</p>
                    <Button 
                      onClick={handleCall}
                      variant="luxury" 
                      size="sm" 
                      className="mt-2"
                    >
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">Quick responses & booking</p>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="hero" 
                      size="sm" 
                      className="mt-2"
                    >
                      WhatsApp Us
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">info@evainternationalspa.com</p>
                    <Button 
                      onClick={handleEmail}
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                    >
                      Send Email
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 09:00 AM - 10:00 PM</p>
                    <p className="text-sm text-primary">Open 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Eva International Spa</p>
                    <Button 
                      onClick={() => window.open("https://maps.app.goo.gl/x33CYXpKePF3YTCW7", "_blank")}
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                    >
                      <MapPin className="mr-1 h-4 w-4" />
                      View on Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            {/* Immediate Booking */}
            <Card className="bg-gradient-gold text-spa-dark border-0 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Book Your Spa Experience Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <p className="text-lg">
                  Don't wait! Call us now for immediate booking and consultation. 
                  Our expert team is ready to provide you with the ultimate relaxation experience.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleCall}
                    variant="hero" 
                    size="xl"
                    className="w-full bg-spa-dark text-primary hover:bg-spa-dark/90"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call +91 88846 66814
                  </Button>
                  
                  <p className="text-sm">Or</p>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="hero" 
                    size="lg"
                    className="w-full bg-spa-dark text-primary hover:bg-spa-dark/90"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp for Quick Response
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Special Offers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-primary font-semibold">First-time visitors get 20% off!</p>
                  <p className="text-muted-foreground text-sm">
                    Valid on all massage therapies
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-accent font-semibold">Couple packages available</p>
                  <p className="text-muted-foreground text-sm">
                    Romantic spa experience for two
                  </p>
                </div>

                <Button 
                  onClick={handleCall}
                  variant="luxury" 
                  size="lg"
                  className="w-full"
                >
                  Book Now to Claim Offer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;