import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918884666814?text=Hi! I'd like to book a therapy session.", "_blank");
  };

  return (
    <section className="py-10 bg-background pb-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Book <span className="text-primary">Now</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto space-y-4">
          {/* Quick Contact Card */}
          <Card className="bg-gradient-gold text-primary-foreground border-0 shadow-luxury">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center">
                Ready to Relax?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-sm">
                Call now for instant booking. Our team responds within 5 minutes!
              </p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 font-bold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 8884666814
                </Button>
                
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-[#25D366] text-white hover:bg-[#20BD5A] font-bold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm">Open Daily</p>
                <p className="text-xs text-muted-foreground">9 AM - 10 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 text-center">
                <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm">Koramangala</p>
                <Button 
                  onClick={() => window.open("https://maps.app.goo.gl/x33CYXpKePF3YTCW7", "_blank")}
                  variant="link"
                  size="sm"
                  className="text-xs text-primary p-0 h-auto"
                >
                  View Map
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Offer Badge */}
          <div className="text-center bg-card/50 rounded-lg p-4 border border-primary/20">
            <p className="text-primary font-bold">✨ Spa Services from ₹1,999</p>
            <p className="text-xs text-muted-foreground mt-1">
              Cross-gender therapy available with certified professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
