import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import BookingView from "./components/BookingView";
import SuccessModal from "./components/SuccessModal";
import Footer from "./components/Footer";

export default function Page() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [view, setView] = useState("home");
  const [tickets, setTickets] = useState(500);
  const [selectedService, setSelectedService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(
    localStorage.getItem("metaedge_banner_dismissed") !== "true"
  );

//once : true
  useEffect(() => {
    AOS.init({ duration: 1200 ,mirror:true});
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const handleForm = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    showHome();
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
          handleForm={handleForm}
        />
      )}

      <SuccessModal showModal={showModal} closeModal={closeModal} />
      <Footer />
    </div>
  );
}