import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Leaf, Award, Clock, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Therapists",
      description: "Professionally trained and certified therapists",
      badge: "Certified"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Hygienic",
      description: "Disposable accessories and sanitized spaces",
      badge: "Safe"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Premium Products",
      description: "Natural oils and quality products only",
      badge: "Natural"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Private Rooms",
      description: "Comfortable private treatment areas",
      badge: "Premium"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Open Daily",
      description: "9 AM - 10 PM, 7 days a week",
      badge: "Flexible"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Top Rated",
      description: "4.8/5 rating with 5000+ clients",
      badge: "Trusted"
    }
  ];

  return (
    <section className="py-10 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Why <span className="text-primary">Eva Spa</span>?
          </h2>
          <p className="text-sm text-muted-foreground">
            Premium facilities with professional service
          </p>
        </div>

        {/* Compact Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <div className="p-2 bg-primary/20 rounded-full text-primary">
                    {feature.icon}
                  </div>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="mb-2 bg-primary/10 text-primary border-0 text-[10px]"
                >
                  {feature.badge}
                </Badge>
                
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
