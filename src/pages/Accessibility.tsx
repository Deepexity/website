import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Globe,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Accessibility = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Globe icon */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Globe className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Accessibility Statement
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Last updated: July 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content - Card-based layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction Card */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-justify">
                  At deepexity, we are committed to ensuring digital accessibility for all users, 
                  including individuals with disabilities. We are continually improving the user 
                  experience for everyone and applying relevant accessibility standards.
                </p>
              </CardContent>
            </Card>

            {/* Our Commitment Card */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 text-justify">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                  wherever feasible. These guidelines explain how to make web content more accessible 
                  to people with a wide range of disabilities, including visual, auditory, cognitive, 
                  and motor impairments.
                </p>
                <p className="text-muted-foreground">
                  We are based in Québec, Canada, and strive to align with both international and 
                  local accessibility best practices.
                </p>
              </CardContent>
            </Card>

            {/* Ongoing Efforts Card */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <TrendingUp className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Ongoing Efforts
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">We actively work to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Ensure sufficient color contrast and legible typography</li>
                  <li>Make all images meaningful with alt text or decorative when appropriate</li>
                  <li>Structure content using semantic HTML for screen readers</li>
                  <li>Provide keyboard navigability throughout the website</li>
                  <li>Test with accessibility tools and user feedback to identify and resolve barriers</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitations Card */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent mt-1" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Limitations
                  </h2>
                </div>
                <p className="text-muted-foreground text-justify">
                  While we strive to meet accessibility standards, some content may not yet fully 
                  adhere to all guidelines. We welcome your feedback as we continue to improve.
                </p>
              </CardContent>
            </Card>

            {/* Feedback Card */}
            <Card className="shadow-elegant bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Feedback</h2>
                    <p className="text-accent-foreground/90 mb-4 text-justify">
                      If you experience any difficulty accessing content on our website, 
                      or if you have suggestions on how we can improve accessibility, please contact us:
                    </p>
                    <a 
                      href="mailto:support@deepexity.com" 
                      className="font-semibold hover:underline"
                    >
                      Email: support@deepexity.com
                    </a>
                    <p className="mt-4 text-accent-foreground/90">
                      We will do our best to respond promptly and address your concerns.
                    </p>
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

export default Accessibility;