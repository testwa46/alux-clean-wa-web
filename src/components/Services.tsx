import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Factory, ShoppingCart, Droplets, Leaf } from "lucide-react";

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