"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import BookingView from "./components/BookingView";
import SuccessModal from "./components/SuccessModal";
import Footer from "./components/Footer";

export default function Page() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );
  const [view, setView] = useState("home");
  const [tickets, setTickets] = useState(500);
  const [selectedService, setSelectedService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1200, mirror: true, once: false });
    
    if (typeof window !== "undefined") {
      setBannerVisible(localStorage.getItem("metaedge_banner_dismissed") !== "true");
    }
  }, []);

  // Handle Theme Switching
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Global click listener to close dropdowns
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest(".custom-select-container")) {
        setDropdownOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const showBooking = () => {
    setView("booking");
    window.scrollTo(0, 0);
    setTimeout(() => AOS.refresh(), 200);
  };

  const showHome = () => {
    setView("home");
    window.scrollTo(0, 0);
  };

  /**
   * handleForm
   * Receives the object from BookingView: { name, email, title }
   * title contains: "Service | Website | Date"
   */
  const handleForm = async (formData) => {
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.title, // Concatenated info
    };

    try {
      await emailjs.send(
        "service_tg2ey4n",
        "template_dgn29po",
        templateParams,
        "bU9hLmSSrxLierYco"
      );

      // Successful send - Show Modal
      setShowModal(true);
      
      // Optional: Reset service selection after success
      setSelectedService(""); 
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong with the booking. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    showHome(); // Redirect back to home after successful booking
  };

  const dismissBanner = () => {
    setBannerVisible(false);
    localStorage.setItem("metaedge_banner_dismissed", "true");
  };

  return (
    <div className="font-sans antialiased">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        showBooking={showBooking}
        bannerVisible={bannerVisible}
        dismissBanner={dismissBanner}
      />

      <main>
        {view === "home" && (
          <HomeView
            tickets={tickets}
            setTickets={setTickets}
            showBooking={showBooking}
          />
        )}

        {view === "booking" && (
          <BookingView
            showHome={showHome}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            handleForm={handleForm} // Passed as a prop
            loading={loading}       // Controls the "Sending..." button text
          />
        )}
      </main>

      <SuccessModal showModal={showModal} closeModal={closeModal} />
      
      <Footer />
    </div>
  );
}