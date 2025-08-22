import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    // WhatsApp number will be provided later  
    window.open("https://wa.me/918884666814?text=Hi! I would like to book a spa appointment at Eva International Spa.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="h-16 w-16 md:h-14 md:w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="h-8 w-8 md:h-7 md:w-7" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-spa-dark text-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppFloat;