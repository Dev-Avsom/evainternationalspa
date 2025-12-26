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
    <section className="py-24 bg-background pb-36">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 font-montserrat">
            Book Now
          </h2>
        </div>

        <div className="max-w-lg mx-auto space-y-8">
          {/* Quick Contact Card */}
          <Card className="bg-foreground text-card border-0 shadow-luxury rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center font-montserrat">
                Ready to Relax?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center">
              <p className="text-base opacity-90 font-montserrat font-medium">
                Call now for instant booking. Our team responds within 5 minutes!
              </p>
              
              <div className="flex flex-col gap-5">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="w-full bg-card text-foreground hover:bg-card/90 font-bold rounded-full shadow-button min-h-[56px] font-montserrat text-base"
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
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card border border-border shadow-card rounded-2xl">
              <CardContent className="p-8 text-center">
                <Clock className="h-6 w-6 text-foreground mx-auto mb-4" />
                <p className="font-bold text-foreground text-base font-montserrat">Open Daily</p>
                <p className="text-sm text-muted-foreground font-montserrat font-medium mt-1">9 AM - 10 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border shadow-card rounded-2xl">
              <CardContent className="p-8 text-center">
                <MapPin className="h-6 w-6 text-foreground mx-auto mb-4" />
                <p className="font-bold text-foreground text-base font-montserrat">Koramangala</p>
                <Button 
                  onClick={() => window.open("https://maps.app.goo.gl/x33CYXpKePF3YTCW7", "_blank")}
                  variant="link"
                  size="sm"
                  className="text-sm text-foreground p-0 h-auto font-montserrat font-medium mt-1"
                >
                  View Map
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Offer Badge */}
          <div className="text-center bg-card rounded-2xl p-8 shadow-card border border-border">
            <p className="text-foreground font-bold text-lg font-montserrat">✨ Spa Services from ₹1,999</p>
            <p className="text-sm text-muted-foreground mt-3 font-montserrat font-medium">
              Cross-gender therapy available with certified professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
