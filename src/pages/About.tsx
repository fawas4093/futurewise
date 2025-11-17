import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Wrench, Rocket, CheckCircle2, Lightbulb, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: "Clarity",
      description: "Helping students discover their true potential and ideal domain.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Wrench,
      title: "Skills",
      description: "Delivering hands-on, industry-driven training and certifications.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Rocket,
      title: "Careers",
      description: "Providing mentorship, projects, and professional pathways.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const offerings = [
    {
      icon: CheckCircle2,
      title: "Domain Clarification Sessions",
      description: "Discover your true calling through expert guidance and self-assessment.",
    },
    {
      icon: Wrench,
      title: "Hands-on Workshops",
      description: "Learn by doing with practical, real-world projects and tools.",
    },
    {
      icon: Award,
      title: "Certification Programmes",
      description: "Earn industry-recognized credentials that employers value.",
    },
    {
      icon: Lightbulb,
      title: "Project Development & Career Guidance",
      description: "Build your portfolio with mentorship from industry professionals.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Learning with Clarity • Skills • Careers</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Shape Your<br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Own Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Graduate with more than just knowledge — graduate with clarity, skills, and the power to create your destiny.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/xskills">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl h-14 px-8 text-base font-semibold">
                  Explore Programmes
                </Button>
              </Link>
              <Link to="#contact">
                <Button size="lg" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 h-14 px-8 text-base font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-wider">
                  Our Mission
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Creating the Next Generation
                </h2>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  FutureWise Edventures is on a mission to create a generation of students who graduate with more than just knowledge.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded" />
                    <span className="text-2xl font-bold text-primary">Clarity</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary/50 rounded" />
                    <span className="text-2xl font-bold text-secondary">Skills</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent/50 rounded" />
                    <span className="text-2xl font-bold text-accent">Power</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Built on Three Pillars
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive ecosystem bridging academic learning and real-world readiness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full hover:-translate-y-2">
                    <CardHeader className="pb-4">
                      <div className={`${pillar.bgColor} ${pillar.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-3xl mb-3">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {pillar.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your educational journey from discovery to career launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-in text-center hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <offering.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Learn. Build.<br />Launch.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Your future starts here. Join thousands of students who are already shaping their careers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/xskills">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl h-14 px-8 text-base font-semibold">
                  Start Learning
                </Button>
              </Link>
              <Link to="/connectly">
                <Button size="lg" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 h-14 px-8 text-base font-semibold">
                  Join Connectly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Let's Start Your Journey
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Ready to transform your educational journey? Connect with us and discover how we can help you achieve your goals.
                </p>
                <Button 
                  size="lg"
                  className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => window.open('https://wa.me/917034365083', '_blank')}
                >
                  Get in Touch
                </Button>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Mr. Mohammed Shefin CT</CardTitle>
                        <CardDescription className="text-base">Founder & CEO</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground font-medium">+91 70343 65083</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-foreground font-medium">+91 73066 41423</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-foreground font-medium text-sm">connectfuturewise@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
