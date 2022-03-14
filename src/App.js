import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import ToTop from "./components/toTop/ToTop";
import BackToTop from "./components/backToTop/BackToTop";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <ToTop />
      <BackToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="services" element={<ServicesPage />}/>
        <Route path="/service-:title" element={<ServicePage  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
