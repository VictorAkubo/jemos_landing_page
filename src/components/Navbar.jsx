import React from 'react';

export default function Navbar({
  theme,
  toggleTheme,
  showBooking,
  bannerVisible,
  dismissBanner
}) {
  
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* THEME TOGGLE BUTTON */}
      <button 
        onClick={toggleTheme} 
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border border-white/10"
      >
        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>

      {/* PROMO BANNER - Uses accent-bg from your CSS */}
      {bannerVisible && (
        <div id="promo-banner" className="relative accent-bg text-center py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] px-10">
          <span>⚡ FREE AI AUDIT & 30% OFF INTEGRATION — <button onClick={showBooking} className="underline ml-1">Claim Now</button></span>
          <button onClick={dismissBanner} className="absolute right-4 top-1/2 -translate-y-1/2">
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-[60] nav-blur border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter italic uppercase">
              METAEDGE<span className="accent-color">AI</span>
            </span>
          </a>

          {/* STATUS INDICATOR */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="pulse-online"></div>
              <span className="text-[9px] font-black uppercase tracking-widest opacity-60">
                Systems Active
              </span>
            </div>
          </div>

          {/* CONTACT BUTTON - Using bg-black/white to flip with theme */}
          <button 
            onClick={showBooking} 
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:opacity-80 transition-all active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
}