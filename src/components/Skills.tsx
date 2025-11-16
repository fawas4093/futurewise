import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Rocket, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mentorshipPackages = [
    {
      icon: Sparkles,
      title: "Ignite",
      description: "Kickstart your journey with free sessions and basic exposure.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Rocket,
      title: "Accelerate",
      description: "Gain hands-on skills through practical workshops.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Trophy,
      title: "Dominate",
      description: "Master your domain with expert-led certifications.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SKILLS – UPSKILL THE FUTURE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Xskills helps students discover their true domain and grow into
            industry-ready experts through free sessions, hands-on workshops, and
            professional certifications — shaping a clear path to their future.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MENTORSHIP PACKAGES
          </motion.h3>
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {mentorshipPackages.map((pkg, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  className="bg-card border-border h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader>
                    <motion.div 
                      className={`${pkg.bgColor} ${pkg.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <pkg.icon className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
