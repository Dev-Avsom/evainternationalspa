import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import TrustBadges from "@/components/trust-badges";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";
import LimitedTimeOffer from "@/components/limited-time-offer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <LimitedTimeOffer />
      <div className="pt-16">
        <HeroSection />
      </div>
      <TrustBadges />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
