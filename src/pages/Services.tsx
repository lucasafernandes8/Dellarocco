import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, Phone, Droplets, Thermometer, Flame, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "plumbing",
      title: "Plumbing",
      icon: <Droplets className="text-accent-gold" size={32} />,
      problem: "Leaky pipes, clogged drains, or outdated fixtures can cause water damage.",
      solution: "From minor repairs to major updates, our team ensures your system runs flawlessly. Clean work, every time.",
      cta: "Schedule Plumbing"
    },
    {
      id: "heating",
      title: "Heating",
      icon: <Flame className="text-accent-gold" size={32} />,
      problem: "A failing heating system or boiler is a genuine emergency in New England.",
      solution: "We specialize in boiler repair and maintenance. We restore your heat quickly so your family stays warm.",
      cta: "Get Heating Help"
    },
    {
      id: "water-heaters",
      title: "Water Heaters",
      icon: <Thermometer className="text-accent-gold" size={32} />,
      problem: "Waking up to a freezing cold shower or a puddle of water.",
      solution: "We install and repair high-efficiency tank and tankless systems. Fast replacements to get you back to your routine.",
      cta: "Fix My Water Heater"
    },
    {
      id: "emergency",
      title: "Emergency Service",
      icon: <Zap className="text-accent-gold" size={32} />,
      problem: "Plumbing and heating emergencies don't happen on a schedule.",
      solution: "We are responsive and dependable. Dellarocco is just a phone call away when things go wrong.",
      cta: "Call Now"
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Plumbing & Heating Services Lexington MA | Dellarocco" 
        description="Expert plumbing, heating repair, and water heater installation in Lexington and surrounding towns. Professional, clean, and reliable service." 
      />

      {/* Hero */}
      <section className="bg-trust-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-brand text-accent-gold text-shadow-gold mb-6 tracking-tight">Services</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto uppercase font-bold tracking-widest">
            Expert Plumbing & Heating in Lexington
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">{service.title}</h2>
                  
                  <div className="mb-8">
                    <p className="font-bold text-accent-red mb-2 uppercase tracking-widest text-sm">The Problem:</p>
                    <p className="text-lg text-gray-700">{service.problem}</p>
                  </div>
                  
                  <div className="mb-10">
                    <p className="font-bold text-trust-blue mb-2 uppercase tracking-widest text-sm">The Solution:</p>
                    <p className="text-lg text-gray-700">{service.solution}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="bg-accent-gold text-trust-blue px-8 py-4 rounded font-black text-lg hover:bg-opacity-90 transition-all text-center">
                      {service.cta}
                    </Link>
                    <a href="tel:7818621049" className="border-2 border-trust-blue text-trust-blue px-8 py-4 rounded font-bold text-lg hover:bg-trust-blue hover:text-white transition-all text-center flex items-center justify-center gap-2">
                      <Phone size={20} /> (781) 862-1049
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="rounded-2xl shadow-xl w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-light-gray border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 tracking-tight">Why Lexington Homeowners Trust Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-accent-gold mb-4" size={32} />
              <p className="font-bold">Fully Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-accent-gold mb-4" size={32} />
              <p className="font-bold">Clean Workmanship</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-accent-gold mb-4" size={32} />
              <p className="font-bold">Upfront Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-trust-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Ready to Schedule Your Service?</h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            Don't wait for a small leak to become a disaster. Contact our experts today for fast, professional help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:7818621049" className="bg-accent-gold text-trust-blue px-10 py-5 rounded font-black text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              <Phone size={24} /> Call (781) 862-1049
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-10 py-5 rounded font-bold text-xl hover:bg-opacity-90 transition-all">
              Request Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
