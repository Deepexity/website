import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "default_id";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const DiscordIconBlue = () => (
    <svg viewBox="0 0 24 24" fill="#26D9F0" className="w-5 h-5">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@deepexity.com",
      description: "Send us an email anytime"
    },
    {
      icon: DiscordIconBlue,
      title: "Discord",
      content: "Join our community",
      description: "Connect with our team and community",
      action: () => window.open('https://discord.gg/M5uwtWEqs4', '_blank')
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      badge: "Online Now",
      badgeVariant: "default" as const,
      action: () => window.open('https://discord.gg/M5uwtWEqs4', '_blank')
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for enterprise clients",
      badge: "Enterprise",
      badgeVariant: "secondary" as const
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other experts and get peer support",
      badge: "Free",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get in{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">Send us a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Support */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 pl-2 ${info.action ? 'cursor-pointer hover:bg-accent/5 p-2 rounded-lg transition-colors' : ''}`}
                      onClick={info.action}
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                        <p className="text-foreground">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Support Options</h3>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 pl-2 ${option.action ? 'cursor-pointer hover:bg-accent/5 p-2 rounded-lg transition-colors' : ''}`}
                      onClick={option.action}
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-card-foreground">{option.title}</h4>
                          <Badge variant={option.badgeVariant} className="text-xs">
                            {option.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Are you a freelancer?</h3>
              <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful remote worker who have found their perfect match on Deepexity.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const formSection = element.querySelector('form');
                      if (formSection) {
                        const rect = formSection.getBoundingClientRect();
                        const offset = window.pageYOffset + rect.top - 200;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Apply as a Self-Employed Professional
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;