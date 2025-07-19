import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const directors = [
    {
      name: "MATT BARRIE",
      position: "Chief Executive Officer & Chairman",
      credentials: "BE (Hons I) BSc (Hons I) GDipAppFin MAppFin MSEE (Stanford) GAICD SEP FIEAust",
      image: "/lovable-uploads/0503ef17-e811-473d-b3e9-5ac2b3ed9e59.png"
    },
    {
      name: "DARREN WILLIAMS",
      position: "Non-Executive Director",
      credentials: "BSc (Hons I) PhD (Computer Science) MAICD",
      image: "/lovable-uploads/0503ef17-e811-473d-b3e9-5ac2b3ed9e59.png"
    },
    {
      name: "SIMON CLAUSEN",
      position: "Non-Executive Director",
      credentials: "",
      image: "/lovable-uploads/0503ef17-e811-473d-b3e9-5ac2b3ed9e59.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6bbb3312-4c85-4103-b79d-bf6e26c9913a.png" 
                alt="Deepexity Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">Deepexity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our{" "}
              <span className="text-transparent bg-gradient-accent bg-clip-text">Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading Deepexity forward
            </p>
          </div>

          {/* Directors Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">DIRECTORS</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {directors.map((director, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <img 
                        src={director.image} 
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Blue accent bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-card-foreground">{director.name}</h3>
                      <p className="text-muted-foreground font-medium">{director.position}</p>
                      {director.credentials && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {director.credentials}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Mission */}
          <div className="mt-20 text-center space-y-8">
            <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl text-accent-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  At Deepexity, we're building the future of work by connecting innovative companies 
                  with talented professionals worldwide. Our experienced leadership team brings 
                  decades of expertise in technology, business development, and strategic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;