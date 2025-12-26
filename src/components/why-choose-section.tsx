import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Leaf, Award, Clock, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Therapists",
      description: "Professionally trained and certified therapists",
      badge: "Certified"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "100% Hygienic",
      description: "Disposable accessories and sanitized spaces",
      badge: "Safe"
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Premium Products",
      description: "Natural oils and quality products only",
      badge: "Natural"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Private Rooms",
      description: "Comfortable private treatment areas",
      badge: "Premium"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Open Daily",
      description: "9 AM - 10 PM, 7 days a week",
      badge: "Flexible"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Top Rated",
      description: "4.8/5 rating with 5000+ clients",
      badge: "Trusted"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Why <span className="text-primary">Eva Spa</span>?
          </h2>
          <p className="text-sm text-muted-foreground font-montserrat font-light">
            Premium facilities with professional service
          </p>
        </div>

        {/* Compact Features Grid - White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border-0 shadow-card rounded-3xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-secondary rounded-2xl text-primary">
                    {feature.icon}
                  </div>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-accent/10 text-accent border-0 text-[10px] font-montserrat font-medium"
                >
                  {feature.badge}
                </Badge>
                
                <h3 className="text-sm font-semibold text-foreground mb-2 font-montserrat">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-muted-foreground font-montserrat font-light">
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
