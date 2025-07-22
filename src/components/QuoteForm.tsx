import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const QuoteForm = () => {
  const [services, setServices] = useState<string[]>([]);

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setServices([...services, service]);
    } else {
      setServices(services.filter(s => s !== service));
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get A Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience professional cleaning services? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center text-primary">Request Your Free Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="(08) 1234 5678" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Select State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wa">Western Australia</SelectItem>
                      <SelectItem value="nt">Northern Territory</SelectItem>
                      <SelectItem value="sa">South Australia</SelectItem>
                      <SelectItem value="qld">Queensland</SelectItem>
                      <SelectItem value="nsw">New South Wales</SelectItem>
                      <SelectItem value="vic">Victoria</SelectItem>
                      <SelectItem value="tas">Tasmania</SelectItem>
                      <SelectItem value="act">ACT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Select Your Services</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Office Cleaning",
                    "Industrial & Warehouse Cleaning",
                    "Commercial & Retail Spaces",
                    "Custom Sanitisation & Deep Cleans",
                    "Eco-Friendly Cleaning Solutions",
                    "Construction Site Cleaning",
                    "Food & Abattoir Cleaning",
                    "Hospitality Cleaning"
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                      />
                      <Label htmlFor={service} className="text-sm font-normal">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea 
                  id="details" 
                  placeholder="Please provide details about your cleaning requirements, building size, frequency needed, and any specific requests..."
                  rows={4}
                />
              </div>

              <div className="text-center">
                <Button variant="hero" size="xl" type="submit" className="w-full md:w-auto">
                  Submit Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteForm;