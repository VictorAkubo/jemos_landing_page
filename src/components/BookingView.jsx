import React from 'react';

export default function BookingView({
  showHome,
  selectedService,
  setSelectedService,
  dropdownOpen,
  setDropdownOpen,
  handleForm
}) {
  
  const selectOption = (val) => {
    setSelectedService(val);
    setDropdownOpen(false);
  };

  return (
    <section 
      id="booking-view" 
      className="min-h-screen pt-25 px-6 pb-24 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={showHome} 
          className="mb-16 text-gray-500 hover:accent-color uppercase text-[10px] font-black tracking-[0.4em] flex items-center gap-2 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i> Return Home
        </button>
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div data-aos="fade-right">
            {/* hero-title and accent-color classes from your CSS handle the font and color flip */}
            <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
              The Future <br/> Starts <span className="accent-color">Here.</span>
            </h2>
            <p className="opacity-70 text-lg mb-12 font-medium max-w-md">
              Schedule a 15-minute discovery call. We'll discuss your platform, automation needs, and provide a live demo of your future AI.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center accent-color group-hover:accent-border transition-all">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-black uppercase text-[10px] tracking-widest mb-1 opacity-50">Email Us</h4>
                  <p className="font-bold">hello@metaedge.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center accent-color group-hover:accent-border transition-all">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-black uppercase text-[10px] tracking-widest mb-1 opacity-50">HQ</h4>
                  <p className="font-bold">Abuja Nigeria, Abj</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-discord"></i></a>
              <a href="#" className="text-2xl social-btn hover:accent-color transition-colors"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>

          {/* premium-card class from your CSS automatically flips background from #0a0a0a to #ffffff */}
          <div className="premium-card p-10 sm:p-16 rounded-[4rem] relative shadow-2xl" data-aos="fade-left">
            <form className="space-y-8" id="metaedge-form" onSubmit={handleForm}>
              
              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-accent outline-none font-bold text-lg transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Work Email</label>
                <input type="email" placeholder="john@company.com" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-accent outline-none font-bold text-lg transition-colors" />
              </div>

              <div className="custom-select-container relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Integration Goal</label>
                <div 
                  className="select-trigger cursor-pointer flex justify-between items-center border-b border-black/10 dark:border-white/10 py-4" 
                  onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}
                >
                  <span className={`font-bold text-lg transition-colors ${selectedService ? 'accent-color' : 'opacity-40'}`}>
                    {selectedService || "Choose a service..."}
                  </span>
                  <i className={`fa-solid fa-chevron-down accent-color text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
                
                {dropdownOpen && (
                  <div className="custom-options text-white absolute top-full left-0 right-0 bg-[#0a0a0a] border accent-border rounded-2xl mt-2 z-50 overflow-hidden shadow-2xl">
                    {['24/7 AI Receptionist', 'Lead Qualification Bot', 'Customer Support Agent'].map((option) => (
                      <div 
                        key={option}
                        className="option-item p-5 flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors" 
                        onClick={() => selectOption(option)}
                      >
                        <span className="font-bold">{option}</span>
                        <div className={`radio-circle w-5 h-5 border-2 rounded-full transition-all ${selectedService === option ? 'accent-bg' : 'border-black/20 dark:border-white/20'}`}></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Preferred Date</label>
                <input type="date" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:accent-color outline-none font-bold text-lg [color-scheme:light] dark:[color-scheme:dark]" />
              </div>

              {/* Using accent-bg from your CSS */}
              <button 
                type="submit" 
                className="w-full accent-bg py-7 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all active:scale-95 shadow-xl"
              >
                Confirm Booking Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}