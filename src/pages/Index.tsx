import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import WhyChooseSection from "@/components/why-choose-section";
import TrustBadges from "@/components/trust-badges";
import LeadForm from "@/components/lead-form";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <PricingSection />
      <WhyChooseSection />
      <LeadForm />
      <ContactSection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;