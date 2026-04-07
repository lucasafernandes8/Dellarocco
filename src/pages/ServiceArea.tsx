import SEO from "../components/SEO";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function ServiceArea() {
  const towns = [
    {
      name: "Lexington, MA",
      desc: "If you are looking for a highly-rated plumber in Lexington MA, you are in the right place. We are deeply familiar with the homes in this area. From historic home plumbing updates to emergency heating repair in Lexington MA, we are your local experts."
    },
    {
      name: "Arlington, MA",
      desc: "Need a plumber in Arlington MA? We provide fast, reliable plumbing and boiler repair services to Arlington residents. We understand the specific heating needs of Arlington homes and are ready to keep your systems running smoothly."
    },
    {
      name: "Burlington, MA",
      desc: "When you need plumbing services in Burlington MA, Dellarocco is the team to call. We handle everything from routine water heater maintenance to complex heating repair in Burlington MA, ensuring your home stays comfortable year-round."
    },
    {
      name: "Bedford, MA",
      desc: "Finding a trustworthy plumber in Bedford MA doesn't have to be stressful. We offer premium, clean, and responsive plumbing and heating services to homeowners throughout Bedford."
    },
    {
      name: "Woburn, MA",
      desc: "For expert plumbing and boiler repair in Woburn MA, count on our experienced technicians. We pride ourselves on quick response times and high-quality workmanship for all Woburn residents."
    },
    {
      name: "Winchester, MA",
      desc: "We frequently provide high-end plumbing services and heating repair in Winchester MA. Whether you need a bathroom fixture upgraded or an emergency boiler fix, we deliver exceptional service to Winchester homeowners."
    },
    {
      name: "Belmont, MA",
      desc: "If you require a reliable plumber in Belmont MA, look no further. We offer comprehensive plumbing solutions and dedicated heating repair in Belmont MA, always treating your home with the utmost respect."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Service Area | Plumber in Arlington, Belmont, Burlington MA" 
        description="Dellarocco Plumbing & Heating proudly serves Lexington, Arlington, Burlington, Bedford, Woburn, Winchester, and Belmont. Request service today." 
      />

      {/* Hero */}
      <section className="bg-trust-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-brand text-accent-gold text-shadow-gold mb-6 tracking-tight">Service Area</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto uppercase font-bold tracking-widest">
            Proudly Serving Lexington & Beyond
          </p>
        </div>
      </section>

      {/* Towns Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {towns.map((town, idx) => (
              <div key={idx} className="flex gap-6 items-start p-8 rounded-2xl bg-light-gray border border-gray-100">
                <div className="bg-accent-gold/10 p-3 rounded-full shrink-0">
                  <MapPin className="text-accent-gold" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-trust-blue tracking-tight uppercase">{town.name}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{town.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-trust-blue text-white p-12 rounded-3xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Don't see your town?</h3>
            <p className="text-lg opacity-80 mb-8">We frequently travel to surrounding areas. Give us a call!</p>
            <a href="tel:7818621049" className="bg-accent-gold text-trust-blue px-10 py-5 rounded font-black text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 inline-flex">
              <Phone size={24} /> Call (781) 862-1049
            </a>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold uppercase tracking-widest text-gray-400">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-accent-gold" size={20} /> Fully Licensed</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-accent-gold" size={20} /> Fully Insured</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-accent-gold" size={20} /> Local Experts</span>
          </div>
        </div>
      </section>
    </div>
  );
}
