import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Talk
          </h2>
          <p className="text-xl text-primary mb-4">
            Reach out to experience the Alux standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center shadow-elegant hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg text-foreground">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">Call us today</p>
              <p className="font-semibold text-primary">(08) 1234 5678</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg text-foreground">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">Send us a message</p>
              <p className="font-semibold text-primary text-sm">info@aluxfacilityservices.com.au</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg text-foreground">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">Serving all of WA</p>
              <p className="font-semibold text-primary">Perth, Western Australia</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg text-foreground">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">Quick chat</p>
              <p className="font-semibold text-accent">Message us now</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
            <Button variant="premium" size="xl">
              Get A Quote
            </Button>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Find Us on the Map
          </h3>
          <div className="bg-gradient-primary rounded-lg h-64 flex items-center justify-center">
            <div className="text-primary-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm opacity-80">Serving all of Western Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;