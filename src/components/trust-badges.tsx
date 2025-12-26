import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, UserCheck, Sparkles, Droplets, ShowerHead } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "Google Reviews",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "100% Safe",
      subtitle: "Hygienic Space",
      color: "text-primary"
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
      color: "text-accent"
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Trust Badges - Clean Grid with White Cards */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {badges.map((badge, index) => (
            <div key={index} className="text-center bg-card rounded-3xl p-5 shadow-card">
              <badge.icon className={`h-6 w-6 mx-auto mb-3 ${badge.color}`} />
              <p className="font-bold text-foreground text-xs font-montserrat">{badge.title}</p>
              <p className="text-[10px] text-muted-foreground font-montserrat font-light">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Trust & Safety Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 font-montserrat">
            Your <span className="text-primary">Safety</span> is Our Priority
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-0 shadow-card rounded-3xl">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary rounded-2xl p-3 shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm font-montserrat">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground font-montserrat font-light mt-1">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials - Clean White Cards */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 font-montserrat">
            What <span className="text-primary">Clients Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-card rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 italic font-montserrat font-light leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-foreground text-sm font-montserrat">{testimonial.name}</p>
                    <p className="text-[10px] text-primary font-montserrat">{testimonial.service}</p>
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
