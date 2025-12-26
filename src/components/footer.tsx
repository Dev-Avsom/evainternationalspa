import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-10 pb-20" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Safety Disclaimer */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-semibold text-foreground text-sm">Professional Services Only</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            We provide strictly professional therapeutic massage and spa services only. 
            All therapists are certified professionals trained in therapeutic techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground">+91 88846 66814</p>
                  <p className="text-xs text-muted-foreground">Available for calls & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground">info@evainternationalspa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground">Open Daily: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </address>
          </div>

          {/* Physical Address */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Our Location</h3>
            <address className="not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground font-medium">Eva International Spa</p>
                  <p className="text-sm text-muted-foreground">
                    No. 72, 1st Floor, 6th Cross Road,<br />
                    Koramangala 5th Block,<br />
                    Bengaluru, Karnataka 560095
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/x33CYXpKePF3YTCW7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-block mt-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-border pt-6 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Eva International Spa. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Premium Body Massage & Spa in Koramangala, Bengaluru
          </p>
          <p className="text-muted-foreground text-xs pt-2">
            Designed and Marketing by{" "}
            <span className="text-primary font-semibold">Caasa Creative Labs</span>
            {" "}|{" "}
            <span className="text-accent">Driven by Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;