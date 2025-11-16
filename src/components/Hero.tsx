import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QrCode, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="FutureWise Edventures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={fadeInUp}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FutureWise Edventures
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learning with clarity • Skills • Careers
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Creating a generation of students who graduate with{" "}
            <span className="text-primary font-semibold">clarity</span>,{" "}
            <span className="text-secondary font-semibold">skills</span>, and the
            power to shape their own{" "}
            <span className="text-accent font-semibold">future</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8"
                onClick={() => scrollToSection("programmes")}
              >
                Explore Programmes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                onClick={() => scrollToSection("contact")}
              >
                <QrCode className="mr-2 h-5 w-5" />
                Scan to Know More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
