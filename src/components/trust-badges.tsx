import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Users, Clock, Award, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "500+ Happy Clients",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "100% Safe",
      subtitle: "Hygiene Certified",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Expert Therapists",
      subtitle: "Trained Professionals",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Open 7 Days",
      subtitle: "9 AM - 10 PM",
      color: "text-blue-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya M.",
      text: "Amazing experience! The Thai massage was exactly what I needed. Professional service and clean environment.",
      rating: 5,
      service: "Thai Massage"
    },
    {
      name: "Rahul S.",
      text: "Best spa in Koramangala! My wife and I had the couples package - absolutely fantastic. Highly recommend!",
      rating: 5,
      service: "Couples Package"
    },
    {
      name: "Sneha K.",
      text: "Great value for money. The deep tissue massage helped with my back pain. Will definitely come back!",
      rating: 5,
      service: "Deep Tissue"
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {badges.map((badge, index) => (
            <Card key={index} className="bg-background/50 border-primary/20 text-center">
              <CardContent className="p-4">
                <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
                <p className="font-bold text-foreground text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            What Our <span className="text-primary font-bold">Clients Say</span>
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary/10 border-primary/30">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Instant Booking</h3>
              <p className="text-sm text-muted-foreground">Call now for same-day appointments</p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/10 border-primary/30">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">International spa standards</p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/10 border-primary/30">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">100% Safe</h3>
              <p className="text-sm text-muted-foreground">Hygienic & professional service</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;