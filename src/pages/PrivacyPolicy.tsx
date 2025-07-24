import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail, BookOpen, Database, Cookie, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Shield className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Privacy Policy
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
                <div className="flex items-start space-x-4 mb-6">
                  <Eye className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">Introduction</h2>
                    <p className="text-muted-foreground">
                      This Privacy Policy explains how we handle information when you use the{' '}
                      <a 
                        href="https://www.deepexity.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        deepexity
                      </a>{' '}
                      website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <BookOpen className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">Definitions</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-card-foreground">Service</p>
                        <p className="text-muted-foreground">refers to the website at https://www.deepexity.com.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">Company</p>
                        <p className="text-muted-foreground">("we", "us", or "our") refers to deepexity.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">Device</p>
                        <p className="text-muted-foreground">means any device used to access the Service.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">Usage Data</p>
                        <p className="text-muted-foreground">refers to technical data collected automatically, such as browser type, visit duration, or pages accessed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Commitment */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Lock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">Our Commitment</h2>
                    <p className="text-muted-foreground">
                      We respect your privacy and are committed to protecting the data you share with us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Collect */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Database className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">What We Collect</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          We do not collect personal information such as your name, email, address, or payment details.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          We may collect basic usage data, such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Browser type and version</li>
                          <li>Pages visited</li>
                          <li>Device type and operating system</li>
                          <li>Anonymous IP data (for technical purposes only)</li>
                        </ul>
                        <p className="text-muted-foreground mt-4">
                          This data is used strictly to improve service performance and security.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3">Project Data</h3>
                        <p className="text-muted-foreground mb-3 text-justify">
                          We only work with project-related data provided by clients for the purpose of delivering professional services. 
                          We do not use this data for any other purpose and do not share it with third parties.
                        </p>
                        <p className="text-muted-foreground">
                          Your project information is kept confidential and handled securely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Cookie className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">Cookies</h2>
                    <p className="text-muted-foreground text-justify">
                      Our Service may use minimal cookies to enhance your experience or remember basic settings. 
                      You can manage cookies through your browser.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Calendar className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">Changes</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                      with a new "Last updated" date.
                    </p>
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
                      If you have any questions about this Privacy Policy, please reach out to:
                    </p>
                    <a 
                      href="mailto:info@deepexity.com?subject=Privacy%20Policy%20Inquiry" 
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

export default PrivacyPolicy;