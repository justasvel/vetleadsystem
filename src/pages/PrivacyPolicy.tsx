import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/">
            <Button variant="heroOutline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                VetLeadsystem ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website vetleadsystem.lt or use our marketing services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you fill out our contact form or request a free audit, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Name</li>
                <li>Clinic/Business Name</li>
                <li>Work Email Address</li>
                <li>Phone Number</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you access our website, we may automatically collect certain information 
                including your IP address, browser type, operating system, access times, and 
                pages viewed directly before and after accessing the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our marketing services and communications</li>
                <li>Send you marketing and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10 p-6 bg-secondary rounded-xl border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Mobile Information and SMS Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you provide your phone number and consent to receive SMS communications from us, 
                we may send you text messages regarding our services, appointment reminders, and 
                marketing communications.
              </p>
              <p className="text-foreground font-semibold leading-relaxed">
                No mobile information will be shared with third parties/affiliates for marketing/promotional 
                purposes. All other categories exclude text messaging originator opt-in data and consent; 
                this information will not be shared with any third parties.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may opt out of receiving SMS messages at any time by replying "STOP" to any 
                message you receive from us. For help, reply "HELP" to any message.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party 
                service providers who perform services on our behalf (e.g., email delivery, analytics).</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required 
                to comply with applicable law or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company 
                assets, or acquisition.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to request correction of inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt out of marketing communications</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices or content of those websites. We encourage you to review 
                the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-semibold">VetLeadsystem</p>
                <p className="text-muted-foreground">Vilnius, Lithuania</p>
                <p className="text-muted-foreground">Email: contact@vetleadsystem.lt</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} VetLeadsystem. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
