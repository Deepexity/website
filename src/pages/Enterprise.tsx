import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, Users, Code, Paintbrush, Rocket, 
  Server, Smartphone, Globe, Mail, Shield,
  Cloud, ShoppingCart, ShoppingBag, Monitor,
  Home, Plane, Database, Cpu, Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Enterprise = () => {
  const navigate = useNavigate();
  const talentContainerRef = useRef<HTMLDivElement>(null);
  const companiesContainerRef = useRef<HTMLDivElement>(null);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const animationStartTimeRef = useRef<number | null>(null);
  const scrollSpeed = 50; // pixels per second

  // Talent categories with colored icons
  const talentCategories = [
    { name: "Web Dev", icon: <Code className="w-8 h-8 text-blue-500" /> },
    { name: "UI/UX", icon: <Paintbrush className="w-8 h-8 text-purple-500" /> },
    { name: "Mobile", icon: <Smartphone className="w-8 h-8 text-green-500" /> },
    { name: "DevOps", icon: <Server className="w-8 h-8 text-orange-500" /> },
    { name: "Product", icon: <Rocket className="w-8 h-8 text-red-500" /> },
    { name: "Marketing", icon: <Globe className="w-8 h-8 text-teal-500" /> },
    { name: "Data", icon: <Database className="w-8 h-8 text-indigo-500" /> },
    { name: "AI/ML", icon: <Cpu className="w-8 h-8 text-pink-500" /> },
    { name: "Cloud", icon: <Cloud className="w-8 h-8 text-cyan-500" /> },
    { name: "Security", icon: <Shield className="w-8 h-8 text-yellow-500" /> }
  ];

  // Partner companies with colored icons
  const partnerCompanies = [
    { name: "Upwork", icon: <Briefcase className="w-8 h-8 text-green-600" /> },
    { name: "Deloitte", icon: <Building className="w-8 h-8 text-blue-600" /> },
    { name: "NASA", icon: <Rocket className="w-8 h-8 text-red-600" /> },
    { name: "Walmart", icon: <ShoppingCart className="w-8 h-8 text-blue-400" /> },
    { name: "Google", icon: <Globe className="w-8 h-8 text-red-400" /> },
    { name: "Amazon", icon: <ShoppingBag className="w-8 h-8 text-orange-500" /> },
    { name: "Microsoft", icon: <Monitor className="w-8 h-8 text-green-700" /> },
    { name: "Salesforce", icon: <Cloud className="w-8 h-8 text-blue-300" /> },
    { name: "Wayfair", icon: <Home className="w-8 h-8 text-yellow-600" /> },
    { name: "Boeing", icon: <Plane className="w-8 h-8 text-gray-600" /> }
  ];

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!animationStartTimeRef.current) {
        animationStartTimeRef.current = timestamp;
      }
      
      const elapsedTime = timestamp - animationStartTimeRef.current;
      const translateX = (elapsedTime / 1000) * scrollSpeed % 1000;
      
      if (talentContainerRef.current) {
        talentContainerRef.current.style.transform = `translateX(-${translateX}px)`;
      }
      if (companiesContainerRef.current) {
        companiesContainerRef.current.style.transform = `translateX(-${translateX}px)`;
      }
      
      setAnimationFrameId(requestAnimationFrame(animate));
    };
    
    setAnimationFrameId(requestAnimationFrame(animate));
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Briefcase className="w-16 h-16 mx-auto text-white" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Enterprise Talent Network
            </h1>
            <p className="text-xl text-white/90">
              Connecting world-class talent with leading enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {/* Talent Access Section */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-8">
                  <Users className="w-8 h-8 text-accent mt-1"/>
                  <div className="w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Access the best talented experts in your desired field
                    </h2>
                    
                    {/* Moving Talent Categories */}
                    <div className="relative overflow-hidden w-full h-24 bg-gray-50 rounded-lg">
                      <div 
                        ref={talentContainerRef}
                        className="absolute flex items-center h-full"
                        style={{
                          willChange: 'transform',
                          whiteSpace: 'nowrap',
                          animation: 'scroll 30s linear infinite'
                        }}
                      >
                        {[...talentCategories, ...talentCategories].map((category, index) => (
                          <div 
                            key={`talent-${index}`}
                            className="flex flex-col items-center px-4 py-2 bg-white rounded-lg h-20 justify-center mx-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="mb-1">{category.icon}</div>
                            <span className="font-medium text-sm text-gray-700">{category.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Partners Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-8">
                  <Briefcase className="w-8 h-8 text-accent mt-1" />
                  <div className="w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Access jobs with the world's leading enterprises
                    </h2>
                    
                    {/* Moving Company Logos */}
                    <div className="relative overflow-hidden w-full h-24 bg-gray-50 rounded-lg">
                      <div 
                        ref={companiesContainerRef}
                        className="absolute flex items-center h-full"
                        style={{
                          willChange: 'transform',
                          whiteSpace: 'nowrap',
                          animation: 'scroll 30s linear infinite'
                        }}
                      >
                        {[...partnerCompanies, ...partnerCompanies].map((company, index) => (
                          <div 
                            key={`company-${index}`}
                            className="flex flex-col items-center px-4 py-2 bg-white rounded-lg h-20 justify-center mx-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="mb-1">{company.icon}</div>
                            <span className="font-medium text-sm text-gray-700">{company.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Rocket className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">How Our Enterprise Network Works</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Talent Matching</h3>
                        <p className="text-gray-600 text-justify">
                          We carefully match your project requirements with our vetted network of specialists.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Project Leadership</h3>
                        <p className="text-gray-600 text-justify">
                          Dedicated Deepexity leaders ensure quality and timely delivery.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Secure Collaboration</h3>
                        <p className="text-gray-600 text-justify">
                          Enterprise-grade confidentiality protections on all projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="hadow-elegant bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold">Ready to access top talent?</h2>
                    <p className="text-white/90 mb-4 mt-2 text-xl">
                      Contact us to discuss your enterprise needs.
                    </p>
                    <a 
                      href="mailto:admin@deepexity.com?subject=Enterprise%20Inquiry" 
                      className="font-semibold hover:underline text-lg inline-flex items-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      admin@deepexity.com
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

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Enterprise;