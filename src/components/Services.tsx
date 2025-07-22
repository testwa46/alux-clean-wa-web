import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Factory, ShoppingCart, Droplets, Leaf } from "lucide-react";
import cleanOfficeImage from "@/assets/clean-office-space.jpg";
import industrialCleaningImage from "@/assets/industrial-cleaning.jpg";
import cleaningEquipmentImage from "@/assets/cleaning-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Office Cleaning",
      description: "Professional office cleaning services to maintain a productive work environment."
    },
    {
      icon: Factory,
      title: "Industrial & Warehouse Cleaning",
      description: "Specialized cleaning for industrial facilities and large warehouse spaces."
    },
    {
      icon: ShoppingCart,
      title: "Commercial & Retail Spaces",
      description: "Comprehensive cleaning solutions for retail stores and commercial properties."
    },
    {
      icon: Droplets,
      title: "Custom Sanitisation & Deep Cleans",
      description: "Thorough sanitisation and deep cleaning services for any facility."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning Solutions",
      description: "Environmentally responsible cleaning with certified safe products."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services Include
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your specific needs across Western Australia.
          </p>
        </div>

        {/* Service showcase images */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img 
              src={cleanOfficeImage} 
              alt="Clean professional office space" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Office Cleaning</h3>
                <p className="text-primary-foreground/90 text-sm">Professional office environments</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img 
              src={industrialCleaningImage} 
              alt="Industrial warehouse cleaning" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Industrial Cleaning</h3>
                <p className="text-primary-foreground/90 text-sm">Large-scale industrial facilities</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img 
              src={cleaningEquipmentImage} 
              alt="Professional cleaning equipment" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Professional Equipment</h3>
                <p className="text-primary-foreground/90 text-sm">State-of-the-art cleaning tools</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg">
              Explore All Services
            </Button>
            <Button variant="hero" size="lg">
              Request an Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;