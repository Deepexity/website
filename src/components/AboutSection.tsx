import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, Award, Globe, TrendingUp, Heart } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const AboutSection = () => {
  const stats = [
    { number: "100+", label: "Ph.D. Experts", icon: Users },
    { number: "1K+", label: "Completed Projects", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "10+", label: "Countries", icon: Globe }
  ];

  const features = [
    {
      icon: Zap,
      title: "Quick Matching",
      description: "Our AI-powered algorithm connects you with the perfect experts in minutes."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer support and dedicated account managers for enterprise clients."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All experts are vetted and verified with portfolio reviews and skill assessments."
    },
    {
      icon: Heart,
      title: "Counselling",
      description: "Professional guidance to help you work more effectively with experts and maximize project outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">Deepexity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of work by connecting innovative companies with talented professionals worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamImage} 
                alt="Team collaboration in modern office"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating achievement card */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-elegant">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Platform Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Empowering the Global Workforce
              </h3>
              <p className="text-lg text-muted-foreground text-justify">
                Deepexity was founded with a simple mission: to create meaningful connections between 
                innovative companies and talented professionals. We believe in the power of remote work 
                and the freedom it brings to both businesses and experts.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Our platform combines cutting-edge technology with human expertise to ensure every 
                project is a success. From small startups to Fortune 500 companies, we've helped 
                thousands of businesses find the perfect talented professionals.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90"
              onClick={() => window.location.href = '/team'}
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg text-card-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;