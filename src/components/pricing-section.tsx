import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Star, Sparkles } from "lucide-react";

const PricingSection = () => {
  const handleWhatsApp = (packageName: string) => {
    const message = `Hi! I'm interested in the ${packageName} package at Eva International Spa. Please share details.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const packages = [
    {
      name: "Essential Relaxation",
      originalPrice: "₹2,499",
      price: "₹1,999",
      duration: "60 mins",
      features: [
        "Choice of Swedish or Aroma Therapy",
        "Private treatment room",
        "Shower facility included",
        "Complimentary refreshments"
      ],
      popular: false
    },
    {
      name: "Premium Wellness",
      originalPrice: "₹3,749",
      price: "₹2,999",
      duration: "90 mins",
      features: [
        "Deep Tissue or Thai Massage",
        "Body scrub treatment",
        "Private shower & changing room",
        "Premium essential oils",
        "Extended relaxation time"
      ],
      popular: true
    },
    {
      name: "Couples Retreat",
      originalPrice: "₹6,249",
      price: "₹4,999",
      duration: "120 mins",
      features: [
        "Dual massage for two",
        "Jacuzzi session",
        "Private couple suite",
        "Champagne & chocolates",
        "Complimentary aromatherapy"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
            Transparent Pricing
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
            Pricing & <span className="text-primary">Packages</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto font-montserrat font-medium mt-4">
            No hidden charges. Premium body massage starting at just ₹1,999 (after discount).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden rounded-2xl hover-lift ${pkg.popular ? 'border-2 border-primary shadow-luxury bg-card' : 'border border-border shadow-card bg-card'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-center">
                  <span className="text-sm font-bold flex items-center justify-center gap-1.5 font-montserrat">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className={`p-8 ${pkg.popular ? 'pt-14' : ''}`}>
                <h3 className="font-bold text-foreground text-xl mb-3 font-montserrat">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground font-montserrat line-through mb-1">{pkg.originalPrice}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-xs text-muted-foreground font-montserrat font-medium">Starting at</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-primary font-montserrat">{pkg.price}</span>
                  <span className="text-xs text-green-600 font-semibold font-montserrat">(after discount)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 font-montserrat font-medium">{pkg.duration} treatment</p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground font-montserrat font-medium">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleWhatsApp(pkg.name)}
                  variant={pkg.popular ? "call" : "outline"}
                  className="w-full min-h-[52px]"
                  aria-label={`Book ${pkg.name} package for ${pkg.price}`}
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground font-montserrat font-medium">
            All prices inclusive of taxes. Custom packages available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
