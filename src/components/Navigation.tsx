import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Xskills", path: "/xskills" },
    { name: "DevStudio", path: "/devstudio" },
    { name: "Connectly", path: "/connectly" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  // Determine which logo to use based on current route
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

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={getLogoPath()} 
                alt={getLogoAlt()} 
                className="object-contain h-16 w-16 max-h-16 max-w-16"
                style={{ width: '4rem', height: '4rem' }}
              />
              <span className="text-xl font-bold text-foreground">
                FutureWise Edventures
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.path} variants={staggerItem}>
                <Link
                  to={link.path}
                  className={`relative transition-colors font-medium ${
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.span>
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={() => window.open('https://wa.me/917034365083', '_blank')}>
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 space-y-4 bg-card rounded-lg shadow-card overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={staggerItem}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2 transition-colors font-medium rounded-md ${
                        location.pathname === link.path
                          ? "text-primary font-semibold bg-primary/5"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="px-4"
                  variants={staggerItem}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        window.open('https://wa.me/917034365083', '_blank');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
