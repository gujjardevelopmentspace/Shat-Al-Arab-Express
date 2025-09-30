import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground/95 text-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Shat Al Arab Express Delivery Logo" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-300 hand-drawn animate-gentle-bounce"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted delivery partner in the Middle East. Fast, reliable, and secure logistics solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                      <li><Link to="/services" className="hover:opacity-70 transition-opacity">Our Services</Link></li>
                      <li><Link to="/track" className="hover:opacity-70 transition-opacity">Track Parcel</Link></li>
                      <li><Link to="/about" className="hover:opacity-70 transition-opacity">About Us</Link></li>
                      <li><Link to="/faq" className="hover:opacity-70 transition-opacity">FAQ</Link></li>
                      <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link></li>
                      <li><Link to="/careers" className="hover:opacity-70 transition-opacity">Careers</Link></li>
                    </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Same-Day Delivery</li>
              <li>International Shipping</li>
              <li>E-Commerce Fulfillment</li>
              <li>Corporate Logistics</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@shatalarab.ae</span>
              </li>
            </ul>
            <p className="text-sm mt-4 font-semibold">24/7 Support Available</p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Shat Al Arab Express Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
