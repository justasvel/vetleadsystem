import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!smsConsent) {
      toast({
        title: "SMS Consent Required",
        description: "Please agree to receive SMS notifications to proceed.",
        variant: "destructive",
      });
      return;
    }

    // Basic validation
    if (!formData.name || !formData.clinicName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Request Submitted!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elevated text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your free audit request has been received. One of our veterinary 
          marketing specialists will contact you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", clinicName: "", email: "", phone: "" });
            setSmsConsent(false);
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elevated">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Get Your Free Marketing Audit
        </h3>
        <p className="text-muted-foreground">
          Discover how we can help your veterinary clinic attract more pet owners.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Your Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Dr. John Smith"
            value={formData.name}
            onChange={handleInputChange}
            className="h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="clinicName" className="text-foreground font-medium">
            Clinic Name *
          </Label>
          <Input
            id="clinicName"
            name="clinicName"
            type="text"
            placeholder="Happy Paws Veterinary Clinic"
            value={formData.clinicName}
            onChange={handleInputChange}
            className="h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Work Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@happypawsvet.com"
            value={formData.email}
            onChange={handleInputChange}
            className="h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            className="h-12"
            required
          />
          {/* SMS Disclosure - A2P Compliance */}
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            By providing your phone number, you agree to receive text messages from 
            VetLeadsystem regarding our services. Message and data rates may apply. 
            Message frequency varies. Reply STOP to opt-out.
          </p>
        </div>

        {/* SMS Consent Checkbox - A2P Compliance */}
        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="smsConsent"
            checked={smsConsent}
            onCheckedChange={(checked) => setSmsConsent(checked === true)}
            className="mt-0.5"
          />
          <Label 
            htmlFor="smsConsent" 
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
          >
            I agree to receive SMS notifications and marketing messages from VetLeadsystem.
          </Label>
        </div>

        <Button 
          type="submit" 
          variant="default" 
          size="lg" 
          className="w-full mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Request Free Audit
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
