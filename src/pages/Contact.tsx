import SEO from "../components/SEO";
import { Phone, Clock, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact Dellarocco Plumbing & Heating | Lexington MA" 
        description="Get in touch with Dellarocco Plumbing & Heating for fast, reliable plumbing and heating services in Lexington, MA and surrounding towns." 
      />

      {/* Hero */}
      <section className="bg-trust-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-brand text-accent-gold text-shadow-gold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto uppercase font-bold tracking-widest">
            Fast, Professional Help
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Info Side */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-trust-blue">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-accent-gold/10 p-4 rounded-xl">
                    <Phone className="text-accent-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Call Us Directly</h3>
                    <a href="tel:7818621049" className="text-3xl font-bold text-accent-gold hover:opacity-80 transition-opacity">
                      (781) 862-1049
                    </a>
                    <p className="text-gray-500 mt-2 italic font-medium text-sm">Fastest response for emergencies</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-accent-gold/10 p-4 rounded-xl">
                    <Clock className="text-accent-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Operating Hours</h3>
                    <p className="text-lg text-gray-700">Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-accent-gold font-bold mt-1 uppercase tracking-widest text-xs">Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-accent-gold/10 p-4 rounded-xl">
                    <MapPin className="text-accent-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Service Area</h3>
                    <p className="text-lg text-gray-700">Lexington, Arlington, Burlington, Bedford, Woburn, Winchester, and Belmont.</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-light-gray rounded-2xl h-64 flex items-center justify-center border border-gray-200 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/lexington-map/800/400" 
                  alt="Service Area Map" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-trust-blue/10">
                  <MapPin size={48} className="text-accent-red mb-2 drop-shadow-lg" />
                  <p className="font-bold text-trust-blue bg-white/90 px-4 py-2 rounded-full shadow-md">Serving Lexington & Surrounding Areas</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-light-gray p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 tracking-tight text-trust-blue">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent-red" placeholder="Your Name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent-red" placeholder="(555) 555-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent-red" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Service Address/Town</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent-red" placeholder="Where do you need service?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">How can we help you?</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent-red" placeholder="Briefly describe your plumbing or heating issue"></textarea>
                </div>
                <button type="submit" className="w-full bg-accent-gold text-trust-blue py-5 rounded-lg font-black text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Send size={20} /> Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
