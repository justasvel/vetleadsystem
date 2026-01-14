import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Vetleadsystem website (vetleadsystem.lt) and services, 
                you agree to be bound by these Terms of Service. If you disagree with any part of 
                these terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vetleadsystem provides digital marketing services specifically designed for 
                veterinary clinics in the United States. Our services include, but are not limited 
                to, marketing funnel creation, paid advertising management, and 
                outreach programs to pet owners.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>
            </section>

            <section className="mb-10 p-6 bg-secondary rounded-xl border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. SMS Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your phone number and consenting to receive SMS communications, you 
                understand and agree to the following:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
                <li>You will receive text messages from Vetleadsystem regarding our services, 
                updates, and marketing communications.</li>
                <li>Message and data rates may apply depending on your carrier and plan.</li>
                <li>Message frequency varies based on your interactions with our services.</li>
              </ul>
              <div className="bg-card p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Opting Out of SMS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>To stop receiving SMS messages:</strong> Reply <strong>STOP</strong> to 
                  any message you receive from us. You will receive a confirmation message and will 
                  no longer receive SMS communications from Vetleadsystem.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>For help with SMS:</strong> Reply <strong>HELP</strong> to any message 
                  to receive assistance or contact us at contact@vetleadsystem.lt.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Vetleadsystem website, including its content, features, and functionality, is 
                owned by Vetleadsystem and is protected by international copyright, trademark, and 
                other intellectual property laws. You may not reproduce, distribute, modify, or 
                create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" and "as available" without any warranties of any 
                kind, either express or implied. We do not guarantee that our services will be 
                uninterrupted, secure, or error-free. Results from our marketing services may vary 
                and are not guaranteed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Vetleadsystem shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but 
                not limited to loss of profits, data, or other intangible losses, resulting from 
                your use of our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Vetleadsystem and its officers, 
                directors, employees, and agents from any claims, damages, losses, liabilities, 
                and expenses (including attorney's fees) arising out of your use of our services 
                or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the 
                Republic of Lithuania, without regard to its conflict of law provisions. Any 
                disputes arising under these Terms shall be resolved in the courts of Lithuania.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of 
                significant changes by posting the new Terms on our website and updating the "Last 
                updated" date. Your continued use of our services after such changes constitutes 
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that 
                provision shall be limited or eliminated to the minimum extent necessary so that 
                these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-semibold">Vetleadsystem</p>
                <p className="text-muted-foreground">Operated by Justinas Velicka</p>
                <p className="text-muted-foreground">Krokuvos g. 60-33, 09306, Vilnius, Lithuania</p>
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
            © {new Date().getFullYear()} Vetleadsystem. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
