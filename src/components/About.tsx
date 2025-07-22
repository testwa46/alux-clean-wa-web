import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Handshake } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Alux Facility Services
          </h2>
          <p className="text-xl text-primary mb-6">
            Big Enough to Know, Small Enough to Care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Alux Facility Services is a privately owned commercial and industrial cleaning company 
              operating throughout Western Australia. With over 10 years of combined experience, our 
              management team understands what it takes to consistently deliver high-quality service 
              across a variety of environments.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We aim to support the WA cleaning industry through sustainable growth, job creation, 
              and community development. Our approach is built on trust, performance, and lasting partnerships.
            </p>
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-6xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-xl text-primary-foreground/90 mb-4">Customer Retention Rate</div>
              <p className="text-primary-foreground/80">
                We don't just aim to win your business — we aim to keep it.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Values, Commitment */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-elegant">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Our mission is to provide cutting-edge cleaning services in both industrial and 
                commercial settings, setting the benchmark for performance, systems, and training."
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We offer a turn-key solution coupled with consistently superior service that 
                exceeds customer expectations through trust, performance, and lasting partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We handle all cleaning responsibilities so your team can enjoy a clean, safe, 
                and productive environment — without having to manage cleaners.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Management & Communication */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Management & Communication
          </h3>
          <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
            We offer direct lines of communication between clients and management. Our transparent 
            and responsive structure ensures fast resolution of issues and ongoing quality control.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-semibold text-foreground mb-2">On-Site Communication Book</div>
              <div className="text-sm text-muted-foreground">Real-time feedback system</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-2">Regular Site Inspections</div>
              <div className="text-sm text-muted-foreground">Weekly or monthly reviews</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-2">Resource Access</div>
              <div className="text-sm text-muted-foreground">Service logs and documentation</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground mb-2">Real-Time Requests</div>
              <div className="text-sm text-muted-foreground">Extra work and feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;