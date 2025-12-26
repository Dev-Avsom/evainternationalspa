import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Star } from "lucide-react";

const PricingSection = () => {
  const handleWhatsApp = (packageName: string) => {
    const message = `Hi! I'm interested in the ${packageName} package at Eva International Spa. Please share details.`;
    window.open(`https://wa.me/918884666814?text=${encodeURIComponent(message)}`, "_blank");
  };

  const packages = [
    {
      name: "Essential Relaxation",
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
    <section className="py-16 bg-background" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="pricing-heading" className="text-2xl md:text-4xl font-bold text-foreground mb-3 font-playfair">
            Pricing & <span className="text-primary">Packages</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-lato">
            Transparent pricing with no hidden charges. Premium body massage starting from just ₹1,999.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden rounded-2xl ${pkg.popular ? 'border-2 border-primary shadow-luxury' : 'border-border shadow-card'} bg-white`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-2xl flex items-center gap-1">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-1 font-playfair">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground font-lato">/ session</span>
                </div>
                <p className="text-xs text-muted-foreground mb-5 font-lato">{pkg.duration} treatment</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-lato">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleWhatsApp(pkg.name)}
                  variant={pkg.popular ? "call" : "outline"}
                  className="w-full min-h-[48px]"
                  aria-label={`Book ${pkg.name} package for ${pkg.price}`}
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Guarantee */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground font-lato">
            All prices inclusive of taxes. Custom packages available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
