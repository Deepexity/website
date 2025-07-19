import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@deepexity.com",
      description: "Send us an email anytime"
    },
    {
      icon: MessageCircle,
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
      description: "Connect with other freelancers and get peer support",
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
                    >
                      Send Message
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
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 ${info.action ? 'cursor-pointer hover:bg-accent/5 p-2 rounded-lg transition-colors' : ''}`}
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
                      className={`flex items-start space-x-3 ${option.action ? 'cursor-pointer hover:bg-accent/5 p-2 rounded-lg transition-colors' : ''}`}
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
                Join hundreds of successful freelancers who have found their perfect match on Deepexity.
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
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Apply as Freelancer
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