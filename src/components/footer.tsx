import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-16 pb-32" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Safety Disclaimer */}
        <div className="bg-secondary rounded-2xl p-8 mb-16 text-center border border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-foreground" aria-hidden="true" />
            <span className="font-bold text-foreground text-base font-montserrat">Professional Services Only</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-montserrat font-medium">
            We provide strictly professional therapeutic massage and spa services only. 
            All therapists are certified professionals trained in therapeutic techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-foreground mb-8 font-montserrat text-lg">Contact Us</h3>
            <address className="not-italic space-y-6 font-montserrat">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-foreground font-medium">+91 88846 66814</p>
                  <p className="text-sm text-muted-foreground font-medium">Available for calls & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-foreground font-medium">info@evainternationalspa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-foreground font-medium">Open Daily: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </address>
          </div>

          {/* Physical Address */}
          <div>
            <h3 className="font-bold text-foreground mb-8 font-montserrat text-lg">Our Location</h3>
            <address className="not-italic font-montserrat">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-foreground font-bold">Eva International Spa</p>
                  <p className="text-base text-muted-foreground font-medium mt-1">
                    No. 72, 1st Floor, 6th Cross Road,<br />
                    Koramangala 5th Block,<br />
                    Bengaluru, Karnataka 560095
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/x33CYXpKePF3YTCW7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground text-sm font-semibold hover:underline inline-block mt-3"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-foreground mb-8 font-montserrat text-lg">Legal</h3>
            <nav aria-label="Legal links" className="font-montserrat">
              <ul className="space-y-5">
                <li>
                  <Link to="/privacy-policy" className="text-base text-muted-foreground hover:text-foreground transition-colors font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-base text-muted-foreground hover:text-foreground transition-colors font-medium">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-base text-muted-foreground hover:text-foreground transition-colors font-medium">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-border pt-12 text-center space-y-4 font-montserrat">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} Eva International Spa. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            Premium Body Massage & Spa in Koramangala, Bengaluru
          </p>
          <p className="text-muted-foreground text-sm pt-3 font-medium">
            Designed and Marketing by{" "}
            <span className="text-foreground font-bold">Caasa Creative Labs</span>
            {" "}|{" "}
            <span className="text-muted-foreground">Driven by Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
