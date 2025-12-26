import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background py-10 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: December 2024</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Services</h2>
            <p>
              Eva International Spa provides professional therapeutic massage and spa services. 
              All services are performed by trained and certified therapists.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Booking and Appointments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Appointments can be made via phone or WhatsApp</li>
              <li>A confirmation will be sent for all bookings</li>
              <li>Please arrive 10 minutes before your scheduled appointment</li>
              <li>Late arrivals may result in shortened treatment time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Cancellation Policy</h2>
            <p>
              We request at least 2 hours notice for cancellations. 
              Repeated no-shows may result in a requirement for advance payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Payment</h2>
            <p>
              Payment is due at the time of service. We accept cash, UPI, and major credit/debit cards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Professional Conduct</h2>
            <p>
              We provide strictly professional therapeutic services only. 
              Any inappropriate behavior or requests will result in immediate termination of service 
              without refund. We reserve the right to refuse service to anyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Health Considerations</h2>
            <p>
              Please inform our staff of any health conditions, allergies, or injuries before 
              your treatment. Certain conditions may require medical clearance before service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              <strong className="text-foreground">Eva International Spa</strong><br />
              Email: info@evainternationalspa.com<br />
              Phone: +91 88846 66814
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
