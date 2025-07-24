import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Brush, LineChart, Megaphone, Smartphone, BrainCircuit, Atom, Cpu } from "lucide-react";

const WorkSection = () => {
  const categories = [
    {
      icon: BrainCircuit,
      title: "AI Solutions",
      description: "Deep learning, reinforcement learning, machine learning, and Python development",
      color: "text-emerald-600"
    },
    {
      icon: LineChart,
      title: "Data Science",
      description: "Data analysis, creative problem solving, and business intelligence",
      color: "text-indigo-600"
    },
    {
      icon: Cpu,
      title: "Engineering Projects",
      description: "Electrical, computer, and mechanical engineering solutions",
      color: "text-amber-600"
    },
    {
      icon: Code2,
      title: "Development",
      description: "Full-stack development, mobile apps, and web solutions",
      color: "text-blue-600"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design, branding, and creative solutions",
      color: "text-purple-600"
    },
    {
      icon: Brush,
      title: "Content",
      description: "Writing, copywriting, and content strategy",
      color: "text-green-600"
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Digital marketing, SEO, and growth strategies",
      color: "text-orange-600"
    },
    {
      icon: Atom,
      title: "Simulations",
      description: "MATLAB modeling, system identification, and mathematical analysis",
      color: "text-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "iOS, Android, and cross-platform development",
      color: "text-red-600"
    }
  ];

  const featuredJobs = [
    {
      title: "Senior React Developer",
      company: "TechCorp",
      type: "Remote",
      duration: "3 months",
      budget: "$15,000 - $25,000",
      skills: ["React", "TypeScript", "Node.js"],
      urgent: true
    },
    {
      title: "UX/UI Designer",
      company: "DesignStudio",
      type: "Hybrid",
      duration: "2 months",
      budget: "$8,000 - $12,000",
      skills: ["Figma", "Prototyping", "User Research"],
      urgent: false
    },
    {
      title: "Content Marketing Specialist",
      company: "MarketingPro",
      type: "Remote",
      duration: "6 months",
      budget: "$5,000 - $8,000",
      skills: ["SEO", "Content Strategy", "Analytics"],
      urgent: false
    }
  ];

  return (
    <section id="work" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Find Your Perfect{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hand us your project. Let us handle your project and match it with the best experts in the field.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-card-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkSection;