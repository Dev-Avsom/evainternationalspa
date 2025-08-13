import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import ContactSection from "@/components/contact-section";
import WhatsAppFloat from "@/components/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
