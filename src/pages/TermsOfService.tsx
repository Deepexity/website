import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, Users, Lock, AlertTriangle, Mail, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <FileText className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Terms of Service
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Last updated: July 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-justify">
                  These Terms of Service ("Terms") govern your use of the{' '}
                  <a 
                    href="https://www.deepexity.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    deepexity
                  </a>{' '}
                  website. By accessing or using the Site, you agree to be bound by these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Purpose of the Site */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Purpose of the Site</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  This site is intended to showcase the professional services, portfolio, and qualifications of a freelance provider. 
                  It may contain project information, contact details, and work samples. The Site does not offer direct purchasing, 
                  account creation, or payment processing.
                </p>
              </CardContent>
            </Card>

            {/* Use of Content */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Shield className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Use of Content</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  All content on the Site, including text, images, and code samples, is the property of the site owner unless otherwise stated. 
                  You may not copy, reuse, or distribute any content without prior written permission.
                </p>
              </CardContent>
            </Card>

            {/* No Direct Hiring or Transactions */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">No Direct Hiring or Transactions</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  This site is not a platform for direct hiring or payments. All client relationships, project agreements, 
                  and transactions are handled externally and governed by the terms agreed upon between the freelancer and the client.
                </p>
              </CardContent>
            </Card>

            {/* Confidentiality of Projects */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Lock className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Confidentiality of Projects</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  Any project data or client information submitted or shared with the freelancer through external communication 
                  will be kept confidential. The Site itself does not collect or store such data.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Scale className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Limitation of Liability</h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  The site owner is not responsible for any damages resulting from the use of or inability to use the Site. 
                  The content is provided "as is" without warranty of any kind.
                </p>
              </CardContent>
            </Card>

            {/* Changes to These Terms */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <FileText className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Changes to These Terms</h2>
                </div>
                <p className="text-muted-foreground">
                  We may update these Terms from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                </p>
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
                      If you have any questions about these Terms, please contact:
                    </p>
                    <a 
                      href="mailto:info@deepexity.com?subject=Terms%20of%20Service%20Inquiry" 
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

export default TermsOfService;