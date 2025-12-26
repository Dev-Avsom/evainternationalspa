import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Sparkles } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a therapy session.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-primary pb-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold font-montserrat mb-4">
            Book Your Session
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
            Book <span className="text-gold-accent">Now</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          {/* Quick Contact Card */}
          <Card className="bg-white border-0 shadow-luxury rounded-2xl overflow-hidden">
            <div className="h-1 bg-gold-accent"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center font-montserrat text-foreground">
                Ready to Relax?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center px-8 pb-8">
              <p className="text-base text-muted-foreground font-montserrat font-medium">
                Call now for instant booking. Our team responds within 5 minutes!
              </p>
              
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleCall}
                  variant="call"
                  size="lg"
                  className="w-full min-h-[56px]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 8884666814
                </Button>
                
                <Button 
                  onClick={handleWhatsApp}
                  variant="whatsapp"
                  size="lg"
                  className="w-full min-h-[56px]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-0 shadow-card rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground text-base font-montserrat">Open Daily</p>
                <p className="text-sm text-muted-foreground font-montserrat font-medium mt-1">9 AM - 10 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-card rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground text-base font-montserrat">Koramangala</p>
                <Button 
                  onClick={() => window.open("https://maps.app.goo.gl/x33CYXpKePF3YTCW7", "_blank")}
                  variant="link"
                  size="sm"
                  className="text-sm text-primary p-0 h-auto font-montserrat font-semibold mt-1"
                >
                  View Map →
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Offer Badge */}
          <div className="text-center bg-white rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-gold-accent" />
              <p className="text-primary font-bold text-lg font-montserrat">Spa Services from ₹1,999</p>
            </div>
            <p className="text-sm text-muted-foreground font-montserrat font-medium">
              Cross-gender therapy available with certified professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
