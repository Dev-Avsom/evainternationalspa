import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a therapy session.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-14 bg-secondary pb-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 font-playfair">
            Book <span className="text-primary">Now</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto space-y-5">
          {/* Quick Contact Card */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-luxury rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center font-playfair">
                Ready to Relax?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-center">
              <p className="text-sm opacity-90 font-lato">
                Call now for instant booking. Our team responds within 5 minutes!
              </p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-button min-h-[52px]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 8884666814
                </Button>
                
                <Button 
                  onClick={handleWhatsApp}
                  variant="whatsapp"
                  size="lg"
                  className="w-full min-h-[52px]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-border shadow-card rounded-2xl">
              <CardContent className="p-5 text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm font-playfair">Open Daily</p>
                <p className="text-xs text-muted-foreground font-lato">9 AM - 10 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-border shadow-card rounded-2xl">
              <CardContent className="p-5 text-center">
                <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm font-playfair">Koramangala</p>
                <Button 
                  onClick={() => window.open("https://maps.app.goo.gl/x33CYXpKePF3YTCW7", "_blank")}
                  variant="link"
                  size="sm"
                  className="text-xs text-primary p-0 h-auto font-lato"
                >
                  View Map
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Offer Badge */}
          <div className="text-center bg-white rounded-2xl p-5 border border-border shadow-card">
            <p className="text-primary font-bold font-playfair">✨ Spa Services from ₹1,999</p>
            <p className="text-xs text-muted-foreground mt-1 font-lato">
              Cross-gender therapy available with certified professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
