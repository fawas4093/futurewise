import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Wrench, Award, Lightbulb } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CheckCircle2,
      title: "Domain Clarification Sessions",
      description: "Find your true calling with expert guidance",
    },
    {
      icon: Wrench,
      title: "Hands-on Workshops",
      description: "Learn by doing with practical projects",
    },
    {
      icon: Award,
      title: "Certification Programmes",
      description: "Industry-recognized credentials",
    },
    {
      icon: Lightbulb,
      title: "Project Development & Guidance",
      description: "Build real-world solutions with mentorship",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            FEATURES
          </h2>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl border border-border text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
