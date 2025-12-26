import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-14 pb-28" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Safety Disclaimer */}
        <div className="bg-secondary rounded-3xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-semibold text-foreground text-sm font-montserrat">Professional Services Only</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto font-montserrat font-light">
            We provide strictly professional therapeutic massage and spa services only. 
            All therapists are certified professionals trained in therapeutic techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-foreground mb-6 font-montserrat">Contact Us</h3>
            <address className="not-italic space-y-5 font-montserrat">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground">+91 88846 66814</p>
                  <p className="text-xs text-muted-foreground font-light">Available for calls & WhatsApp</p>
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
            <h3 className="font-bold text-foreground mb-6 font-montserrat">Our Location</h3>
            <address className="not-italic font-montserrat">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-foreground font-medium">Eva International Spa</p>
                  <p className="text-sm text-muted-foreground font-light">
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
            <h3 className="font-bold text-foreground mb-6 font-montserrat">Legal</h3>
            <nav aria-label="Legal links" className="font-montserrat">
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-border pt-10 text-center space-y-3 font-montserrat">
          <p className="text-xs text-muted-foreground font-light">
            © {currentYear} Eva International Spa. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-light">
            Premium Body Massage & Spa in Koramangala, Bengaluru
          </p>
          <p className="text-muted-foreground text-xs pt-2 font-light">
            Designed and Marketing by{" "}
            <span className="text-primary font-medium">Caasa Creative Labs</span>
            {" "}|{" "}
            <span className="text-accent">Driven by Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
