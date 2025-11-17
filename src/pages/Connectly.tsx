import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users2, Briefcase, FolderKanban, Trophy, TrendingUp, Building2, GraduationCap, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Connectly = () => {
  const offerings = [
    {
      icon: Users2,
      title: "Cross-College Collaboration",
      description: "Connect and work with talented students from different colleges across the nation.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Briefcase,
      title: "Real Company Contracts",
      description: "Gain hands-on experience through paid or credited projects from actual companies.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: FolderKanban,
      title: "Project Marketplace",
      description: "Join exciting projects or post your own ideas and build with a diverse team.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Trophy,
      title: "Innovation Challenges & Hackathons",
      description: "Compete, learn, showcase your skills, and get noticed by top recruiters.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: TrendingUp,
      title: "Portfolio & Exposure",
      description: "Build tangible proof of your teamwork, skills, and real-world impact.",
      gradient: "from-secondary to-accent",
    },
  ];

  const forStudents = [
    "Collaborate with peers nationwide",
    "Work on real-world projects",
    "Earn while you learn",
    "Build an impressive portfolio",
    "Get noticed by top companies",
    "Develop professional skills",
  ];

  const forPartners = [
    "Access talented young minds",
    "Co-create innovative solutions",
    "Solve real-world challenges",
    "Build your talent pipeline",
    "Support future professionals",
    "Drive innovation forward",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
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
              <span className="text-white text-sm font-medium">Connectly by FutureWise Edventures</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight"
              variants={fadeInUp}
            >
              Collaborate<br />
              Create<br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Conquer
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
              variants={fadeInUp}
            >
              Connecting students beyond campuses — where innovation meets opportunity and teamwork creates impact.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl h-14 px-8 text-base font-semibold"
                  disabled
                >
                  Coming Soon
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
                About Connectly
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Where Learning Becomes Doing
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connectly is a collaboration and innovation platform by FutureWise Edventures — enabling students from different colleges to connect, team up, and work on real-world projects that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
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
              What Connectly Offers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to collaborate, create, and conquer
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 rounded-2xl`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                />
                <Card className="relative bg-card/50 backdrop-blur-sm border-border h-full">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardHeader>
                      <motion.div 
                        className={`bg-gradient-to-br ${offering.gradient} p-4 w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <offering.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <CardTitle className="text-2xl mb-3">{offering.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {offering.description}
                      </CardDescription>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
            {/* Empty div to make grid symmetrical with 6 items */}
            <div className="hidden lg:block"></div>
          </motion.div>
        </div>
      </section>

      {/* For Students & Partners Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="group relative" variants={staggerItem}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Card className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 h-full backdrop-blur-sm">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <motion.div 
                      className="bg-gradient-to-br from-primary to-secondary p-4 w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-7 w-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-3xl mb-3">For Students</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Collaborate, earn, and grow while still in college — Connectly turns learning into doing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {forStudents.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Zap className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div className="group relative" variants={staggerItem}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Card className="relative bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 h-full backdrop-blur-sm">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <motion.div 
                      className="bg-gradient-to-br from-accent to-primary p-4 w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Building2 className="h-7 w-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-3xl mb-3">For Institutions & Companies</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Partner with bright young minds to innovate, co-create, and solve real-world challenges.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {forPartners.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Zap className="h-4 w-4 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="h-14 px-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow" 
                onClick={() => window.open('https://wa.me/917034365083', '_blank')}
              >
                Accepting Early Collaboration & Partnership
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-32 bg-gradient-accent relative overflow-hidden">
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
              Join Connectly<br />Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Where innovation meets opportunity. Start collaborating, creating, and conquering your future.
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
                    Join Now
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/xskills">
                    <Button size="lg" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 h-14 px-8 text-base font-semibold">
                      Explore Xskills
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

export default Connectly;
