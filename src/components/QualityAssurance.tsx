import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Camera, TrendingUp, Users, FileText, Award } from "lucide-react";

const QualityAssurance = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality Assurance & Audits
          </h2>
          <p className="text-xl text-primary mb-4">
            We go beyond cleaning — we audit, improve, and train for excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Audit Process */}
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Audit Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Site audit with client</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive on-site assessment with stakeholders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Camera className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Reports with photos</h4>
                  <p className="text-muted-foreground text-sm">Detailed documentation with visual evidence</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Corrective actions noted</h4>
                  <p className="text-muted-foreground text-sm">Clear action plans for continuous improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review & Training */}
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Review & Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">KPI tracking</h4>
                  <p className="text-muted-foreground text-sm">Performance metrics and continuous monitoring</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Client records updated</h4>
                  <p className="text-muted-foreground text-sm">Transparent reporting and documentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ongoing staff retraining</h4>
                  <p className="text-muted-foreground text-sm">Continuous education to maintain standards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;