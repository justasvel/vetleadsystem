import { Award, Heart, TrendingUp } from "lucide-react";

const stats = [
  { value: "50+", label: "Clinics Served" },
  { value: "340%", label: "Avg. Lead Increase" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80"
              alt="Veterinary team with happy pets"
              className="relative rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-prominent max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic">
                    "Vetleadsystem helped us increase new patient bookings by 280% in just 3 months!"
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-2">— Dr. Sarah M., Texas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Vetleadsystem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We Understand the{" "}
              <span className="text-primary">Veterinary Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Based in Lithuania with a dedicated focus on the US market, Vetleadsystem 
              was founded with a simple mission: to help veterinary clinic owners focus 
              on what they do best — caring for animals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We handle the complex world of digital marketing so you don't have to. 
              Our specialized approach means we understand the unique challenges 
              veterinary practices face in attracting and retaining pet-owning clients.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Veterinary Experts</h4>
                  <p className="text-sm text-muted-foreground">100% focused on vet clinics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Results-Driven</h4>
                  <p className="text-sm text-muted-foreground">Data-backed campaigns</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
