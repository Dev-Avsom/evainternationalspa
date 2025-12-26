import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
  return (
    <main className="min-h-screen bg-background py-10 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: December 2024</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Service Satisfaction</h2>
            <p>
              Your satisfaction is our priority. If you are not satisfied with your treatment, 
              please inform our staff immediately so we can address your concerns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Cancellation Refunds</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cancellations made 24+ hours in advance: Full refund for prepaid bookings</li>
              <li>Cancellations made 2-24 hours in advance: 50% refund</li>
              <li>Cancellations made less than 2 hours in advance: No refund</li>
              <li>No-shows: No refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Service Issues</h2>
            <p>
              If you experience any issues during your treatment that prevent completion, 
              we will offer a partial refund or a complimentary follow-up session at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Gift Cards and Packages</h2>
            <p>
              Gift cards and prepaid packages are non-refundable but are transferable. 
              They remain valid for 12 months from the date of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Refund Process</h2>
            <p>
              Approved refunds will be processed within 5-7 business days and credited 
              back to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact for Refunds</h2>
            <p>
              To request a refund, please contact us at:
            </p>
            <p className="mt-2">
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

export default RefundPolicy;
