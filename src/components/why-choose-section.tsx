import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Leaf, Award, Clock, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Therapists",
      description: "Professionally trained and certified therapists",
      badge: "Certified",
      color: "primary"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Hygienic",
      description: "Disposable accessories and sanitized spaces",
      badge: "Safe",
      color: "primary"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Premium Products",
      description: "Natural oils and quality products only",
      badge: "Natural",
      color: "gold"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Private Rooms",
      description: "Comfortable private treatment areas",
      badge: "Premium",
      color: "gold"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Open Daily",
      description: "9 AM - 10 PM, 7 days a week",
      badge: "Flexible",
      color: "primary"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Top Rated",
      description: "4.8/5 rating with 5000+ clients",
      badge: "Trusted",
      color: "gold"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-montserrat mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
            Why <span className="text-primary">Eva Spa</span>?
          </h2>
          <p className="text-base text-muted-foreground font-montserrat font-medium mt-4">
            Premium facilities with professional service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border border-border shadow-card rounded-2xl hover-lift group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-xl transition-colors duration-300 ${feature.color === 'gold' ? 'bg-gold-accent/10 group-hover:bg-gold-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
                    <div className={feature.color === 'gold' ? 'text-gold-accent' : 'text-primary'}>
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <Badge 
                  className={`mb-3 border-0 text-xs font-montserrat font-bold ${feature.color === 'gold' ? 'bg-gold-accent/10 text-gold-accent' : 'bg-primary/10 text-primary'}`}
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
