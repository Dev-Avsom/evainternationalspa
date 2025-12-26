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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 font-montserrat">
            Why <span className="text-primary">Eva Spa</span>?
          </h2>
          <p className="text-base text-muted-foreground font-montserrat font-medium">
            Premium facilities with professional service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border border-border shadow-card rounded-2xl"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="p-4 bg-secondary rounded-xl text-primary">
                    {feature.icon}
                  </div>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="mb-4 bg-primary/10 text-primary border-0 text-xs font-montserrat font-semibold"
                >
                  {feature.badge}
                </Badge>
                
                <h3 className="text-base font-bold text-foreground mb-2 font-montserrat">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground font-montserrat font-medium">
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
