import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Rocket, Trophy, BarChart3, Box, Cpu, Code, CheckCircle2, Award, Users2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Xskills = () => {
  const mentorshipTracks = [
    {
      icon: Sparkles,
      title: "Ignite",
      description: "Discover your domain through free sessions and exploration.",
      features: ["Free introductory sessions", "Domain discovery workshops", "Career path exploration", "Basic skill exposure"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Rocket,
      title: "Accelerate",
      description: "Build practical knowledge with guided workshops.",
      features: ["Hands-on workshops", "Project-based learning", "Industry tools training", "Skill certifications"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Trophy,
      title: "Dominate",
      description: "Achieve mastery through advanced mentorship and certifications.",
      features: ["Expert mentorship", "Advanced certifications", "Portfolio development", "Career placement support"],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const programmes = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn raw numbers into powerful insights. Master data visualization, statistical analysis, and business intelligence tools.",
      tools: "Excel • Power BI • Tableau • Python",
      color: "text-primary",
    },
    {
      icon: Box,
      title: "Product Design & Prototyping",
      description: "Create functional, user-centric solutions. Learn 3D modeling, CAD design, and prototyping.",
      tools: "Fusion 360 • SolidWorks • Adobe XD",
      color: "text-secondary",
    },
    {
      icon: Cpu,
      title: "IoT & Electronics",
      description: "Build smart, connected devices from concept to prototype. Design, program, and deploy intelligent systems.",
      tools: "Arduino • Raspberry Pi • ESP32 • Embedded",
      color: "text-accent",
    },
    {
      icon: Code,
      title: "Programming & Software Development",
      description: "Master programming languages to build, test, and deploy software applications for real-world impact.",
      tools: "Python • Java • C++ • Dart (Flutter) • HTML (Web)",
      color: "text-primary",
    },
  ];

  const whyXskills = [
    {
      icon: CheckCircle2,
      title: "Hands-on, Practical Training",
      description: "Learn by doing with real projects and industry scenarios",
    },
    {
      icon: Award,
      title: "Industry-Recognized Certifications",
      description: "Credentials that employers value and respect",
    },
    {
      icon: Users2,
      title: "Expert Mentorship",
      description: "Learn from professionals with years of industry experience",
    },
    {
      icon: TrendingUp,
      title: "Portfolio & Career Development",
      description: "Build tangible proof of your skills and launch your career",
    },
  ];

  return (
    <div className="min-h-screen xskills-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0A4174' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              variants={fadeInUp}
            >
              <motion.div 
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white text-sm font-medium">Xskills by FutureWise Edventures</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight"
              variants={fadeInUp}
            >
              Upskill the<br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Future
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
              variants={fadeInUp}
            >
              Empowering students with hands-on expertise and transforming learners into job-ready professionals through real-world learning.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl h-14 px-8 text-base font-semibold"
                  onClick={() => window.open('https://wa.me/917034365083', '_blank')}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* About Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-wider">
                About Xskills
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Your Gateway to Professional Excellence
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Xskills is the dedicated skill-development division of FutureWise Edventures, focused on transforming learners into job-ready professionals through real-world learning experiences and industry-aligned training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Tracks Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three progressive tracks designed to take you from discovery to mastery
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mentorshipTracks.map((track, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(10, 65, 116, 0.2), rgba(73, 118, 159, 0.2), rgba(78, 142, 162, 0.2))' }}
                  whileHover={{ opacity: 1 }}
                />
                <Card className="relative bg-card/80 backdrop-blur-sm border-border h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardHeader>
                      <motion.div 
                        className={`${track.bgColor} ${track.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <track.icon className="h-7 w-7" />
                      </motion.div>
                      <CardTitle className="text-3xl mb-3">{track.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {track.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {track.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-1">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Programmes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-focused training designed to make you job-ready
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardHeader>
                      <motion.div 
                        className={`${programme.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                        style={{ background: 'linear-gradient(135deg, rgba(10, 65, 116, 0.1), rgba(73, 118, 159, 0.1))' }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <programme.icon className="h-7 w-7" />
                      </motion.div>
                      <CardTitle className="text-2xl mb-3">{programme.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {programme.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-muted to-muted/50 rounded-full text-sm font-bold text-foreground">
                        {programme.tools}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Xskills Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Xskills?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just teach — we transform
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {whyXskills.map((reason, index) => (
              <motion.div
                key={index}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border text-center"
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(10, 65, 116, 0.1), rgba(73, 118, 159, 0.1))' }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A4174 0%, #49769F 50%, #4E8EA2 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Start Learning<br />Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Your future deserves the best preparation. Join Xskills and transform your potential into professional excellence.
            </p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-2xl h-14 px-8 text-base font-semibold"
                    onClick={() => window.open('https://wa.me/917034365083', '_blank')}
                  >
                    Enroll Now
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/connectly">
                    <Button size="lg" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 h-14 px-8 text-base font-semibold">
                      Explore Connectly
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Xskills;
