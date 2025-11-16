import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer 
      ref={ref}
      className="bg-foreground text-background py-8"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center justify-center space-x-3"
            variants={staggerItem}
          >
            <img 
              src={new URL("../assets/logo.png", import.meta.url).href} 
              alt="FutureWise Edventures" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold">FutureWise Edventures</span>
          </motion.div>
          <motion.p 
            className="text-sm opacity-80"
            variants={staggerItem}
          >
            Learning with clarity • Skills • Careers
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-4"
            variants={staggerItem}
          >
            <motion.a
              href="https://www.instagram.com/futurewise_ed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
          </motion.div>
          <motion.div 
            className="text-sm opacity-80 space-y-1"
            variants={staggerItem}
          >
            <p>FutureWise Edventures Private Limited</p>
            <p>Company Number: [Company Number]</p>
            <p>Email: connectfuturewise@gmail.com</p>
            <p>Phone: +91 70343 65083 | +91 73066 41423</p>
          </motion.div>
          <motion.p 
            className="text-sm opacity-60"
            variants={staggerItem}
          >
            © {new Date().getFullYear()} FutureWise Edventures. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
