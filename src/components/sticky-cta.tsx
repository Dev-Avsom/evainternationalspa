import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, X, User, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Analytics tracking function
const trackEvent = (eventName: string, category: string, label: string, value?: number) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    // Analytics tracking is optional, don't break the app
    console.log('Analytics tracking not available');
  }
};

const StickyCTA = () => {
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const { toast } = useToast();

  const handleCall = () => {
    // Track click for analytics
    trackEvent('click', 'CTA', 'Sticky Call Button');
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    // Track click for analytics
    trackEvent('click', 'CTA', 'Sticky WhatsApp Button');
    window.open("https://wa.me/918884666814?text=Hi! I'm interested in booking a spa appointment. Please share details.", "_blank");
  };

  const handleQuickInquiry = () => {
    setShowQuickForm(true);
    // Track form open
    trackEvent('form_start', 'Lead Generation', 'Quick Inquiry Form Opened');
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill all fields",
        description: "Name and phone number are required",
        variant: "destructive",
      });
      return;
    }

    // Track form submission
    trackEvent('generate_lead', 'Lead Generation', 'Quick Inquiry Form Submitted', 1);

    // Send to WhatsApp with form data
    const message = `Hi! I'm interested in your spa services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nPlease contact me for booking.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Inquiry Sent!",
      description: "We'll contact you within 30 minutes",
    });
    
    setShowQuickForm(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <>
      {/* Floating Action Buttons - Mobile & Desktop */}
      <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3">
        <Button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white text-spa-dark shadow-luxury border-t-2 border-primary">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-bold text-lg">Book Now - Starting ₹1,999</p>
              <p className="text-sm opacity-80">Limited Time Offer!</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleQuickInquiry}
                variant="secondary"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-foreground/20 hidden sm:flex"
              >
                <User className="mr-2 h-4 w-4" />
                Quick Inquiry
              </Button>
              <Button
                onClick={handleCall}
                variant="secondary"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-foreground/20"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Inquiry Form Modal */}
      {showQuickForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-background border-primary/20">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-foreground">Quick Inquiry</h3>
                <Button
                  onClick={() => setShowQuickForm(false)}
                  variant="ghost"
                  size="icon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-primary/30"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-primary/30"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-gold text-spa-dark hover:opacity-90"
                  size="lg"
                >
                  Send Inquiry via WhatsApp
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 30 minutes!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default StickyCTA;