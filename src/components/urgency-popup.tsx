import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift, Clock, MessageCircle } from "lucide-react";

const UrgencyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem("urgencyPopupShown");
    if (popupShown) {
      setHasBeenClosed(true);
      return;
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    sessionStorage.setItem("urgencyPopupShown", "true");
  };

  const handleClaim = () => {
    const message = "Hi! I want to book a spa session at ₹1,999 (20% off offer). Please confirm availability!";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
    handleClose();
  };

  if (!isVisible || hasBeenClosed) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-[100] animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] max-w-md w-full animate-scale-in">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 p-5 text-center relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-14 h-14 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat">
              Special Offer Just For You!
            </h3>
          </div>
          
          {/* Content */}
          <div className="p-5 md:p-6 text-center space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-montserrat line-through">
                ₹2,499
              </p>
              <p className="text-3xl md:text-4xl font-bold text-primary font-montserrat">
                ₹1,999 Only
              </p>
              <p className="text-muted-foreground font-montserrat">
                Save ₹500 on your first session
              </p>
            </div>
            
            {/* Urgency Timer */}
            <div className="flex items-center justify-center gap-2 text-destructive">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold font-montserrat">
                Today Only - Limited Slots Available
              </span>
            </div>
            
            {/* Benefits */}
            <div className="bg-muted/50 rounded-xl p-4 text-left space-y-2">
              <p className="text-sm text-foreground font-montserrat">
                ✓ Certified & trained therapists
              </p>
              <p className="text-sm text-foreground font-montserrat">
                ✓ 100% hygienic environment
              </p>
              <p className="text-sm text-foreground font-montserrat">
                ✓ Premium aromatherapy included
              </p>
            </div>
            
            {/* CTA */}
            <Button
              onClick={handleClaim}
              variant="whatsapp"
              size="lg"
              className="w-full h-14 text-base font-bold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Claim Offer on WhatsApp
            </Button>
            
            <p className="text-xs text-muted-foreground font-montserrat">
              No spam. Quick response guaranteed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrgencyPopup;
