import React,{useState} from 'react';
import emailjs from "@emailjs/browser";

export default function BookingView({
  showHome,
  selectedService,
  setSelectedService,
  dropdownOpen,
  setDropdownOpen,
  handleForm
}) {
  
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: `reason date`,
  });
  const selectOption = (val) => {
    setSelectedService(val);
    setDropdownOpen(false);
  };
  
 
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_tg2ey4n",
        "template_dgn29po",
        formData,
        "bU9hLmSSrxLierYco"
      );

      alert("Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
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
{/*Form*/}

          </div>
        </div>
      </div>
    </section>
  );
}