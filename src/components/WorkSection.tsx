import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Brush, LineChart, Megaphone, Smartphone, BrainCircuit, Atom, Cpu, X } from "lucide-react";
import { useState, useEffect } from "react";

const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  const categories = [
    {
      icon: BrainCircuit,
      title: "AI Solutions",
      description: "Deep learning, reinforcement learning, machine learning, and Python development",
      iconColor: "text-emerald-600",
      popupColor: "bg-emerald-100",
      caseStudies: [
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
          title: "Facial Expression Recognition System",
          company: "EmoTech",
          timeline: "4 months",
          category: "Computer Vision",
          description: "Designed a PyTorch-based deep learning system combining attention mechanisms and image processing to detect emotions from facial images.",
          results: ["92% accuracy in emotion detection", "Real-time processing capability", "Adaptable to diverse demographics"],
          rating: 5
        },
        {
          title: "Real Estate Price Prediction Model",
          company: "UrbanValue",
          timeline: "2 months",
          category: "Predictive Analytics",
          description: "Trained an MLP (Multi-Layer Perceptron) model to estimate housing prices using location and property features with high accuracy.",
          results: ["15% more accurate than traditional methods", "Reduced valuation time by 60%", "Integrated with property platforms"],
          rating: 5
        },
        {
          title: "Sports Outcome Prediction Engine",
          company: "SportIQ Analytics",
          timeline: "3 months",
          category: "Predictive Modeling",
          description: "Built a TensorFlow model to forecast football match results by analyzing team statistics and historical data.",
          results: ["78% prediction accuracy", "Live match outcome updates", "Customizable for different leagues"],
          rating: 4
        }
      ]
    },
    {
      icon: LineChart,
      title: "Data Science",
      description: "Data analysis, creative problem solving, and business intelligence",
      iconColor: "text-indigo-600",
      popupColor: "bg-indigo-100",
      caseStudies: [
        {
          title: "Apparel Image Classification System",
          company: "FashionAI",
          timeline: "3 months",
          category: "Computer Vision",
          description: "Created a custom backpropagation-based algorithm in PyTorch for precise clothing image categorization across 50+ apparel categories.",
          results: ["94% classification accuracy", "Reduced manual tagging by 80%", "Integrated with e-commerce platforms"],
          rating: 5
        },
        {
          title: "Logistics Optimization Solution",
          company: "RouteMaster",
          timeline: "5 months",
          category: "Operations Research",
          description: "Solved a novel Periodic Vehicle Routing Problem (PVRP) with time windows, capacity constraints, and driver-customer consistency using clustering and heuristic algorithms.",
          results: ["22% reduction in delivery costs", "15% improved driver utilization", "Dynamic route adjustments"],
          rating: 5
        },
        {
          title: "Address Geocoding Platform",
          company: "GeoLocate",
          timeline: "2 months",
          category: "Geospatial Analysis",
          description: "Designed a system to convert text-based addresses into geographic coordinates (lat/lon) with high precision for logistics applications.",
          results: ["99% address matching accuracy", "Processed 1M+ addresses daily", "Reduced failed deliveries by 30%"],
          rating: 4
        },
        {
          title: "Duplicate Customer Detection",
          company: "DataClean",
          timeline: "1 month",
          category: "Data Quality",
          description: "Deployed AI models to identify and merge duplicate entries in customer datasets, improving data integrity for marketing campaigns.",
          results: ["Identified 15% duplicate records", "Automated 90% of cleaning process", "Improved campaign targeting by 25%"],
          rating: 4
        }
      ]
    },
    {
      icon: Cpu,
      title: "Engineering Projects",
      description: "Electrical, computer, and mechanical engineering solutions",
      iconColor: "text-amber-600",
      popupColor: "bg-amber-100",
      caseStudies: [
        {
          title: "Cancer Detection System",
          company: "MediScan AI",
          timeline: "6 months",
          category: "Medical Imaging",
          description: "Developed a CNN-based image processing model to identify cancerous tissues from medical scans with clinical-grade accuracy.",
          results: ["96% detection accuracy", "Reduced false negatives by 40%", "FDA clearance achieved"],
          rating: 5
        },
        {
          title: "Patient Risk Classification",
          company: "CardioCare",
          timeline: "3 months",
          category: "Healthcare Analytics",
          description: "Implemented an SVM model to classify patients at risk of heart disease using electronic health records and biometric data.",
          results: ["89% prediction accuracy", "Identified 30% more at-risk patients", "Integrated with hospital systems"],
          rating: 5
        },
        {
          title: "Autonomous Vehicle Control",
          company: "AutoNav",
          timeline: "4 months",
          category: "Autonomous Systems",
          description: "Implemented Model Predictive Control (MPC) for evasive steering maneuvers in self-driving cars under emergency conditions.",
          results: ["35% improved obstacle avoidance", "Real-time path planning", "Tested in simulated urban environments"],
          rating: 4
        },
        {
          title: "Smart Traffic Light Control",
          company: "UrbanFlow",
          timeline: "2 months",
          category: "Smart Cities",
          description: "Simulated and optimized traffic signal timing using predictive control models to reduce urban congestion.",
          results: ["22% reduction in wait times", "15% improved traffic flow", "Adaptive to real-time conditions"],
          rating: 4
        }
      ]
    },
    {
      icon: Code2,
      title: "Development",
      description: "Full-stack development, mobile apps, and web solutions",
      iconColor: "text-blue-600",
      popupColor: "bg-blue-100",
      caseStudies: [
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
          title: "NFT Marketplace Bot",
          company: "CryptoAutomate",
          timeline: "1 month",
          category: "Blockchain Development",
          description: "Built bots for buying/selling NFTs on marketplaces with dynamic pricing strategies and rarity detection.",
          results: ["40% profit increase for users", "24/7 automated trading", "Integrated with major NFT platforms"],
          rating: 4
        },
        {
          title: "Crypto Trading Bot",
          company: "DeFiBot",
          timeline: "2 months",
          category: "Decentralized Finance",
          description: "Developed a DEX trading bot using Web3.js for automated cryptocurrency transactions across multiple chains.",
          results: ["30% better execution prices", "Support for 10+ DEXs", "Real-time arbitrage detection"],
          rating: 4
        }
      ]
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design, branding, and creative solutions",
      iconColor: "text-purple-600",
      popupColor: "bg-purple-100",
      caseStudies: [
        {
          title: "Brand Identity for EcoTech Startup",
          company: "GreenInnovate",
          timeline: "3 weeks",
          category: "Branding",
          description: "Created a comprehensive visual identity system including logo, color palette, and brand guidelines for a sustainability-focused tech company.",
          results: ["100% client satisfaction", "Cohesive brand presentation", "Award-winning design"],
          rating: 5
        },
        {
          title: "Mobile App UI/UX Redesign",
          company: "FinMobile",
          timeline: "4 weeks",
          category: "User Experience",
          description: "Redesigned the user interface and experience for a financial mobile application, focusing on accessibility and ease of use.",
          results: ["45% increase in user retention", "30% faster task completion", "Improved app store rating from 3.2 to 4.7"],
          rating: 5
        },
        {
          title: "Interactive Data Visualization Dashboard",
          company: "AnalyticsPro",
          timeline: "2 months",
          category: "Data Visualization",
          description: "Designed an interactive dashboard that transforms complex business metrics into intuitive visual representations.",
          results: ["80% faster insights generation", "Customizable reporting", "Adopted company-wide"],
          rating: 5
        }
      ]
    },
    {
      icon: Brush,
      title: "Content",
      description: "Writing, copywriting, and content strategy",
      iconColor: "text-green-600",
      popupColor: "bg-green-100",
      caseStudies: [
        {
          title: "Technical Documentation Overhaul",
          company: "DevDocs",
          timeline: "1 month",
          category: "Technical Writing",
          description: "Completely restructured and rewrote technical documentation for a developer platform, improving clarity and usability.",
          results: ["60% reduction in support tickets", "Improved API adoption", "Featured in industry publications"],
          rating: 5
        },
        {
          title: "Content Marketing Strategy",
          company: "GrowthMasters",
          timeline: "3 months",
          category: "Content Strategy",
          description: "Developed and executed a comprehensive content marketing strategy that increased organic traffic and lead generation.",
          results: ["300% increase in organic traffic", "45% more qualified leads", "Improved search rankings"],
          rating: 5
        },
        {
          title: "E-commerce Product Descriptions",
          company: "ShopPerfect",
          timeline: "2 weeks",
          category: "Copywriting",
          description: "Created compelling, SEO-optimized product descriptions for an e-commerce store with hundreds of SKUs.",
          results: ["25% increase in conversions", "Improved search visibility", "Consistent brand voice"],
          rating: 4
        },
        {
          title: "White Paper on AI Ethics",
          company: "EthicalAI",
          timeline: "6 weeks",
          category: "Thought Leadership",
          description: "Researched and authored a comprehensive white paper on ethical considerations in artificial intelligence implementation.",
          results: ["5000+ downloads", "Featured in industry events", "Adopted as reference material"],
          rating: 5
        }
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Digital marketing, SEO, and growth strategies",
      iconColor: "text-orange-600",
      popupColor: "bg-orange-100",
      caseStudies: [
        {
          title: "Viral Social Media Campaign",
          company: "BuzzCreators",
          timeline: "1 month",
          category: "Social Media",
          description: "Designed and executed a viral social media campaign that significantly increased brand awareness and engagement.",
          results: ["10M+ impressions", "500% follower growth", "Featured by influencers"],
          rating: 5
        },
        {
          title: "SEO Optimization Project",
          company: "SearchMasters",
          timeline: "3 months",
          category: "Search Engine Optimization",
          description: "Conducted comprehensive SEO audit and optimization for an e-commerce website, improving organic visibility.",
          results: ["200% increase in organic traffic", "Top 3 rankings for key terms", "35% more conversions"],
          rating: 5
        },
        {
          title: "Influencer Marketing Strategy",
          company: "BrandConnect",
          timeline: "2 months",
          category: "Influencer Marketing",
          description: "Developed and managed an influencer marketing campaign that drove authentic engagement and sales.",
          results: ["15:1 ROI", "Authentic user-generated content", "Long-term partnerships"],
          rating: 4
        }
      ]
    },
    {
      icon: Atom,
      title: "Simulations",
      description: "MATLAB modeling, system identification, and mathematical analysis",
      iconColor: "text-cyan-600",
      popupColor: "bg-cyan-100",
      caseStudies: [
        {
          title: "System Identification Framework",
          company: "DynaModel",
          timeline: "4 months",
          category: "Control Systems",
          description: "Developed black-box modeling techniques for unknown dynamical systems using input-output data analysis.",
          results: ["90% model accuracy", "Reduced testing time by 50%", "Applicable to multiple industries"],
          rating: 5
        },
        {
          title: "Industrial Process Simulation",
          company: "ProcessSim",
          timeline: "3 months",
          category: "Industrial Engineering",
          description: "Conducted system simulations in MATLAB Simulink for optimizing manufacturing processes.",
          results: ["20% efficiency improvement", "Reduced material waste", "Validated in real-world conditions"],
          rating: 5
        }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "iOS, Android, and cross-platform development",
      iconColor: "text-red-600",
      popupColor: "bg-red-100",
      caseStudies: [
        {
          title: "Fitness Tracking App",
          company: "FitLife",
          timeline: "3 months",
          category: "Health & Fitness",
          description: "Developed a cross-platform mobile app that tracks workouts, nutrition, and health metrics with seamless device synchronization.",
          results: ["4.8 app store rating", "100K+ downloads", "Featured by Apple"],
          rating: 5
        },
        {
          title: "AR Shopping Assistant",
          company: "ShopAR",
          timeline: "5 months",
          category: "Augmented Reality",
          description: "Created an augmented reality mobile app that lets users visualize furniture in their homes before purchasing.",
          results: ["30% increase in conversions", "Reduced returns by 25%", "Innovation award winner"],
          rating: 5
        },
        {
          title: "Mobile Payment Solution",
          company: "PayEasy",
          timeline: "2 months",
          category: "FinTech",
          description: "Built a secure mobile payment application with biometric authentication and instant transfers.",
          results: ["99.9% uptime", "1M+ transactions processed", "PCI-DSS compliant"],
          rating: 4
        }
      ]
    }
  ];

  const handleCategoryClick = (title: string) => {
    setSelectedCategory(title);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const getCurrentCategory = () => {
    return categories.find(cat => cat.title === selectedCategory) || categories[0];
  };

  return (
    <section id="work" className="py-20 bg-secondary/30 relative">
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
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCategoryClick(category.title)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
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

        {/* Case Study Modal */}
        {showModal && (
          <>
            {/* Blurred Backdrop */}
            <div 
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              onClick={closeModal}
            ></div>
            
            {/* Modal with Colored Header */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
              <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Section with Dynamic Color */}
                <div className={`${getCurrentCategory().popupColor} rounded-t-xl p-6`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{getCurrentCategory().title}</h3>
                      <p className="text-muted-foreground mt-2">Case studies of our successful projects</p>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="p-2 rounded-full hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Case Studies List */}
                  <div className="space-y-6">
                    {getCurrentCategory().caseStudies.map((study, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{study.title}</h4>
                          <Badge variant="secondary" className="text-xs">{study.category}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">
                          <span className="font-medium text-gray-800">{study.company}</span> • {study.timeline}
                        </p>
                        <p className="text-gray-700 text-sm mt-3 mb-4">{study.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900 text-sm">Key Results:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            {study.results.map((result, i) => (
                              <li key={i}>{result}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Star Rating Display */}
                        <div className="flex items-center mt-4">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < study.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-xs text-gray-500"></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row justify-end gap-2">
                    <Button 
                      onClick={closeModal}
                      variant="outline"
                      className="border-gray-300 text-black hover:bg-gray-50 text-sm px-3 py-1"
                    >
                      Close
                    </Button>
                    <Button 
                      onClick={() => {
                        closeModal();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1"
                    >
                      Start Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WorkSection;