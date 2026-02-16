import React, { useState } from 'react';

export default function BookingView({
  showHome,
  selectedService,
  setSelectedService,
  dropdownOpen,
  setDropdownOpen,
  handleForm,
  loading
}) {
  
  // Local state for the individual inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    website: "",
    date: ""
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const selectOption = (val) => {
    setSelectedService(val);
    setDropdownOpen(false);
  };

  const onLocalSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select an integration goal");
      return;
    }

    // CONCATENATION: Goal + Website + Date
    const combinedTitle = `${selectedService} | ${inputs.website} | ${inputs.date}`;

    // Pass structured data back to the Parent (Page.js)
    handleForm({
      name: inputs.name,
      email: inputs.email,
      title: combinedTitle
    });
  };

  return (
    <section id="booking-view" className="min-h-screen pt-25 px-6 pb-24 transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        <button onClick={showHome} className="mb-16 text-gray-500 hover:accent-color uppercase text-[10px] font-black tracking-[0.4em] flex items-center gap-2 transition-colors">
          <i className="fa-solid fa-arrow-left"></i> Return Home
        </button>
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div data-aos="fade-right">
            <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
              The Future <br/> Starts <span className="accent-color">Here.</span>
            </h2>
            <p className="opacity-70 text-lg mb-12 font-medium max-w-md text-gray-500">
              Schedule a 15-minute discovery call. We'll discuss your platform, automation needs, and provide a live demo.
            </p>
            {/* ... rest of your static left panel ... */}
          </div>

          <div className="premium-card p-10 sm:p-16 rounded-[4rem] relative shadow-2xl" data-aos="fade-left">
            <form className="space-y-8" onSubmit={onLocalSubmit}>
              
              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Full Name</label>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="John Doe" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-accent outline-none font-bold text-lg transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Work Email</label>
                <input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="john@company.com" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-accent outline-none font-bold text-lg transition-colors" />
              </div>

              {/* NEW: Company Website Input */}
              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Company Website</label>
                <input 
                  type="text" 
                  name="website" 
                  value={inputs.website} 
                  onChange={handleChange} 
                  placeholder="https://company.com" 
                  required 
                  className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-accent outline-none font-bold text-lg transition-colors" 
                />
              </div>

              <div className="custom-select-container relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Integration Goal</label>
                <div className="select-trigger cursor-pointer flex justify-between items-center border-b border-black/10 dark:border-white/10 py-4" onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}>
                  <span className={`font-bold text-lg transition-colors ${selectedService ? 'accent-color' : 'opacity-40'}`}>
                    {selectedService || "Choose a service..."}
                  </span>
                  <i className={`fa-solid fa-chevron-down accent-color text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
                {dropdownOpen && (
                  <div className="custom-options text-white absolute top-full left-0 right-0 bg-[#0a0a0a] border accent-border rounded-2xl mt-2 z-50 overflow-hidden shadow-2xl">
                    {['24/7 AI Receptionist', 'Lead Qualification Bot', 'Customer Support Agent'].map((option) => (
                      <div key={option} className="option-item p-5 flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors" onClick={() => selectOption(option)}>
                        <span className="font-bold">{option}</span>
                        <div className={`radio-circle w-5 h-5 border-2 rounded-full transition-all ${selectedService === option ? 'accent-bg' : 'border-black/20 dark:border-white/20'}`}></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Preferred Date</label>
                <input type="date" name="date" value={inputs.date} onChange={handleChange} required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:accent-color outline-none font-bold text-lg" />
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full accent-bg py-7 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all active:scale-95 shadow-xl disabled:opacity-50"
              >
                {loading ? "Sending..." : "Confirm Booking Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}