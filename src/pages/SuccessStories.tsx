import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ArrowRight, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessStories = () => {
  const navigate = useNavigate();
  const stories = [
    {
      title: "Deepexity Helped us Build a Stunning Website in 2 Weeks",
      company: "TechStartup Inc.",
      timeline: "2 weeks",
      category: "Web Development",
      description: "Working with Deepexity was exceptional. Their team delivered a modern, responsive website that exceeded our expectations within the tight deadline.",
      results: ["50% increase in user engagement", "30% faster load times", "Mobile-first design"],
      rating: 5
    },
    {
      title: "From Idea to Launch: How Our Platform Connected Startups with Top Developers",
      company: "InnovateLab",
      timeline: "6 weeks",
      category: "Full-Stack Development",
      description: "Deepexity connected us with world-class developers who transformed our concept into a fully functional platform. The quality and speed were remarkable.",
      results: ["MVP launched on schedule", "Scalable architecture", "Clean, maintainable code"],
      rating: 5
    },
    {
      title: "AI-Powered Cancer Detection System",
      company: "PathAI",
      timeline: "6 months",
      category: "Machine Learning",
      description: "We built a deep learning model that analyzes histopathology slides, achieving FDA-cleared accuracy in identifying early-stage tumors.",
      results: ["96% accuracy in clinical trials", "Reduced pathologist workload by 40%", "Deployed across 50+ hospitals"],
      rating: 5
    },
    {
      title: "Advanced Sensor Fusion Algorithms for Autonomous Vehicles",
      company: "Waymo",
      timeline: "5 months",
      category: "Signal Processing",
      description: "Developed sophisticated algorithms for Waymo's autonomous driving system, improving real-time data processing from LiDAR, radar, and cameras.",
      results: ["25% improvement in object detection", "Enhanced reliability in low-visibility", "Seamless hardware integration"],
      rating: 5
    },
    {
      title: "Personalized Music Recommendation Engine",
      company: "Streamify",
      timeline: "3 months",
      category: "Recommendation Systems",
      description: "Developed an AI-powered music recommendation system that analyzes user listening patterns to suggest personalized tracks, improving user engagement.",
      results: ["35% increase in user retention", "20% more time spent per session", "Real-time personalized playlists"],
      rating: 5
    },
    {
      title: "Optimizing Logistics with AI Routing Solutions",
      company: "LogiChain",
      timeline: "4 months",
      category: "Logistics Optimization",
      description: "Solved complex Periodic Vehicle Routing Problems with time windows and capacity constraints using advanced clustering and heuristic algorithms.",
      results: ["15% reduction in delivery costs", "Improved driver-customer consistency", "98% on-time delivery rate"],
      rating: 5
    },
    {
      title: "High-Accuracy Address Geocoding System",
      company: "LocateAI (Series B Startup)",
      timeline: "3 months",
      category: "Address Geocoding",
      description: "Built the core geocoding engine for LocateAI's location intelligence platform, enabling small businesses to precisely map customer addresses.",
      results: ["95% accuracy with incomplete addresses", "$0.0001 per lookup cost efficiency", "Adopted by 1,200+ SMBs"],
      rating: 4
    },
    {
      title: "Automated Planogram Compliance System",
      company: "RetailVision",
      timeline: "5 months",
      category: "Planogram Compliance",
      description: "Implemented YOLO-based computer vision system to verify product placement against retail planograms in real-time.",
      results: ["90% reduction in audit time", "Improved shelf compliance by 45%", "Real-time alerts for misplaced items"],
      rating: 5
    },
    {
      title: "AI-Driven Customer Data Deduplication",
      company: "AdvancedControlLabs",
      timeline: "2 weeks",
      category: "Duplicate Customer Detection",
      description: "Deployed machine learning models to identify and merge duplicate customer records across multiple databases.",
      results: ["Eliminated 30% duplicate records", "Improved marketing campaign accuracy", "Automated data hygiene process"],
      rating: 4
    },
    {
      title: "Smart Traffic Light Optimization System",
      company: "UrbanFlow",
      timeline: "6 months",
      category: "Traffic Light Control",
      description: "Developed predictive control models to optimize traffic signal timing based on real-time traffic patterns.",
      results: ["25% reduction in average wait times", "15% decrease in traffic congestion", "Adaptive to special events"],
      rating: 5
    }
  ];

  const testimonials = [
    {
      quote: "This platform completes our project as best as possible!",
      author: "Happy Client",
      company: "Tech Solutions Ltd.",
      rating: 5
    },
    {
      quote: "The expertise and professionalism shown by the Deepexity team is unmatched. They delivered beyond our expectations.",
      author: "Sarah Johnson",
      company: "Digital Ventures",
      rating: 5
    },
    {
      quote: "Working with Deepexity was a game-changer for our business. The results speak for themselves.",
      author: "Michael Chen",
      company: "StartupCorp",
      rating: 5
    },
    {
      quote: "The SVM model for patient risk classification exceeded our clinical accuracy requirements by 15%.",
      author: "Dr. Emily Parker",
      company: "CardioHealth Systems",
      rating: 5
    },
    {
      quote: "Their facial expression recognition system transformed our customer experience research capabilities.",
      author: "Alex Rodriguez",
      company: "Behavioral Insights Inc.",
      rating: 5
    },
    {
      quote: "The apparel classification algorithm reduced our inventory processing time by 60%.",
      author: "Sophie Martin",
      company: "FashionForward Retail",
      rating: 5
    },
    {
      quote: "Our real estate price predictions are now 92% accurate thanks to Deepexity's MLP model.",
      author: "James Wilson",
      company: "UrbanHomes Realty",
      rating: 5
    },
    {
      quote: "The sports outcome prediction model gave us a competitive edge in fantasy sports analytics.",
      author: "Robert Kim",
      company: "SportStats Analytics",
      rating: 4
    },
    {
      quote: "The Persian poetry generator created beautiful, authentic verses that amazed our linguists.",
      author: "Navid Rahmani",
      company: "Persian Cultural Institute",
      rating: 5
    },
    {
      quote: "The MPC implementation for our autonomous vehicles handled complex scenarios flawlessly.",
      author: "Dr. Lisa Zhang",
      company: "AutoNova Technologies",
      rating: 5
    },
    {
      quote: "Our crypto trading bot executes transactions with millisecond precision and optimal pricing.",
      author: "Mark Thompson",
      company: "CryptoTrade Solutions",
      rating: 5
    },
    {
      quote: "The NFT marketplace bots increased our trading volume by 300% with dynamic pricing strategies.",
      author: "Olivia Chen",
      company: "DigitalArt Marketplace",
      rating: 4
    },
    {
      quote: "Their MATLAB Simulink simulations saved us months of physical prototyping time.",
      author: "David Miller",
      company: "Industrial Dynamics",
      rating: 5
    }
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with rectangular chat icon */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <CheckCircle className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              Success Stories
            </h1>
            <p className="text-xl text-accent-foreground/90">
              Discover how we've helped companies achieve their goals through innovative solutions and expert talent.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real clients who achieved remarkable results with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {stories.map((story, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-sm">
                        {story.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < story.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {story.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span>{story.company}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{story.timeline}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 text-justify">
                        {story.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {story.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials with reduced spacing */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Quote className="w-8 h-8 text-accent" />
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground italic text-justify">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with reduced top padding */}
      <section className="pb-16 pt-12">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Share your success story with us!</h3>
              <p className="text-accent-foreground/90 mb-8 max-w-2xl mx-auto text-justify">
                Have you worked with our talented professionals? We'd love to hear about your experience.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={scrollToContact}
              >
                Send us a Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back Button - Aligned to the left */}
      <div className="container mx-auto px-4 pb-20">
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
  );
};

export default SuccessStories;