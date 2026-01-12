import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl text-background">VetLeadsystem</span>
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              High-performance marketing solutions exclusively for veterinary clinics 
              in the United States. We help you grow while you focus on animal care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-background/70 hover:text-background transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-background/70 hover:text-background transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-background/70 hover:text-background transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-background font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/privacy-policy" 
                className="text-background/70 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-background/70 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-background/70 text-sm">
                © {new Date().getFullYear()} VetLeadsystem. All rights reserved.
              </p>
              <p className="text-background/50 text-sm mt-1">
                VetLeadsystem is operated by Justinas Velicka
              </p>
              <p className="text-background/50 text-sm mt-1">
                Krokuvos g. 60-33, 09306, Vilnius, Lithuania | contact@vetleadsystem.lt
              </p>
            </div>
            <p className="text-background/50 text-sm">
              Helping US veterinary clinics grow since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
