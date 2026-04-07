import SEO from "../components/SEO";
import { Star, Quote, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reviews() {
  const reviews = [
    {
      name: "James P.",
      location: "Arlington, MA",
      text: "I can't say enough good things about Dellarocco. They came out to fix a complex boiler issue that another company couldn't figure out. They were polite, incredibly clean, and clearly knew what they were doing. They are our go-to plumbers from now on.",
      stars: 5
    },
    {
      name: "Elena M.",
      location: "Belmont, MA",
      text: "We had a major pipe burst on a Sunday. Dellarocco Plumbing responded so quickly and saved our basement from severe water damage. True professionals who care about their customers.",
      stars: 5
    },
    {
      name: "David K.",
      location: "Lexington, MA",
      text: "It is so hard to find reliable contractors these days. Dellarocco shows up on time, gives fair pricing, and leaves the work area spotless. I highly recommend them for any plumbing services.",
      stars: 5
    },
    {
      name: "Sarah T.",
      location: "Lexington, MA",
      text: "Dellarocco Plumbing is fantastic. We had an emergency leak in our older colonial home. They responded immediately, fixed the issue cleanly, and were incredibly professional. Highly recommend!",
      stars: 5
    },
    {
      name: "Mark R.",
      location: "Winchester, MA",
      text: "Finally, a heating contractor you can trust. They repaired our aging boiler quickly and charged exactly what they quoted. Top-tier service.",
      stars: 5
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Real Reviews from Local Homeowners | Dellarocco Plumbing & Heating" 
        description="Read what homeowners across Lexington and the surrounding towns have to say about Dellarocco Plumbing & Heating's expert services." 
      />

      {/* Hero */}
      <section className="bg-trust-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-brand text-accent-gold text-shadow-gold mb-6 tracking-tight">Reviews</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto uppercase font-bold tracking-widest">
            What Your Neighbors Say
          </p>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-trust-blue text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <Quote className="absolute -top-10 -left-10 text-accent-gold opacity-10" size={300} />
            <div className="relative z-10">
              <div className="flex gap-2 text-accent-gold mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={32} fill="currentColor" />)}
              </div>
              <h2 className="text-3xl md:text-5xl font-brand text-accent-gold text-shadow-gold mb-8 leading-tight">
                "They are very prompt, efficient and reliable. I have recommended their services to a few friends already."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 px-0 bg-accent-gold"></div>
                <p className="text-2xl font-bold uppercase tracking-widest">Linda F.</p>
              </div>
              <p className="mt-8 text-lg opacity-70 leading-relaxed max-w-2xl">
                At Dellarocco Plumbing & Heating, we take pride in the trust our community places in us. Linda's experience reflects our core commitment to being the most dependable service provider in Lexington. We don't just fix pipes; we build lasting relationships through quality work and honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-brand text-trust-blue text-center mb-16 uppercase tracking-tight">More Happy Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-light-gray p-8 rounded-2xl border border-gray-100 flex flex-col h-full relative">
                <Quote className="absolute top-4 right-4 text-accent-gold opacity-10" size={48} />
                <div className="flex gap-1 text-accent-gold mb-4">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-gray-700 mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-trust-blue uppercase tracking-tight">{review.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight text-trust-blue uppercase">Ready to experience the difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-accent-gold text-trust-blue px-10 py-5 rounded font-black text-xl hover:bg-opacity-90 transition-all shadow-lg">
              Schedule Your Service
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
