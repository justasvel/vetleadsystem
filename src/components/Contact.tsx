import ContactForm from "./ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Side */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Grow Your{" "}
              <span className="text-primary">Veterinary Practice?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Schedule your free marketing audit today. We'll analyze your current 
              online presence and show you exactly how we can help bring more pet 
              owners through your doors.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <a 
                    href="mailto:contact@vetleadsystem.lt" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@vetleadsystem.lt
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Focus</h4>
                  <p className="text-muted-foreground">
                    Serving veterinary clinics across the United States
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-lg"
                    >
                      🐕
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">Join 50+ Clinics</p>
                  <p className="text-sm text-muted-foreground">Already growing with us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="animate-fade-in-delay">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
