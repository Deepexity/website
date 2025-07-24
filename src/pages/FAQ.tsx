import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Users, Briefcase, Shield, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Find answers to common questions about Deepexity
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* General Questions */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <HelpCircle className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">General Questions</h2>
                  </div>
                </div>
                <div className="space-y-8 pl-1">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">What is Deepexity?</h3>
                    <p className="text-muted-foreground text-justify">
                      Deepexity is a trusted platform connecting innovative companies with talented professionals worldwide. 
                      We serve as a gateway for clients to access unlimited talent while ensuring project quality and security.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">How does Deepexity differ from other freelancing platforms?</h3>
                    <p className="text-muted-foreground text-justify">
                     Unlike traditional platforms, Deepexity focuses on being a trusted intermediary. We don't publicly list projects but instead carefully 
                     match clients with our vetted network of freelancers through our Discord community. Before hiring, we facilitate a meeting to confirm 
                     the freelancer has the necessary skills for your project.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">Why should I trust Deepexity with my projects?</h3>
                    <p className="text-muted-foreground text-justify">
                      We maintain a carefully curated network of professionals, implement quality control through project leaders, 
                      and focus on building long-term relationships rather than transactional engagements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Clients */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Briefcase className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">For Clients</h2>
                  </div>
                </div>
                <div className="space-y-8 pl-1">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">What types of projects do you handle?</h3>
                    <p className="text-muted-foreground text-justify">
                      We specialize in connecting clients with professionals for web development, design, marketing, 
                      content creation, and various technical projects sourced from platforms like Upwork and others.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">How are project quality and deadlines ensured?</h3>
                    <p className="text-muted-foreground text-justify">
                      Each project is assigned to a dedicated leader from our team who oversees the work, ensures quality standards, 
                      and maintains communication between clients and freelancers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">What if I'm not satisfied with the work?</h3>
                    <p className="text-muted-foreground text-justify">
                      We have a revision policy and quality assurance process. If work doesn't meet agreed standards, 
                      we'll arrange for revisions or reassign the project to another qualified professional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Freelancers */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">For Freelancers</h2>
                  </div>
                </div>
                <div className="space-y-8 pl-1">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">How are projects assigned to freelancers?</h3>
                    <p className="text-muted-foreground text-justify">
                      Based on your skills, availability, and past performance, our project leaders will match you with suitable 
                      opportunities from our client network.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">What support do freelancers receive?</h3>
                    <p className="text-muted-foreground text-justify">
                      Each project has a dedicated leader who provides guidance, handles client communication, and ensures 
                      smooth project execution. We also offer resources and community support in our Discord.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">How are payments handled?</h3>
                    <p className="text-muted-foreground text-justify">
                      All official project agreements and payments are managed through partnered platforms. This site is designed 
                      for showcasing our services and connecting with potential clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Trust */}
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Security & Trust</h2>
                  </div>
                </div>
                <div className="space-y-8 pl-1">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">How does Deepexity ensure project confidentiality?</h3>
                    <p className="text-muted-foreground text-justify">
                      We use secure communication channels, NDAs when required, and limit project information only to 
                      directly involved team members. Client trust is our top priority.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">What happens if there's a dispute?</h3>
                    <p className="text-muted-foreground text-justify">
                      Our project leaders mediate any disputes, reviewing project agreements and deliverables to find 
                      fair resolutions for all parties involved.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

           {/* Contact */}
            <Card className="shadow-elegant bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" /> {/* Added mt-1 for perfect alignment */}
                  <div>
                    <div className="flex items-center"> {/* New flex container for perfect alignment */}
                      <h2 className="text-2xl font-bold">Still have questions?</h2>
                    </div>
                    <p className="text-accent-foreground/90 mb-4 mt-2"> {/* Added mt-2 for spacing */}
                      If you don't find what you're looking for, please reach out to us:
                    </p>
                    <a 
                      href="mailto:info@deepexity.com?subject=FAQ%20Inquiry" 
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

export default FAQPage;