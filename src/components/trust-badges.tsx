import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, UserCheck, Sparkles, Droplets, ShowerHead } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "Google Reviews",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "100% Safe",
      subtitle: "Hygienic Space",
      color: "text-green-500"
    },
    {
      icon: UserCheck,
      title: "Certified",
      subtitle: "Therapists",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "5000+",
      subtitle: "Happy Clients",
      color: "text-primary"
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
    <section className="py-10 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Trust Badges - Compact Grid */}
        <div className="grid grid-cols-4 gap-2 mb-10">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <badge.icon className={`h-6 w-6 mx-auto mb-1 ${badge.color}`} />
              <p className="font-bold text-foreground text-xs">{badge.title}</p>
              <p className="text-[10px] text-muted-foreground">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Trust & Safety Section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
            Your <span className="text-primary">Safety</span> is Our Priority
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials - Compact */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-4">
            What <span className="text-primary">Clients Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs mb-2 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-[10px] text-primary">{testimonial.service}</p>
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
