import React from 'react';

export default function SuccessModal({ showModal, closeModal }) {
  // If showModal is false, we return null so nothing renders in the DOM
  if (!showModal) return null;

  return (
    <div id="success-modal" className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/98 backdrop-blur-xl" 
        onClick={closeModal}
      ></div>

      {/* Modal Card */}
      <div className="relative premium-card p-12 sm:p-16 rounded-[4rem] max-w-sm w-full text-center shadow-2xl border border-white/5">
        <div className="w-20 h-20 accent-bg rounded-full flex items-center justify-center mx-auto mb-8 text-white">
          <i className="fa-solid fa-check text-4xl"></i>
        </div>
        
        <h3 className="text-2xl font-black mb-4 uppercase italic dark:text-white light:text-black">
          Request Sent.
        </h3>
        
        <p className="text-sm text-gray-400 italic mb-8">
          We will reach out soon, make sure to check your mail in the next{" "}
          <span className="text-[#ADF802] dark:text-accent font-bold">2 hours</span>
        </p>
       
        <button 
          onClick={closeModal} 
          className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-[10px] hover:scale-[1.02] transition-transform active:scale-95 shadow-lg"
        >
          Back to Site
        </button>
      </div>
    </div>
  );
}