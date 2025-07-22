import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Users, TrendingUp, FileCheck } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Award,
      title: "10+ years of combined experience",
      description: "Proven track record in commercial and industrial cleaning"
    },
    {
      icon: TrendingUp,
      title: "98% customer retention rate",
      description: "Our clients trust us year after year"
    },
    {
      icon: Shield,
      title: "Modern equipment & safe products",
      description: "Latest technology and eco-friendly solutions"
    },
    {
      icon: Users,
      title: "Fully trained & police-cleared staff",
      description: "Professional, trustworthy, and reliable team"
    },
    {
      icon: FileCheck,
      title: "Monthly audits & KPI reports",
      description: "Transparent performance tracking and improvement"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Alux?
          </h2>
          <p className="text-xl text-primary mb-4">
            The Trusted Name in WA Cleaning Services
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over a decade of combined experience, Alux Facility Services is locally owned and committed to delivering excellence. 
            We proudly serve businesses such as Harvey Norman Osborne Park and Domayne Osborne Park.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client logos section */}
        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Trusted by Leading WA Businesses
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-lg font-semibold text-primary">Harvey Norman Osborne Park</div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="text-lg font-semibold text-primary">Domayne Osborne Park</div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="text-lg font-semibold text-primary">And Many More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;