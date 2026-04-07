import SEO from "../components/SEO";
import { Phone, ShieldCheck, Star, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Top Rated Plumber Lexington MA | Dellarocco Plumbing & Heating" 
        description="Looking for a reliable plumber in Lexington, MA? Dellarocco Plumbing & Heating provides expert plumbing, boiler, and heating repair services. Call us today!" 
      />

      {/* Hero Section */}
      <section className="bg-trust-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-brand text-accent-gold text-shadow-gold leading-none mb-6 tracking-tight">
              DELLAROCCO
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white uppercase tracking-wider">
              Lexington’s Trusted Plumbing & Heating
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Professional plumbing and heating solutions you can count on. Clean, reliable, and local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:7818621049" className="bg-accent-gold text-trust-blue px-8 py-4 rounded font-black text-xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg">
                <Phone size={24} /> (781) 862-1049
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-trust-blue transition-all">
                Request Service
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest opacity-80">
              <span className="flex items-center gap-2"><ShieldCheck className="text-accent-gold" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Star className="text-accent-gold" /> 5-Star Rated</span>
              <span className="flex items-center gap-2"><MapPin className="text-accent-gold" /> Lexington Area</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-accent-gold font-brand tracking-wide">Free Estimate</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-gold" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-gold" />
                <select className="w-full bg-white/10 border border-white/20 rounded p-3 text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-gold">
                  <option value="">Service Needed</option>
                  <option value="plumbing">Plumbing Repair</option>
                  <option value="heating">Heating & Boiler</option>
                  <option value="water-heater">Water Heater</option>
                </select>
                <button type="submit" className="w-full bg-accent-gold text-trust-blue py-4 rounded font-black text-lg hover:bg-opacity-90 transition-all">Submit</button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* Trust Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-trust-blue uppercase">Quality. Roots. Service.</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Dellarocco Plumbing and Heating, Inc., we provide clean, high-quality workmanship. Whether it's a leak or a boiler replacement, we get the job done right the first time.
          </p>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Plumbing", desc: "Precision residential plumbing.", link: "/services" },
              { title: "Heating", desc: "Expert boiler and system repair.", link: "/services" },
              { title: "Water Heaters", desc: "Tank and tankless solutions.", link: "/services" },
              { title: "Maintenance", desc: "Reliable preventative care.", link: "/services" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-trust-blue uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <Link to={service.link} className="text-accent-gold font-black uppercase text-xs tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                  Details <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-trust-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-brand text-accent-gold text-shadow-gold mb-8 tracking-tight">The Difference</h2>
              <ul className="space-y-6">
                {[
                  { title: "Local Experts", desc: "We know Lexington homes and codes." },
                  { title: "Clean Work", desc: "Shoe covers and floor protection always." },
                  { title: "Responsive", desc: "We show up when we say we will." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-accent-gold shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                      <p className="opacity-70 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/plumbing-van/800/500" 
                alt="Service Van" 
                className="rounded-xl shadow-2xl border-4 border-accent-gold/20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Fantastic service. Responded immediately and fixed the issue cleanly. Highly recommend!",
                author: "Sarah T.",
                location: "Lexington"
              },
              {
                quote: "Finally, a heating contractor you can trust. Top-tier service.",
                author: "Mark R.",
                location: "Winchester"
              }
            ].map((testi, idx) => (
              <div key={idx} className="bg-light-gray p-8 rounded-xl border border-gray-100">
                <div className="flex gap-1 text-accent-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-gray-700 mb-4">"{testi.quote}"</p>
                <p className="font-bold text-trust-blue text-sm uppercase tracking-wider">{testi.author} – {testi.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 bg-accent-gold text-trust-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-brand text-shadow-gold mb-6 tracking-tight">NEED HELP NOW?</h2>
          <p className="text-xl font-bold uppercase tracking-widest mb-8 opacity-80">Call the professionals</p>
          <a href="tel:7818621049" className="text-5xl md:text-8xl font-brand hover:scale-105 transition-transform block mb-4">
            (781) 862-1049
          </a>
        </div>
      </section>
    </div>
  );
}
