import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, User, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 12;
  };

  const validateName = (name: string) => {
    return name.trim().length >= 2 && name.trim().length <= 50;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    if (!validateName(trimmedName)) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (2-50 characters)",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(trimmedPhone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead Generation',
        event_label: 'Quick Inquiry Form',
        value: 1,
      });
    }

    const sanitizedName = trimmedName.replace(/[<>'"]/g, '');
    const sanitizedPhone = trimmedPhone.replace(/[^0-9+\-\s]/g, '');
    const message = `Hi! I'm interested in booking a spa session.\n\nName: ${sanitizedName}\nPhone: ${sanitizedPhone}\n\nPlease contact me for booking.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
    
    setIsSubmitted(true);
    toast({
      title: "Request Sent!",
      description: "We'll contact you within 5 minutes",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background" aria-labelledby="form-success">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="bg-card border border-border shadow-card rounded-2xl">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" aria-hidden="true" />
              <h2 id="form-success" className="text-2xl font-bold text-foreground mb-4 font-montserrat">Thank You!</h2>
              <p className="text-muted-foreground font-montserrat font-medium">
                We have received your request. Our team will contact you within 5 minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" aria-labelledby="form-heading">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="bg-card border border-border shadow-card rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle id="form-heading" className="text-2xl text-center text-foreground font-montserrat">
              Quick <span className="text-primary">Booking</span>
            </CardTitle>
            <p className="text-base text-muted-foreground text-center font-montserrat font-medium">
              Get a callback within 5 minutes
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 h-14 min-h-[56px] rounded-full border-border font-montserrat font-medium text-base"
                    maxLength={50}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 h-14 min-h-[56px] rounded-full border-border font-montserrat font-medium text-base"
                    maxLength={12}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="call"
                className="w-full h-14 min-h-[56px] font-bold text-base"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Get Instant Callback
              </Button>
              
              <p className="text-xs text-muted-foreground text-center font-montserrat font-medium">
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
