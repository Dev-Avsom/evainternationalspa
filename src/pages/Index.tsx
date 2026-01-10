import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import TrustBadges from "@/components/trust-badges";
import LeadForm from "@/components/lead-form";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";
import UrgencyPopup from "@/components/urgency-popup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <WhyChooseSection />
      <LeadForm />
      <ContactSection />
      <Footer />
      <StickyCTA />
      <UrgencyPopup />
    </div>
  );
};

export default Index;