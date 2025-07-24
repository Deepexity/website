import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Careers = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to drive innovation."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results for our clients."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies to stay at the forefront of our industry."
    }
  ];

  const benefits = [
    "Competitive salary and equity options",
    "Flexible working hours and remote work",
    "Professional development opportunities",
    "Health and wellness benefits",
    "Collaborative and inclusive work environment",
    "Opportunity to work with cutting-edge technologies"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold">
              We're Hiring!
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Join Our Mission to Connect Talent with Opportunity
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-3xl mx-auto">
              Be part of a dynamic team that's revolutionizing how companies connect with top talent worldwide. 
              Help us build the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the bridge between innovative companies and exceptional talent, 
              creating opportunities that transform careers and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Join Deepexity?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Ready to Make an Impact?</h3>
                  <p className="text-muted-foreground mb-6">
                    Even if you don't see a specific role listed, we'd love to hear from you! 
                    We're always looking for talented individuals who share our passion for connecting talent with opportunity.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-card-foreground">Get in Touch</p>
                        <p className="text-sm text-muted-foreground">careers@deepexity.com</p>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                      onClick={() => window.location.href = 'mailto:careers@deepexity.com'}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Current Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for exceptional talent to join our growing team.
            </p>
          </div>

          <Card className="shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    We're Growing!
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    While we don't have specific openings listed right now, we're always interested in connecting 
                    with talented individuals who are passionate about our mission.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="secondary">Full-Stack Development</Badge>
                  <Badge variant="secondary">Product Design</Badge>
                  <Badge variant="secondary">Business Development</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">Customer Success</Badge>
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-accent text-accent-foreground hover:opacity-90"
                  onClick={() => window.location.href = 'mailto:careers@deepexity.com?subject=Career Inquiry'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email us at careers@deepexity.com
                </Button>
              </div>
            </CardContent>
          </Card>
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
      </section>
    </div>
  );
};

export default Careers;