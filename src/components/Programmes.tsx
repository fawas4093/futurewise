import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Boxes, Cpu, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Programmes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programmes = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Turn raw numbers into powerful insights. Master data visualization, statistical analysis, and business intelligence tools like Excel, Power BI, and Tableau to analyze, visualize, and present data like a pro.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Boxes,
      title: "Product Designing & Prototyping",
      description:
        "Turn ideas into functional, user-centric solutions. Learn 3D modeling, CAD design, and prototyping using Fusion 360, SolidWorks, and Adobe XD.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Cpu,
      title: "IoT & Electronics",
      description:
        "Build smart, connected devices from concept to prototype. Work with Arduino, Raspberry Pi, and ESP32 to design, program, and deploy intelligent systems for automation and smart tech.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Code2,
      title: "Programming & Software Development",
      description:
        "Learn Python, Java, and C++ to build, test, and deploy software applications — preparing you for careers in software engineering and app development.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="programmes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PROGRAMMES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning paths designed to prepare you for the future of work
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {programmes.map((programme, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border h-full">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardHeader>
                          <motion.div 
                            className={`${programme.bgColor} ${programme.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <programme.icon className="h-8 w-8" />
                          </motion.div>
                          <CardTitle className="text-2xl">{programme.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            {programme.description}
                          </CardDescription>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16 h-10 w-10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Programmes;
