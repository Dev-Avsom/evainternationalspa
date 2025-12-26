import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

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
    console.log('Analytics tracking not available');
  }
};

const StickyCTA = () => {
  const handleCall = () => {
    trackEvent('click', 'CTA', 'Sticky Call Button');
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    trackEvent('click', 'CTA', 'Sticky WhatsApp Button');
    const message = "Hi! I'd like to book a therapy session at Eva International Spa.";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-top safe-area-bottom"
      aria-label="Quick contact"
      role="navigation"
    >
      <div className="flex gap-3 p-3">
        <Button
          onClick={handleCall}
          variant="call"
          className="flex-1 h-14 min-h-[56px] text-base gap-2"
          aria-label="Call Eva International Spa now at 8884666814"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>Call Now</span>
        </Button>
        
        <Button
          onClick={handleWhatsApp}
          variant="whatsapp"
          className="flex-1 h-14 min-h-[56px] text-base gap-2"
          aria-label="Contact Eva International Spa via WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span>WhatsApp</span>
        </Button>
      </div>
    </nav>
  );
};

export default StickyCTA;
