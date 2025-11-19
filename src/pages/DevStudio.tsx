import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Cpu, Code, GraduationCap, CheckCircle2, Mail, Phone, Wrench, Lightbulb, Smartphone, Users } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const DevStudio = () => {
  const whatWeBuild = [
    {
      icon: FlaskConical,
      title: "Product R&D and Innovation Lab",
      description: "",
      features: [
        "Rapid prototyping",
        "Concept-to-deployment development",
        "Experimentation with emerging tech",
        "Innovation challenges and internal hackathons"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Cpu,
      title: "IoT & Hardware Development",
      description: "",
      features: [
        "Designing and manufacturing our in-house FutureWise IoT Kit",
        "PCB design, embedded systems, automation",
        "Real-world project development for institutions & industries"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Code,
      title: "Software & App Development",
      description: "",
      features: [
        "Web and mobile app development",
        "Cloud & backend systems",
        "AI-powered tools and automation solutions",
        "Custom applications for education and industry"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ];

  const trainingAreas = [
    {
      icon: Cpu,
      title: "IoT & electronics",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Code,
      title: "Python development",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Smartphone,
      title: "App development",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Wrench,
      title: "Industry-grade product-building workflows",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const whyDevStudio = [
    {
      icon: CheckCircle2,
      title: "A real product-building ecosystem",
    },
    {
      icon: CheckCircle2,
      title: "Opportunities for students to work on in-house & external projects",
    },
    {
      icon: CheckCircle2,
      title: "Innovation-driven learning",
    },
    {
      icon: CheckCircle2,
      title: "A pipeline to contribute to FutureWise products",
    },
  ];

  return (
    <div className="min-h-screen devstudio-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#2D531A' }}>
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
              <span className="text-white text-sm font-medium">DevStudio by FutureWise Edventures</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight"
              variants={fadeInUp}
            >
              Create Beyond Limits.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
              variants={fadeInUp}
            >
              DevStudio is the dedicated product development and innovation wing of FutureWise Edventures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Wrench className="h-8 w-8 text-primary" />
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                What We Build
              </h2>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {whatWeBuild.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
              >
                <Card className={`${item.bgColor} ${item.borderColor} border-2 h-full`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardHeader>
                      <motion.div 
                        className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-8 w-8" />
                      </motion.div>
                      <CardTitle className={`text-2xl mb-4 ${item.color}`}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                            <div className="mt-1">
                              <CheckCircle2 className={`h-4 w-4 ${item.color}`} />
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

      {/* Training & Mentorship Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Training & Mentorship
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              The DevStudio team mentors students through hands-on workshops in:
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {trainingAreas.map((area, index) => (
              <motion.div
                key={index}
                className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border text-center"
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`${area.bgColor} ${area.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className="h-7 w-7" />
                </motion.div>
                <h3 className="text-base font-semibold text-foreground">
                  {area.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-foreground font-semibold italic">
              "Students learn skills not from books, but from building real products."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why DevStudio Exists Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Why DevStudio Exists
              </h2>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Colleges teach theory.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Companies need creators.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-8">
                DevStudio bridges that gap.
              </p>
            </motion.div>

            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground mb-6 text-center">
                We provide:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyDevStudio.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-foreground font-semibold">
                DevStudio bridges the gap between learning and doing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#2D531A' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
              Contact
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              For collaborations, projects, or internships:
            </p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={staggerItem}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20"
              >
                <Mail className="h-6 w-6 text-white" />
                <a
                  href="mailto:connectfuturewise@gmail.com"
                  className="text-lg md:text-xl text-white hover:underline"
                >
                  connectfuturewise@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20"
              >
                <Phone className="h-6 w-6 text-white" />
                <a
                  href="tel:+917034365083"
                  className="text-lg md:text-xl text-white hover:underline"
                >
                  +91 70343 65083
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevStudio;
