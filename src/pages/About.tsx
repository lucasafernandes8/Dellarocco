import SEO from "../components/SEO";
import { ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="About Dellarocco Plumbing & Heating | Lexington MA" 
        description="Learn about Dellarocco Plumbing & Heating, Lexington's most trusted local contractor for high-quality residential plumbing and heating." 
      />

      {/* Hero */}
      <section className="bg-trust-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-brand text-accent-gold text-shadow-gold mb-6 tracking-tight">About Us</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto uppercase font-bold tracking-widest">
            Lexington's Trusted Choice
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight text-trust-blue">Lexington's Trusted Choice for Home Comfort</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For years, homeowners throughout the Lexington area have trusted Dellarocco Plumbing and Heating, Inc. with their most critical home systems. We aren't a massive, faceless corporation. We are your local neighbors, and we have built our business on a simple foundation: doing the job right, every single time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you live in a historic home requiring careful updates or a newer build needing maintenance, we have the experience to handle it. We treat every home with the same level of care and respect we would our own.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about/800/600" 
                alt="Dellarocco Team at Work" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-accent-gold" size={24} />
                  <span className="font-bold text-trust-blue uppercase tracking-widest text-sm">Fully Licensed & Insured</span>
                </div>
                <p className="text-xs text-gray-500">Protecting your home and our team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight text-trust-blue">Our Commitment to You</h2>
          <p className="text-lg text-center text-gray-700 mb-16">
            We know that inviting a contractor into your home requires trust. That is why we focus heavily on professionalism, reliability, and clean workmanship. When you hire us, you can expect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Respect for Your Home",
                desc: "We use drop cloths, wear shoe covers, and leave our workspace cleaner than we found it."
              },
              {
                title: "Honest Advice",
                desc: "We never push you into services you don't need. We explain the issue clearly and offer the best solutions for your budget and home."
              },
              {
                title: "Dependable Service",
                desc: "If we give you a time, we stick to it. Your time is valuable, and we respect that."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <CheckCircle2 className="text-accent-gold mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight text-trust-blue uppercase">Ready to experience the difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-accent-gold text-trust-blue px-10 py-5 rounded font-black text-xl hover:bg-opacity-90 transition-all">
              Contact Us Today
            </Link>
            <a href="tel:7818621049" className="border-2 border-trust-blue text-trust-blue px-10 py-5 rounded font-bold text-xl hover:bg-trust-blue hover:text-white transition-all flex items-center justify-center gap-2">
              <Phone size={24} /> (781) 862-1049
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
