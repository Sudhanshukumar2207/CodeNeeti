import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ui";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import VRPlayer from "./pages/VRPlayer";
import "./App.css";
import "./pages/Pages.css";

function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>Error 404</div>
        <h1 className="h1">Page not <span className="grad-text">found</span></h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  const isVrPage = location.pathname === "/vr";

  return (
    <div className="app">
      <ScrollToTop />
      {!isVrPage && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/why" element={<WhyChooseUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/vr" element={<VRPlayer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isVrPage && <Footer />}
    </div>
  );
}
