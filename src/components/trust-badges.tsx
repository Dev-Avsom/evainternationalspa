import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, UserCheck, Sparkles, Droplets, ShowerHead } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "Google Reviews",
      highlight: true
    },
    {
      icon: Shield,
      title: "100% Safe",
      subtitle: "Hygienic Space",
      highlight: false
    },
    {
      icon: UserCheck,
      title: "Certified",
      subtitle: "Therapists",
      highlight: false
    },
    {
      icon: Sparkles,
      title: "5000+",
      subtitle: "Happy Clients",
      highlight: true
    }
  ];

  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Certified Therapists",
      description: "All our therapists are professionally trained and certified"
    },
    {
      icon: Droplets,
      title: "Disposable Accessories",
      description: "Fresh disposable items used for every client"
    },
    {
      icon: ShowerHead,
      title: "Shower Facility",
      description: "Private shower rooms with premium amenities"
    }
  ];

  const testimonials = [
    {
      name: "Priya M.",
      text: "Amazing experience! Professional service and clean environment.",
      rating: 5,
      service: "Thai Massage"
    },
    {
      name: "Rahul S.",
      text: "Best spa in Koramangala! Highly recommend the couples package.",
      rating: 5,
      service: "Couples Spa"
    },
    {
      name: "Sneha K.",
      text: "Great value. The deep tissue massage helped my back pain.",
      rating: 5,
      service: "Deep Tissue"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Badges - Clean Grid with White Cards */}
        <div className="grid grid-cols-4 gap-5 mb-20">
          {badges.map((badge, index) => (
            <div key={index} className="text-center bg-card rounded-2xl p-6 shadow-card border border-border">
              <badge.icon className={`h-7 w-7 mx-auto mb-4 ${badge.highlight ? 'text-amber-500' : 'text-foreground'}`} />
              <p className="font-bold text-foreground text-sm font-montserrat">{badge.title}</p>
              <p className="text-xs text-muted-foreground font-montserrat font-medium mt-1">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Trust & Safety Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-montserrat">
            Your Safety is Our Priority
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl">
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="bg-secondary rounded-xl p-4 shrink-0">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base font-montserrat">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground font-montserrat font-medium mt-2">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials - Clean White Cards */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10 font-montserrat">
            What Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border shadow-card rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base mb-6 italic font-montserrat font-medium leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-foreground text-sm font-montserrat">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-montserrat font-medium">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
