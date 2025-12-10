import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      review: "FutureWise Edventures transformed my learning experience. The hands-on approach and real-world projects helped me land my dream internship. The mentors are incredibly supportive and knowledgeable."
    },
    {
      name: "Rajesh Kumar",
      role: "Engineering Graduate",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      review: "The Xskills program gave me the practical skills I needed to stand out in job interviews. The industry-focused training and certifications were exactly what I was looking for."
    },
    {
      name: "Priya Sharma",
      role: "Data Science Enthusiast",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      review: "DevStudio's innovation lab is amazing! I got to work on real IoT projects and build products from scratch. This experience has been invaluable for my career growth."
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      review: "Connectly connected me with amazing peers from different colleges. Working on cross-college projects expanded my network and skills beyond what I imagined possible."
    },
    {
      name: "Ananya Patel",
      role: "Product Design Student",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
      rating: 5,
      review: "The mentorship I received through FutureWise has been life-changing. From domain clarification to building a strong portfolio, they guided me every step of the way."
    },
    {
      name: "David Wilson",
      role: "IoT Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      review: "The hands-on workshops and real-world project experience at DevStudio prepared me perfectly for my current role. I highly recommend their programs to anyone serious about tech."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF5FF' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #6B46C1 0%, #9333EA 50%, #A855F7 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Quote className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">What Our Students Say</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Real stories from students who transformed their careers with FutureWise Edventures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={ref} className="py-20 md:py-32" style={{ backgroundColor: '#FAF5FF' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Card className="h-full bg-white border-2 transition-all duration-300 hover:shadow-xl hover:border-purple-500" style={{ borderColor: '#E9D5FF' }}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <Quote className="h-8 w-8 mb-4" style={{ color: '#9333EA', opacity: 0.3 }} />
                      <p className="leading-relaxed text-sm md:text-base" style={{ color: '#4B5563' }}>
                        "{testimonial.review}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid #E9D5FF' }}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover border-2"
                        style={{ borderColor: '#9333EA' }}
                      />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base" style={{ color: '#1F2937' }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm" style={{ color: '#6B7280' }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

