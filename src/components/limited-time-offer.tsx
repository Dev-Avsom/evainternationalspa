import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

interface LimitedTimeOfferProps {
  showCouplesOffer?: boolean;
}

const LimitedTimeOffer = ({ showCouplesOffer = false }: LimitedTimeOfferProps) => {
  const handleCall = () => {
    window.open("tel:+918884666814", "_self");
  };

  const handleWhatsApp = () => {
    const message = showCouplesOffer 
      ? "Hi! I'm interested in the limited time couples package offer at ₹4,999/-"
      : "Hi! I'm interested in your limited time spa offer!";
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-accent to-primary backdrop-blur-sm border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Clock className="h-5 w-5 text-spa-dark animate-pulse" />
            <div>
              {showCouplesOffer ? (
                <>
                  <p className="text-spa-dark font-bold text-sm md:text-base">
                    💕 LIMITED TIME: Eva International Spa Couples Package
                  </p>
                  <p className="text-spa-dark/80 text-xs md:text-sm">
                    Special Couples Spa Experience in Koramangala - Only ₹4,999/-
                  </p>
                </>
              ) : (
                <>
                  <p className="text-spa-dark font-bold text-sm md:text-base">
                    ⚡ LIMITED TIME OFFER: Eva International Spa
                  </p>
                  <p className="text-spa-dark/80 text-xs md:text-sm">
                    Book Now & Save Big on Premium Spa Services in Koramangala
                  </p>
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-3">
            <Button 
              onClick={handleCall}
              variant="hero"
              size="sm"
              className="bg-spa-dark text-primary hover:bg-spa-dark/90 text-xs md:text-sm px-3 md:px-4"
            >
              <Phone className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </Button>
            <Button 
              onClick={handleWhatsApp}
              variant="luxury"
              size="sm"
              className="text-xs md:text-sm px-3 md:px-4"
            >
              <MessageCircle className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;