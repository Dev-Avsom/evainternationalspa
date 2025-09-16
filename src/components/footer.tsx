interface FooterProps {
  showCouplesPricing?: boolean;
}

const Footer = ({ showCouplesPricing = false }: FooterProps) => {
  return (
    <footer className="bg-spa-dark py-8 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {showCouplesPricing && (
            <div className="mb-6">
              <p className="text-primary font-bold text-lg mb-2">
                💕 Eva International Spa Couples Packages in Koramangala
              </p>
              <p className="text-accent font-semibold">
                Starting from ₹4,999/- | Call +91 88846 66814
              </p>
            </div>
          )}
          <p className="text-muted-foreground text-sm">
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