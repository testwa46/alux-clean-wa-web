import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Recycle, Shield } from "lucide-react";
import ecoProductsImage from "@/assets/eco-products.jpg";

const EcoFriendly = () => {
  const ecoFeatures = [
    {
      icon: Leaf,
      title: "Biodegradable Products",
      description: "All cleaning products are biodegradable and certified safe for the environment"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Water-saving equipment and techniques to minimize environmental impact"
    },
    {
      icon: Shield,
      title: "Safe for People & Planet",
      description: "MSDS certified products that protect both human health and the environment"
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Proper waste management and chemical disposal practices"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eco-Friendly Commitment
          </h2>
          <p className="text-xl text-primary mb-6">
            Alux is dedicated to protecting the environment.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use biodegradable and certified-safe products to ensure safety for people and the planet. 
            Our cleaning equipment and chemicals are managed responsibly with full MSDS provided on-site.
          </p>
        </div>

        {/* Eco products showcase */}
        <div className="mb-12 relative rounded-2xl overflow-hidden shadow-elegant">
          <img 
            src={ecoProductsImage} 
            alt="Eco-friendly cleaning products" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Certified Eco-Friendly Products
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                All our cleaning products are biodegradable and safe for people and the environment
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecoFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental commitment statement */}
        <div className="mt-16 bg-gradient-accent rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            100% Committed to Reducing Our Carbon Footprint
          </h3>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto">
            We choose modern, efficient cleaning equipment and promote responsible chemical handling 
            with complete MSDS documentation to support clean waterways and environmental protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;