import { Link, Outlet } from "react-router-dom";
import { Phone, ShieldCheck, Star, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-trust-blue text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-brand text-accent-gold text-shadow-gold tracking-tight leading-none">DELLAROCCO</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-90">Plumbing & Heating, Inc.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
            <Link to="/services" className="hover:text-accent-gold transition-colors">Services</Link>
            <Link to="/about" className="hover:text-accent-gold transition-colors">About</Link>
            <Link to="/reviews" className="hover:text-accent-gold transition-colors">Reviews</Link>
            <Link to="/service-area" className="hover:text-accent-gold transition-colors">Service Area</Link>
            <Link to="/contact" className="hover:text-accent-gold transition-colors">Contact</Link>
            <a href="tel:7818621049" className="bg-accent-gold text-trust-blue px-4 py-2 rounded font-black flex items-center gap-2 hover:scale-105 transition-all">
              <Phone size={16} /> (781) 862-1049
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-trust-blue border-t border-white/10 flex flex-col p-4 space-y-4 font-medium animate-in slide-in-from-top duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link to="/service-area" onClick={() => setIsMenuOpen(false)}>Service Area</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:7818621049" className="bg-accent-gold text-trust-blue text-center py-3 rounded font-black flex justify-center items-center gap-2">
              <Phone size={18} /> Call Now: (781) 862-1049
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-trust-blue text-white pt-12 pb-20 md:pb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Dellarocco Plumbing & Heating</h3>
            <p className="text-sm opacity-80 mb-4">
              Lexington’s trusted experts for residential plumbing and heating since [Year]. Clean, professional, and reliable service you can count on.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-accent-gold" /> Licensed</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-accent-gold" /> Insured</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services">Plumbing Services</Link></li>
              <li><Link to="/services">Heating & Boiler Repair</Link></li>
              <li><Link to="/services">Water Heaters</Link></li>
              <li><Link to="/service-area">Service Area</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:7818621049">(781) 862-1049</a></li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Serving Lexington, MA & Surrounding Towns</li>
              <li className="mt-4 font-bold text-white">Mon - Fri: 7:00 AM - 6:00 PM</li>
              <li className="text-accent-gold font-bold italic">Emergency Service Available</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Dellarocco Plumbing and Heating, Inc. All Rights Reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <a href="tel:7818621049" className="sticky-cta flex items-center justify-center gap-2 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <Phone size={20} /> CALL NOW FOR FAST SERVICE
      </a>
    </div>
  );
}
