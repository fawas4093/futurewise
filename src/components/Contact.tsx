import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, QrCode } from "lucide-react";
import { fadeInUp, scaleIn } from "@/lib/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              CONTACT / SCAN TO KNOW MORE
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your journey? Get in touch with us
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12 shadow-glow"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <QrCode className="h-16 w-16" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Mr. Mohammed Shefin CT
                </h3>
                <p className="text-xl opacity-90 mb-2">CEO & Founder</p>
                <p className="text-lg opacity-80 mb-6">Company Number: [Company Number]</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+917034365083"
                    className="text-lg hover:underline"
                  >
                    +91 70343 65083
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+917306641423"
                    className="text-lg hover:underline"
                  >
                    +91 73066 41423
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:connectfuturewise@gmail.com"
                    className="text-lg hover:underline"
                  >
                    connectfuturewise@gmail.com
                  </a>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 mt-6 text-lg px-8"
                  onClick={() => window.open("https://wa.me/917034365083", "_blank")}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
