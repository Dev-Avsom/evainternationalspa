import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Leaf, Award, Clock, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Therapists",
      description: "Our team of skilled professionals is trained in the latest techniques and committed to making your experience unforgettable.",
      badge: "20+ Years Experience"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Tranquil Environment",
      description: "We offer a peaceful, comfortable environment designed for complete relaxation with private treatment areas and luxury amenities.",
      badge: "Premium Facilities"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly Approach",
      description: "We are committed to sustainability using eco-friendly products, cruelty-free treatments, and reducing our carbon footprint.",
      badge: "100% Natural"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We use only the finest oils, products, and equipment to ensure you receive the highest quality spa experience.",
      badge: "Certified"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timing",
      description: "Open 7 days a week from 9 AM to 10 PM to accommodate your busy schedule and provide convenience.",
      badge: "Extended Hours"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Personalized Service",
      description: "Every treatment is customized to your specific needs and preferences for a truly personalized wellness experience.",
      badge: "Tailored Experience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">
            Why Choose <span className="text-primary font-bold">Eva Spa</span>?
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that sets us apart in luxury spa treatments and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-gold rounded-full text-spa-dark group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-primary/20 text-primary border-primary/30"
                >
                  {feature.badge}
                </Badge>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Years Experience", color: "text-primary" },
            { number: "10K+", label: "Happy Clients", color: "text-accent" },
            { number: "50+", label: "Treatments", color: "text-primary" },
            { number: "100%", label: "Satisfaction", color: "text-accent" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;