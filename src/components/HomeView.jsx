import React from 'react';

export default function HomeView({
  tickets,
  setTickets,
  showBooking
}) {
  const humanCost = tickets * 8;
  const savings = humanCost - 499;

  return (
    <main id="home-view">
      <section className="relative pt-20 pb-12 sm:pt-32 px-6 text-center">
        <div data-aos="zoom-out" data-aos-duration="1500">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-accent/30 bg-accent/5 accent-color text-[10px] font-black uppercase tracking-widest">
            Enterprise Business Automation
          </div>
          <h1 className="hero-title mb-8 tracking-tighter uppercase">
            THE 24/7 <br /> <span className="accent-color">Receptionist.</span>
          </h1>
          <p className="opacity-70 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Stop losing revenue to slow responses. Integrate a high-IQ AI receptionist by MetaEdge that qualifies leads and handles bookings while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={showBooking} 
              className="accent-bg px-12 py-6 rounded-2xl transition-all shadow-2xl hover:scale-105 uppercase tracking-widest text-sm font-black"
            >
              Start Free Integration
            </button>
            <a href="#advantages" className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-12 py-6 rounded-2xl font-black transition-all hover:bg-black/10 dark:hover:bg-white/10 uppercase tracking-widest text-sm flex items-center justify-center">
              Learn Advantages
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-20 border-y border-black/5 dark:border-white/5 overflow-hidden">
        <div className="marquee-track flex gap-20 opacity-30">
          {['whatsapp', 'shopify', 'wordpress', 'slack', 'hubspot', 'salesforce'].map((brand) => (
            <span key={brand} className="text-2xl font-black italic uppercase tracking-tighter">
              <i className={`fa-brands fa-${brand} mr-2`}></i> {brand}
            </span>
          ))}
          {/* Duplicate for loop */}
          {['whatsapp', 'shopify'].map((brand) => (
            <span key={`${brand}-dup`} className="text-2xl font-black italic uppercase tracking-tighter">
              <i className={`fa-brands fa-${brand} mr-2`}></i> {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto premium-card p-10 sm:p-20 rounded-[4rem]" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Calculate Your ROI</h2>
            <p className="opacity-50 uppercase text-[10px] font-black tracking-widest">Monthly cost of human staffing vs MetaEdge AI</p>
          </div>
          
          <div className="max-w-xl mx-auto rounded-2xl mb-10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl border border-white/10">
            <p className="text-center text-lg md:text-xl font-semibold text-white leading-relaxed">
              Handle <span className="text-emerald-400 font-bold">{tickets}+</span> support tickets monthly while saving over
              <span className="text-emerald-400 font-bold ml-1">${savings.toLocaleString()}</span> every month by switching to <span className="text-indigo-400 font-bold">MetaEdge AI</span>.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Support Tickets / Month</span>
                <span className="accent-color font-black">{tickets}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="100" 
                value={tickets} 
                className="w-full cursor-pointer"
                onChange={(e) => setTickets(parseInt(e.target.value))} 
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <p className="opacity-50 text-[9px] font-black uppercase mb-2 tracking-widest">Est. Human Cost</p>
                <p className="text-3xl font-black">${humanCost.toLocaleString()}</p>
              </div>
              <div className="p-8 rounded-3xl accent-bg bg-opacity-10 border accent-border">
                <p className="text-[9px] font-black uppercase mb-2 tracking-widest opacity-80">MetaEdge AI Cost</p>
                <p className="text-3xl font-black">$499</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Subheader - FIXED COLORS */}
      <h2 className="relative text-center text-2xl font-bold transition-colors duration-400">
        Transform Your Business With Our Services
        <span className="block mx-auto mt-2 h-1 w-12 rounded-full transition-all duration-400 accent-bg"></span>
      </h2>

      <section id="advantages" className="py-24 px-6">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-16">
          <ServiceCard icon="fa-bolt-lightning" title="Zero Latency" desc="Capture leads in real-time. MetaEdge bots engage visitors in under 1 second." delay="0" />
          <ServiceCard icon="fa-calendar-check" title="Auto-Booking" desc="Direct synchronization with your calendar. AI qualifies and sets appointments." delay="150" />
          <ServiceCard icon="fa-chart-pie" title="Cost Reduction" desc="Replace expensive live-chat teams with one intelligent integration." delay="300" />
          <ServiceCard icon="fa-headset" title="24/7 Support" desc="Provide instant assistance around the clock. Help anytime, anywhere." delay="0" />
          <ServiceCard icon="fa-language" title="Multi-Language" desc="Serve global customers effortlessly in multiple languages." delay="150" />
          <ServiceCard icon="fa-brain" title="Self-Learning AI" desc="The system improves with every interaction for smarter responses." delay="300" />
        </div>
      </section>

      {/* Overview Subheader - FIXED COLORS */}
      <h2 className="relative text-center text-2xl font-bold transition-colors duration-400">
        An Overview Of What We Offer And How It Helps You Grow
        <span className="block mx-auto mt-2 h-1 w-12 rounded-full transition-all duration-400 accent-bg"></span>
      </h2>

      <section id="receptionist" className="py-32 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] uppercase">
              A Front Desk That <br /><span className="text-outline">Never Sleeps.</span>
            </h2>
            <p className="opacity-60 text-lg mb-12 leading-relaxed font-medium">
              Our MetaEdge integration acts as your digital gatekeeper. It greets visitors, answers questions, and qualifies leads.
              By intelligently engaging users the moment they arrive, it ensures only high-intent prospects move forward, saving your team time while increasing conversion rates.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-circle-check accent-color"></i>
                <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp Ready</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-circle-check accent-color"></i>
                <span className="text-[10px] font-black uppercase tracking-widest">CRM Integrated</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full" data-aos="fade-left">
            <div className="premium-card p-2 rounded-[3rem]">
              <div className="bg-black rounded-[2.8rem] p-10 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-sm max-w-[85%] font-medium text-white">
                      Welcome! Looking to book a consultation?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#3b82f6] p-5 rounded-3xl rounded-tr-none text-sm max-w-[85%] text-white font-bold">
                      Yes, I need a MetaEdge bot.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-sm max-w-[85%] font-medium text-white">
                      Perfect. tomorrow at 10 AM works!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">The MetaEdge Flow</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="relative p-12 border-l accent-border" data-aos="fade-up">
            <span className="absolute -left-3 top-12 w-6 h-6 accent-bg rounded-full border-4 border-white dark:border-black"></span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-widest">01. Train</h4>
            <p className="opacity-50 font-medium">We scrape your documentation into a custom vector brain.</p>
          </div>
          <div className="relative p-12 border-l accent-border" data-aos="fade-up" data-aos-delay="200">
            <span className="absolute -left-3 top-12 w-6 h-6 accent-bg rounded-full border-4 border-white dark:border-black"></span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-widest">02. Embed</h4>
            <p className="opacity-50 font-medium">A single line of code integrates MetaEdge anywhere.</p>
          </div>
          <div className="relative p-12 border-l accent-border" data-aos="fade-up" data-aos-delay="400">
            <span className="absolute -left-3 top-12 w-6 h-6 accent-bg rounded-full border-4 border-white dark:border-black"></span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-widest">03. Scale</h4>
            <p className="opacity-50 font-medium">Handle thousands of conversations simultaneously.</p>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="hero-title font-black mb-16 tracking-tighter uppercase">Ready to Automate?</h2>
          <button 
            onClick={showBooking} 
            className="w-full max-w-lg mx-auto bg-black dark:bg-white text-white dark:text-black font-black px-8 py-8 rounded-[2rem] text-xl md:text-2xl uppercase tracking-tighter hover:scale-105 transition-all shadow-2xl block"
          >
            Integrate MetaEdge Now
          </button>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, desc, delay }) {
  return (
    <div className="premium-card p-12 rounded-[3.5rem] h-full flex flex-col" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`fa-solid ${icon} accent-color text-4xl mb-10`}></i>
      <h3 className="text-2xl font-black mb-6 uppercase italic">{title}</h3>
      <p className="opacity-60 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}