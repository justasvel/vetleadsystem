import { Target, Users, Mail, BarChart3, Megaphone, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "High-Performance Marketing Funnels",
    description: "Custom-built funnels designed specifically for veterinary clinics that convert website visitors into booked appointments.",
  },
  {
    icon: Users,
    title: "Pet Owner Lead Generation",
    description: "Targeted campaigns that reach pet owners in your local area actively searching for veterinary services.",
  },
  {
    icon: Mail,
    title: "Automated Outreach Programs",
    description: "Stay connected with pet owners through SMS and email campaigns for appointment reminders, promotions, and follow-ups.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive dashboards and monthly reports so you always know exactly how your marketing is performing.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising Management",
    description: "Expert management of Google Ads and Facebook campaigns optimized for veterinary clinic growth.",
  },
  {
    icon: Zap,
    title: "Reputation Management",
    description: "Build and maintain a stellar online reputation with automated review requests and response management.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Marketing Solutions Built for{" "}
            <span className="text-primary">Veterinary Clinics</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize exclusively in veterinary marketing. Our proven strategies 
            help clinics across the USA attract more pet owners and grow their practice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
