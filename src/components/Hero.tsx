import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Alux Facility Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-slide-up">
              <em>Setting the Benchmark in Industrial & Commercial Cleaning</em>
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-slide-up">
              Our expert cleaning team delivers reliable, high-quality cleaning solutions across Western Australia. 
              Let us take care of your cleaning and sanitisation needs with unmatched professionalism.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up">
              <Button variant="accent" size="xl">
                More About Us
              </Button>
              <Button variant="premium" size="xl">
                Our Services
              </Button>
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">10+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/80">Insured</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional Alux cleaning team in action" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 text-center w-full">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    Professional Excellence
                  </h3>
                  <p className="text-primary-foreground/90">
                    Serving Harvey Norman, Domayne, and leading WA businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;