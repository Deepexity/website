import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin: string;
}

const Team = () => {
  const navigate = useNavigate();
  const directors: TeamMember[] = [
    {
      name: "Sajad Hosseini",
      position: "Chief Executive Officer & Chairman",
      description: "Ph.D. in Electrical Engineering, Sharif University of Technology",
      image: "/uploads/sajad.png",
      linkedin: "https://www.linkedin.com/in/sajadhosseini/"
    },
    {
      name: "Enayat Amiri",
      position: "Chief Operating Officer & Co-Founder",
      description: "M.Sc. in Electrical Engineering, Sharif University of Technology",
      image: "/uploads/enayat.png",
      linkedin: "https://www.linkedin.com/in/enayat-amiri/"
    },
    {
      name: "Hamid Moshrefi",
      position: "Chief Business Officer & Co-Founder",
      description: "Ph.D. in Operations Management, McGill University",
      image: "/uploads/hamid.png",
      linkedin: "https://www.linkedin.com/in/hamidreza-moshrefi-7149a3187/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              The passionate individuals behind Deepexity
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Directors Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Directors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((director) => (
                <TeamMemberCard key={director.name} member={director} />
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mt-20 text-center">
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
          </section>

          {/* Back Button - Left-aligned */}
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
      </main>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card className="group hover:shadow-elegant transition-all duration-300 h-full">
    <CardContent className="p-6 text-center h-full flex flex-col">
      <div className="space-y-4 flex-1">
        <div className="w-64 aspect-[3/4] mx-auto overflow-hidden rounded-lg">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
          <p className="text-accent font-semibold mb-2">{member.position}</p>
          <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn profile`}
          className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-accent" />
        </a>
      </div>
    </CardContent>
  </Card>
);

export default Team;
