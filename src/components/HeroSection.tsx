import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-freelancer.jpg";

const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Access the world's best{" "}
                <span className="text-transparent bg-gradient-accent bg-clip-text text-center block">
                  talents
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Your network, your future. Connect with top experts and find unlimited talents.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">100+ Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">1K+ Projects</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant"
                onClick={() => window.open('https://discord.gg/M5uwtWEqs4', '_blank')}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-foreground hover:bg-secondary hover:text-foreground"
                onClick={scrollToWork}
              >
                Browse Talents
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional freelancer working on laptop"
                className="w-full h-[580px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-elegant max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Project Completed</p>
                  <p className="text-sm text-muted-foreground">Successfully done by experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;