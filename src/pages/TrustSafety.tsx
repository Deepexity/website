import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, CheckCircle, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrustSafety = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Shield className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Trust & Safety
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Last updated: July 21, 2025
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-3xl mx-auto">
              At deepexity, your trust is our priority. Whether you're sharing project details, reviewing past work, 
              or exploring potential collaboration, we are committed to providing a secure and professional environment.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Data Confidentiality */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Lock className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Data Confidentiality</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  We treat all project-related data with the highest level of confidentiality. Any files, instructions, 
                  or sensitive information shared with us during a project will be used solely for that project and never 
                  shared with third parties.
                </p>
              </CardContent>
            </Card>

            {/* Security Practices */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Shield className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Security Practices</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  While our website does not collect personal information or process payments, we follow industry-standard 
                  practices to maintain a secure browsing experience. We keep our systems updated and use trusted infrastructure 
                  to host and deliver the site.
                </p>
              </CardContent>
            </Card>

            {/* Ethical Conduct */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Ethical Conduct</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  We are committed to professionalism, honesty, and fairness. Every project is handled with care 
                  and respect for your goals, timelines, and requirements.
                </p>
              </CardContent>
            </Card>

            {/* No On-Site Transactions */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">No On-Site Transactions</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  All hiring, payment, and contracts are handled through external platforms or by direct agreement. 
                  This site is used only for showcasing past work, communicating, and presenting services.
                </p>
              </CardContent>
            </Card>

            {/* Our Commitment */}
            <Card className="shadow-soft bg-secondary/30">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-card-foreground">Our Commitment to You</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-card-foreground mb-2">Secure</h3>
                      <p className="text-sm text-muted-foreground">Your data is protected with industry-standard security measures</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-card-foreground mb-2">Reliable</h3>
                      <p className="text-sm text-muted-foreground">Professional service delivery you can count on</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-card-foreground mb-2">Trustworthy</h3>
                      <p className="text-sm text-muted-foreground">Transparent communication and ethical practices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-elegant bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Contact</h2>
                    <p className="text-accent-foreground/90 mb-4">
                      If you have any concerns about data handling or security, please don't hesitate to contact:
                    </p>
                    <a 
                      href="mailto:info@deepexity.com" 
                      className="font-semibold hover:underline"
                    >
                      Email: info@deepexity.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back Button */}
            <div className="pt-8">
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to previous page
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustSafety;