import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const location = useLocation();

  // Determine which logo to use based on current route (same logic as Navigation)
  const getLogoPath = () => {
    const path = location.pathname.toLowerCase();
    if (path === "/xskills" || path === "/xskills/") {
      return new URL("../assets/fawa xskill.png", import.meta.url).href;
    } else if (path === "/devstudio" || path === "/devstudio/") {
      return new URL("../assets/fawa devstudio.png", import.meta.url).href;
    } else if (path === "/connectly" || path === "/connectly/") {
      return new URL("../assets/fawa connectly.png", import.meta.url).href;
    }
    return new URL("../assets/fawa home.png", import.meta.url).href;
  };

  const getLogoAlt = () => {
    const path = location.pathname.toLowerCase();
    if (path === "/xskills" || path === "/xskills/") {
      return "Xskills by FutureWise Edventures";
    } else if (path === "/devstudio" || path === "/devstudio/") {
      return "DevStudio by FutureWise Edventures";
    } else if (path === "/connectly" || path === "/connectly/") {
      return "Connectly by FutureWise Edventures";
    }
    return "FutureWise Edventures";
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/futurewiseedventures",
      ariaLabel: "Follow us on Facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/futurewise_ed",
      ariaLabel: "Follow us on Instagram"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/futurewise-edventures",
      ariaLabel: "Follow us on LinkedIn"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@futurewiseedventures",
      ariaLabel: "Follow us on YouTube"
    }
  ];

  return (
    <motion.footer 
      ref={ref}
      className="bg-white border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Brand + Description */}
          <motion.div 
            className="space-y-4"
            variants={staggerItem}
          >
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src={getLogoPath()} 
                alt={getLogoAlt()} 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">
                FutureWise Edventures
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Creating a generation of students who graduate with more than just knowledge. 
              We provide clarity, skills, and the power to shape your own future through 
              hands-on learning and mentorship.
            </p>
          </motion.div>

          {/* Middle Column - Contact Details */}
          <motion.div 
            className="space-y-4"
            variants={staggerItem}
          >
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>FutureWise Edventures Private Limited</p>
                  <p>Company Number: [Company Number]</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <a 
                  href="tel:+917034365083" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  +91 70343 65083
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <a 
                  href="tel:+917306641423" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  +91 73066 41423
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <a 
                  href="mailto:connectfuturewise@gmail.com" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  connectfuturewise@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Follow On */}
          <motion.div 
            className="space-y-4"
            variants={staggerItem}
          >
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Follow On
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label={social.ariaLabel}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <social.icon className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()}{" "}
            <Link 
              to="/" 
              className="text-primary hover:underline font-medium"
            >
              FutureWise Edventures
            </Link>
            {" | Designed & Developed by "}
            <a 
              href="https://yourdeveloper.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Fawas A Shemeer
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
