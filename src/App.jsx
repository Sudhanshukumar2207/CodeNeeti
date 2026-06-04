import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "home":       return <Home setActivePage={setActivePage} />;
      case "about":      return <AboutUs />;
      case "why":        return <WhyChooseUs />;
      case "team":       return <OurTeam />;
      case "contact":    return <ContactUs />;
      default:           return <Home setActivePage={setActivePage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="loader-screen">
        <div className="loader-logo">
          <span className="loader-cn">CN</span>
          <span className="loader-text">CodeNeeti</span>
        </div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
