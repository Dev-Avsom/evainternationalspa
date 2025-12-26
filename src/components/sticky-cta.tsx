import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

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
    window.open("https://wa.me/918884666814?text=Hi! I'd like to book a therapy session at Eva International Spa.", "_blank");
  };

  return (
    <>
      {/* Sticky Bottom Bar - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-2xl border-t border-border">
        <div className="flex">
          {/* Call Now Button - Left Half */}
          <Button
            onClick={handleCall}
            className="flex-1 h-14 rounded-none bg-green-600 hover:bg-green-700 text-white font-bold text-base gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
          
          {/* WhatsApp Button - Right Half */}
          <Button
            onClick={handleWhatsApp}
            className="flex-1 h-14 rounded-none bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
