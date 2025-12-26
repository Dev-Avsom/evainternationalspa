import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-dark text-white py-16 pb-32" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Safety Disclaimer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-14 text-center border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-gold-accent" aria-hidden="true" />
            <span className="font-bold text-white text-base font-montserrat">Professional Services Only</span>
          </div>
          <p className="text-sm text-white/80 max-w-xl mx-auto font-montserrat font-medium">
            We provide strictly professional therapeutic massage and spa services only. 
            All therapists are certified professionals trained in therapeutic techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-white mb-6 font-montserrat text-lg">Contact Us</h3>
            <address className="not-italic space-y-5 font-montserrat">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gold-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-white font-medium">+91 88846 66814</p>
                  <p className="text-sm text-white/70 font-medium">Available for calls & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gold-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-white font-medium">info@evainternationalspa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gold-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-white font-medium">Open Daily: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </address>
          </div>

          {/* Physical Address */}
          <div>
            <h3 className="font-bold text-white mb-6 font-montserrat text-lg">Our Location</h3>
            <address className="not-italic font-montserrat">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base text-white font-bold">Eva International Spa</p>
                  <p className="text-base text-white/80 font-medium mt-1">
                    No. 72, 1st Floor, 6th Cross Road,<br />
                    Koramangala 5th Block,<br />
                    Bengaluru, Karnataka 560095
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/x33CYXpKePF3YTCW7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-accent text-sm font-semibold hover:underline inline-block mt-3"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white mb-6 font-montserrat text-lg">Legal</h3>
            <nav aria-label="Legal links" className="font-montserrat">
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy-policy" className="text-base text-white/80 hover:text-gold-accent transition-colors font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-base text-white/80 hover:text-gold-accent transition-colors font-medium">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-base text-white/80 hover:text-gold-accent transition-colors font-medium">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-white/20 pt-10 text-center space-y-3 font-montserrat">
          <p className="text-sm text-white/70 font-medium">
            © {currentYear} Eva International Spa. All rights reserved.
          </p>
          <p className="text-sm text-white/70 font-medium">
            Premium Body Massage & Spa in Koramangala, Bengaluru
          </p>
          <p className="text-white/60 text-sm pt-2 font-medium">
            Designed and Marketing by{" "}
            <span className="text-gold-accent font-bold">Caasa Creative Labs</span>
            {" "}|{" "}
            <span className="text-white/70">Driven by Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
