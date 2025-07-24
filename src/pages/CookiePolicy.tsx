import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Settings, Info, ExternalLink, Mail, List, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Cookie className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Cookies Policy
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
                <p className="text-muted-foreground">
                  This Cookies Policy explains how deepexity ("we", "us", or "our") uses cookies on{' '}
                  <a 
                    href="https://www.deepexity.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    deepexity.com
                  </a>{' '}
                  website.
                </p>
              </CardContent>
            </Card>

            {/* What Are Cookies */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Info className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">What Are Cookies?</h2>
                </div>
                <p className="text-muted-foreground">
                  Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, 
                  improve performance, and sometimes collect anonymous data for analytics.
                </p>
              </CardContent>
            </Card>

            {/* What Cookies We Use - Updated with List icon */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <List className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">What Cookies We Use</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  We may use the following types of cookies:
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-card-foreground mb-2">Essential cookies</h3>
                    <p className="text-muted-foreground">
                      Necessary for the website to function (e.g., navigation, performance).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-card-foreground mb-2">Preference cookies</h3>
                    <p className="text-muted-foreground">
                      Remember your settings (e.g., language or dark mode).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-card-foreground mb-2">Analytics cookies</h3>
                    <p className="text-muted-foreground">
                      (Only if used) Help us understand how visitors interact with the site (e.g., page views). 
                      We do not use any personally identifying data.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> We do not use advertising or third-party marketing cookies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Choices */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Settings className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">Your Choices</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You can set your browser to refuse some or all cookies or alert you when a cookie is set. 
                    However, some parts of the site may not work properly without them.
                  </p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <span>For more information on managing cookies, visit </span>
                    <a 
                      href="http://www.allaboutcookies.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      www.allaboutcookies.org
                    </a>
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
                    <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                    <p className="text-accent-foreground/90 mb-4">
                      If you have any questions about this Cookies Policy, please contact us:
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

export default CookiePolicy;